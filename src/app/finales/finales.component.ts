import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from 'carbon-components-angular';
import { MONTHS } from '../common/constants';
import { IGoogleDriveFolderInformation } from '../common/interfaces';
import { HttpService } from '../services/http.service';
import { IWithState, UtilsService } from '../services/utils.service';
import { IFinalesInformation } from './interfaces';
import * as JSZip from 'jszip';

@Component({
  selector: 'app-finales',
  templateUrl: './finales.component.html',
  styleUrls: ['./finales.component.scss'],
})
export class FinalesComponent implements OnInit {
  public finales: IFinalesInformation[] = [];
  public finalesToShow: IFinalesInformation[] = [];
  public areFinalesLoading: boolean = true;
  public isDownloadZipLoading: boolean = false;
  public yearDropdownItems: ListItem[] = [
    {
      content: 'Todos',
      selected: true,
    },
  ];
  public monthDropdownItems: ListItem[] = [
    {
      content: 'Todos',
      selected: true,
    },
  ];

  private subjectFolderName: string = '';
  private selectedYearContent: string = '';
  private selectedMonthContent: string = '';
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
    this.utilsService.completeDropdownWithMonths(this.monthDropdownItems);

    this.httpService
      .getFilesFromFolderWithinASubject(this.subjectFolderName, 'Finales')
      .subscribe(
        (
          filesFinalesFolderWithState: IWithState<
            IGoogleDriveFolderInformation[]
          >
        ) => {
          if (filesFinalesFolderWithState.state === 'done') {
            filesFinalesFolderWithState.value.forEach(
              (final: IGoogleDriveFolderInformation) => {
                this.finales.push({
                  id: final.id,
                  name: final.name.split('.pdf')[0],
                  webViewLink: final.webViewLink,
                  year: this.extractYearFromFinalName(final.name),
                  month: final.name.split(' ')[2].split('.pdf')[0],
                  showFile: false,
                  fileUrl: '',
                });
              }
            );
            this.sortFinalesByMonthAndYear();
            this.finalesToShow = this.finales;
            this.areFinalesLoading = false;
          } else if (filesFinalesFolderWithState.state === 'error') {
            this.areFinalesLoading = false;
          }
        }
      );
  }

  public onVerFinalButtonClick(final: IFinalesInformation): void {
    if (final.fileUrl === '') {
      this.httpService
        .getFileById(final.id)
        .subscribe((fileWithState: IWithState<ArrayBuffer>) => {
          if (fileWithState.state === 'done') {
            let file = new Blob([fileWithState.value], {
              type: 'application/pdf',
            });
            final.fileUrl = URL.createObjectURL(file);
          }
        });
    }

    final.showFile = !final.showFile;
  }

  public onSelectedYearChange(selectedYear: any): void {
    this.selectedYearContent =
      selectedYear.item.content !== 'Todos' ? selectedYear.item.content : '';
    this.onFilterChange();
  }

  public onSelectedMonthChange(selectedMonth: any): void {
    this.selectedMonthContent =
      selectedMonth.item.content !== 'Todos' ? selectedMonth.item.content : '';
    this.onFilterChange();
  }

  public downloadZip(): void {
    const zip = new JSZip();

    this.isDownloadZipLoading = true;

    this.finales.forEach((final: IFinalesInformation) => {
      this.httpService
        .getFileById(final.id)
        .subscribe((fileWithState: IWithState<ArrayBuffer>) => {
          if (fileWithState.state === 'done') {
            let file = new Blob([fileWithState.value], {
              type: 'application/pdf',
            });

            const yearFolder: JSZip = zip.folder(final.year);
            yearFolder.file(final.name + '.pdf', file);

            this.filesReadyToBeDownloaded.push(true);
            this.verifyIfDownloadCanStart(zip);
          }
        });
    });

    this.isDownloadZipLoading = false;
  }

  private verifyIfDownloadCanStart(zip: JSZip): void {
    this.isDownloadZipLoading = true;

    if (this.filesReadyToBeDownloaded.length === this.finales.length) {
      zip.generateAsync({ type: 'blob' }).then((blob) => {
        // Crea un objeto URL para descargar el archivo
        const url: string = URL.createObjectURL(blob);

        // Crea un enlace de descarga y lo agrega al DOM
        const a = document.createElement('a');
        a.href = url;
        a.download = this.subjectFolderName + '-finales.zip';
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
    this.finalesToShow = this.finales.filter(
      (final: IFinalesInformation) =>
        filterFunction(final.year, this.selectedYearContent) &&
        filterFunction(final.month, this.selectedMonthContent)
    );
  }

  private extractYearFromFinalName(finalName: string): string {
    return /(^|\s)(\d{4})(\s|$)/.exec(finalName)[2];
  }

  private sortFinalesByMonthAndYear(): void {
    this.finales.sort((a: IFinalesInformation, b: IFinalesInformation) => {
      return MONTHS.indexOf(b.month) - MONTHS.indexOf(a.month);
    });

    this.finales.sort((a: IFinalesInformation, b: IFinalesInformation) => {
      return Number(b.year) - Number(a.year);
    });
  }
}
