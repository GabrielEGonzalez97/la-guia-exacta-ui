import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ListItem } from 'carbon-components-angular';
import { forkJoin, map } from 'rxjs';
import {
  INGENIERIA_DE_SISTEMAS_NAME,
  LTA_NAME,
  TUDAI_NAME,
} from '../catedras/interfaces';
import { PAGE_SECTIONS } from '../common/constants';
import {
  IPageSection,
  IResourceDBInformation,
  IResourcesTableInfo,
} from '../common/interfaces';
import { HttpService } from '../services/http.service';
import { DONE_STATE, UtilsService } from '../services/utils.service';
import { CAREERS_DROPDOWN_ITEMS } from './constants';
import { ResourcesTableModel } from './resources-table-model/resources-table-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('headerTemplate', { static: true })
  private headerTemplate: TemplateRef<unknown>;

  @ViewChild('columnTemplate', { static: true })
  private columnTemplate: TemplateRef<unknown>;

  @ViewChild('tagTemplate', { static: true })
  private tagTemplate: TemplateRef<unknown>;

  @ViewChild('linkTemplate', { static: true })
  private linkTemplate: TemplateRef<unknown>;

  public pageSections: IPageSection[] = PAGE_SECTIONS;
  public parciales: IResourceDBInformation[] = [];
  public finales: IResourceDBInformation[] = [];
  public apuntes: IResourceDBInformation[] = [];

  public ingenieriaDeSistemasName: string = INGENIERIA_DE_SISTEMAS_NAME;
  public tudaiName: string = TUDAI_NAME;
  public ltaName: string = LTA_NAME;

  public resourcesTableModel: ResourcesTableModel = null;

  public areMetricsLoading: boolean = true;

  public careersDropdownItems: ListItem[] = CAREERS_DROPDOWN_ITEMS;
  public resourceTypesItems: ListItem[] = [
    {
      content: 'Todos',
      selected: true,
    },
    {
      content: 'Parcial',
      selected: false,
    },
    {
      content: 'Recuperatorio',
      selected: false,
    },
    {
      content: 'Prefinal',
      selected: false,
    },
    {
      content: 'Final',
      selected: false,
    },
  ];

  private resources: IResourcesTableInfo[] = [];
  private searchingBySubjectContent: string = '';
  private selectedCareerContent: string = '';
  private selectedResourceTypeContent: string = '';
  private selectedInitDate: string = '';
  private selectedEndDate: string = '';

  constructor(
    private httpService: HttpService,
    private utilsService: UtilsService
  ) {}

  public ngOnInit(): void {
    this.resourcesTableModel = new ResourcesTableModel(
      this.headerTemplate,
      this.columnTemplate,
      this.tagTemplate,
      this.linkTemplate,
      []
    );

    forkJoin([
      this.httpService.getAllParciales(),
      this.httpService.getAllFinales(),
      this.httpService.getAllApuntes(),
      this.httpService.getAllCatedras(),
    ])
      .pipe(
        map(
          ([
            parcialesResponse,
            finalesResponse,
            apuntesResponse,
            catedrasResponse,
          ]) => {
            const allDone: boolean =
              parcialesResponse.state === DONE_STATE &&
              finalesResponse.state === DONE_STATE &&
              apuntesResponse.state === DONE_STATE &&
              catedrasResponse.state === DONE_STATE;

            if (allDone) {
              this.parciales = parcialesResponse.value;
              this.finales = finalesResponse.value;
              this.apuntes = apuntesResponse.value;

              const resources: IResourceDBInformation[] = [];
              resources.push(...this.parciales);
              resources.push(...this.finales);
              resources.push(...this.apuntes);

              this.resources = resources.map(
                (resource: IResourceDBInformation) => {
                  return {
                    catedra: catedrasResponse.value.find(
                      (catedra) => catedra.id === resource.catedraId
                    ).name,
                    career: catedrasResponse.value
                      .find((catedra) => catedra.id === resource.catedraId)
                      .career.replace(/\s*\([^)]*\)/, ''),
                    resource: resource.name.slice(
                      0,
                      resource.name.lastIndexOf('.')
                    ),
                    createdTime: this.formatDateTime(resource.createdTime),
                    webViewLink: resource.webViewLink,
                  };
                }
              );

              this.resourcesTableModel = new ResourcesTableModel(
                this.headerTemplate,
                this.columnTemplate,
                this.tagTemplate,
                this.linkTemplate,
                this.resources
              );

              this.areMetricsLoading = false;
            }
          }
        )
      )
      .subscribe();
  }

  private formatDateTime(dateTimeString: string): string {
    const dateObj: Date = new Date(dateTimeString);

    const day: string = dateObj.getDate().toString().padStart(2, '0');
    const month: string = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year: string = dateObj.getFullYear().toString();

    return `${day}/${month}/${year}`;
  }

  public openLinkNewTab(link: string): void {
    this.utilsService.openLinkNewTab(link);
  }

  public selectPage(pageNumber: number): void {
    this.resourcesTableModel.selectPage(pageNumber);
  }

  private onFilterChange(): void {
    const filterByPartialMatch = (field: string, fieldToSearch: string) =>
      field.toLowerCase().indexOf(fieldToSearch.toLowerCase()) !== -1;
    const filterByCompleteMatch = (field: string, fieldToSearch: string) =>
      fieldToSearch
        ? field.toLowerCase() === fieldToSearch.toLowerCase()
        : true;
    const filterByDateRange = (
      dateToCheck: string,
      startDate: string,
      endDate: string
    ) => {
      const dateParts = (date: string) => date.split('/').map(Number);
      const [dayToCheck, monthToCheck, yearToCheck] = dateParts(dateToCheck);
      const [startDay, startMonth, startYear] = dateParts(startDate);
      const [endDay, endMonth, endYear] = dateParts(endDate);

      const checkDate = new Date(yearToCheck, monthToCheck - 1, dayToCheck);
      const startDateObj = new Date(startYear, startMonth - 1, startDay);
      const endDateObj = new Date(endYear, endMonth - 1, endDay);

      return checkDate >= startDateObj && checkDate <= endDateObj;
    };
    const resourcesToShow: IResourcesTableInfo[] = this.resources.filter(
      (resource: IResourcesTableInfo) =>
        filterByPartialMatch(
          resource.catedra,
          this.searchingBySubjectContent
        ) &&
        filterByCompleteMatch(resource.career, this.selectedCareerContent) &&
        filterByCompleteMatch(
          resource.resource.split(' ')[0],
          this.selectedResourceTypeContent
        ) &&
        filterByDateRange(
          resource.createdTime,
          this.selectedInitDate,
          this.selectedEndDate
        )
    );
    this.resourcesTableModel = new ResourcesTableModel(
      this.headerTemplate,
      this.columnTemplate,
      this.tagTemplate,
      this.linkTemplate,
      resourcesToShow
    );
  }

  public onChangeSearchingBySubject(subjectNameToSearch: any): void {
    this.searchingBySubjectContent = subjectNameToSearch.target.value;
    this.onFilterChange();
  }

  public onSelectedCareerChange(selectedCareer: any): void {
    this.selectedCareerContent =
      selectedCareer.item.content !== 'Todas'
        ? selectedCareer.item.content
        : '';
    this.onFilterChange();
  }

  public onSelectedResourceTypeChange(selectedResourceType: any): void {
    this.selectedResourceTypeContent =
      selectedResourceType.item.content !== 'Todos'
        ? selectedResourceType.item.content
        : '';
    this.onFilterChange();
  }

  public onDateChange(dates: Date[]): void {
    this.selectedInitDate = this.formatDateTime(dates[0].toDateString());
    if (dates.length > 1) {
      this.selectedEndDate = this.formatDateTime(dates[1].toDateString());
      this.onFilterChange();
    }
  }
}
