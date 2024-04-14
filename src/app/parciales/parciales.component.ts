import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from 'carbon-components-angular';
import * as JSZip from 'jszip';
import { PARCIALES_TYPES } from '../common/constants';
import { IGoogleDriveFolderInformation } from '../common/interfaces';
import { HttpService } from '../services/http.service';
import { IWithState, UtilsService } from '../services/utils.service';
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
  public isDownloadZipLoading: boolean = false;
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
  private filesReadyToBeDownloaded: boolean[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private utilsService: UtilsService
  ) {}

  public ngOnInit(): void {
    this.subjectFolderName =
      this.activatedRoute.snapshot.paramMap.get('subjectName');

    this.utilsService.completeDropdownWithYears(this.yearDropdownItems);

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
                  webViewLink: parcial.webViewLink,
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

  public downloadZip(): void {
    const zip = new JSZip();
    const parcialitosFolder: JSZip = zip.folder('Parcialitos');
    const parcialesFolder: JSZip = zip.folder('Parciales');
    const recuperatoriosFolder: JSZip = zip.folder('Recuperatorios');
    const prefinalesFolder: JSZip = zip.folder('Prefinales');

    this.isDownloadZipLoading = true;

    this.parciales.forEach((parcial: IParcialesInformation) => {
      this.httpService
        .getFileById(parcial.id)
        .subscribe((fileWithState: IWithState<ArrayBuffer>) => {
          if (fileWithState.state === 'done') {
            let file = new Blob([fileWithState.value], {
              type: 'application/pdf',
            });

            switch (true) {
              case parcial.name.startsWith('Parcialito'): {
                parcialitosFolder.file(parcial.name + '.pdf', file);
                break;
              }
              case parcial.name.startsWith('Parcial'): {
                parcialesFolder.file(parcial.name + '.pdf', file);
                break;
              }
              case parcial.name.startsWith('Recuperatorio'): {
                recuperatoriosFolder.file(parcial.name + '.pdf', file);
                break;
              }
              case parcial.name.startsWith('Prefinal'): {
                prefinalesFolder.file(parcial.name + '.pdf', file);
                break;
              }
              default: {
                break;
              }
            }

            this.filesReadyToBeDownloaded.push(true);
            this.verifyIfDownloadCanStart(zip);
          }
        });
    });

    this.isDownloadZipLoading = false;
  }

  private verifyIfDownloadCanStart(zip: JSZip): void {
    this.isDownloadZipLoading = true;

    if (this.filesReadyToBeDownloaded.length === this.parciales.length) {
      zip.generateAsync({ type: 'blob' }).then((blob) => {
        // Crea un objeto URL para descargar el archivo
        const url: string = URL.createObjectURL(blob);

        // Crea un enlace de descarga y lo agrega al DOM
        const a = document.createElement('a');
        a.href = url;
        a.download = this.subjectFolderName + '-parciales.zip';
        document.body.appendChild(a);

        // Simula un click en el enlace para descargar el archivo
        a.click();

        // Elimina el objeto URL
        URL.revokeObjectURL(url);

        this.isDownloadZipLoading = false;
        this.filesReadyToBeDownloaded = [];
      });
    }
  }

  private onFilterChange(): void {
    const filterFunction = (field: string, fieldToSearch: string) =>
      field.toLowerCase().indexOf(fieldToSearch.toLowerCase()) !== -1;
    this.parcialesToShow = this.parciales.filter(
      (parcial: IParcialesInformation) =>
        filterFunction(parcial.year, this.selectedYearContent) &&
        filterFunction(
          parcial.name.split(' ' + parcial.year)[0],
          this.selectedParcialTypeContent
        )
    );
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
