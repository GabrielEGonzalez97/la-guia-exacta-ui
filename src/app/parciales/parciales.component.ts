import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from 'carbon-components-angular';
import { PARCIALES_TYPES } from '../common/constants';
import { IGoogleDriveFolderInformation } from '../common/interfaces';
import { HttpService } from '../services/http.service';
import { IWithState } from '../services/utils.service';
import { IParcialesInformation } from './interfaces';

@Component({
  selector: 'app-parciales',
  templateUrl: './parciales.component.html',
  styleUrls: ['./parciales.component.scss'],
})
export class ParcialesComponent implements OnInit {
  public parciales: IParcialesInformation[] = [];
  public parcialesToShow: IParcialesInformation[] = [];
  public areParcialesLoading: boolean = true;
  public yearDropdownItems: ListItem[] = [
    {
      content: 'Todos',
      selected: true,
    },
  ];
  public parcialTypesItems: ListItem[] = [
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
  ];

  private subjectFolderName: string = '';
  private selectedYearContent: string = '';
  private selectedParcialTypeContent: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {}

  public ngOnInit(): void {
    this.subjectFolderName =
      this.activatedRoute.snapshot.paramMap.get('subjectName');

    this.completeDropdownWithYears();

    this.httpService
      .getFilesFromFolderWithinASubject(this.subjectFolderName, 'Parciales')
      .subscribe(
        (
          filesParcialesFolderWithState: IWithState<
            IGoogleDriveFolderInformation[]
          >
        ) => {
          if (filesParcialesFolderWithState.state === 'done') {
            filesParcialesFolderWithState.value.forEach(
              (parcial: IGoogleDriveFolderInformation) => {
                this.parciales.push({
                  id: parcial.id,
                  name: parcial.name.split('.pdf')[0],
                  year: this.extractYearFromParcialName(parcial.name),
                  month: '',
                  showFile: false,
                  fileUrl: '',
                });
              }
            );
            this.sortParcialesByParcialTypeAndYear();
            this.parcialesToShow = this.parciales;
            this.areParcialesLoading = false;
          } else if (filesParcialesFolderWithState.state === 'error') {
            this.areParcialesLoading = false;
          }
        }
      );
  }

  public onVerParcialButtonClick(parcial: IParcialesInformation): void {
    if (parcial.fileUrl === '') {
      this.httpService
        .getFileById(parcial.id)
        .subscribe((fileWithState: IWithState<ArrayBuffer>) => {
          if (fileWithState.state === 'done') {
            let file = new Blob([fileWithState.value], {
              type: 'application/pdf',
            });
            parcial.fileUrl = URL.createObjectURL(file);
          }
        });
    }

    parcial.showFile = !parcial.showFile;
  }

  public onSelectedYearChange(selectedYear: any): void {
    this.selectedYearContent =
      selectedYear.item.content !== 'Todos' ? selectedYear.item.content : '';
    this.onFilterChange();
  }

  public onSelectedParcialTypeChange(selectedParcialType: any): void {
    this.selectedParcialTypeContent =
      selectedParcialType.item.content !== 'Todos'
        ? selectedParcialType.item.content
        : '';
    this.onFilterChange();
  }

  private onFilterChange(): void {
    const filterFunction = (field: string, fieldToSearch: string) =>
      field.toLowerCase().indexOf(fieldToSearch.toLowerCase()) !== -1;
    this.parcialesToShow = this.parciales.filter(
      (final: IParcialesInformation) =>
        filterFunction(final.year, this.selectedYearContent) &&
        filterFunction(
          final.name.split(' ' + final.year)[0],
          this.selectedParcialTypeContent
        )
    );
  }

  private completeDropdownWithYears(): void {
    const currentYear: number = new Date().getFullYear();
    for (let index: number = currentYear; index >= 2010; index--) {
      this.yearDropdownItems.push({
        content: index.toString(),
        selected: false,
      });
    }
  }

  private extractYearFromParcialName(parcialName: string): string {
    return /(^|\s)(\d{4})/.exec(parcialName)[2];
  }

  private sortParcialesByParcialTypeAndYear(): void {
    this.parciales.sort(
      (a: IParcialesInformation, b: IParcialesInformation) => {
        return (
          PARCIALES_TYPES.indexOf(b.name.split(' ' + b.year)[0]) -
          PARCIALES_TYPES.indexOf(a.name.split(' ' + a.year)[0])
        );
      }
    );

    this.parciales.sort(
      (a: IParcialesInformation, b: IParcialesInformation) => {
        return Number(b.year) - Number(a.year);
      }
    );
  }
}
