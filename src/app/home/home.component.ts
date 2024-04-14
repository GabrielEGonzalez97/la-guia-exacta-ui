import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import {
  INGENIERIA_DE_SISTEMAS_NAME,
  LTA_NAME,
  TUDAI_NAME,
} from '../catedras/interfaces';
import { PAGE_SECTIONS } from '../common/constants';
import { IPageSection, IResourceDBInformation } from '../common/interfaces';
import { HttpService } from '../services/http.service';
import { DONE_STATE, UtilsService } from '../services/utils.service';
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
      [],
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

              this.resourcesTableModel = new ResourcesTableModel(
                this.headerTemplate,
                this.columnTemplate,
                this.tagTemplate,
                this.linkTemplate,
                resources,
                catedrasResponse.value
              );

              this.areMetricsLoading = false;
            }
          }
        )
      )
      .subscribe();
  }

  public openLinkNewTab(link: string): void {
    this.utilsService.openLinkNewTab(link);
  }

  public selectPage(pageNumber: number): void {
    this.resourcesTableModel.selectPage(pageNumber);
  }
}
