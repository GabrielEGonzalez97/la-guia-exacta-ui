import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGoogleDriveFolderInformation } from '../common/interfaces';
import { HttpService } from '../services/http.service';
import { IWithState } from '../services/utils.service';
import { IFinalesInformation } from './interfaces';

@Component({
  selector: 'app-finales',
  templateUrl: './finales.component.html',
  styleUrls: ['./finales.component.scss'],
})
export class FinalesComponent implements OnInit {
  public finales: IFinalesInformation[] = [];

  private subjectFolderName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {}

  public ngOnInit(): void {
    this.subjectFolderName =
      this.activatedRoute.snapshot.paramMap.get('subjectName');

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
                  year: this.extractYearFromFinalName(final.name),
                  month: final.name.split(' ')[2].split('.pdf')[0],
                  showFile: false,
                  fileUrl: '',
                });
                this.sortFinalesByMonthAndYear();
              }
            );
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

  private extractYearFromFinalName(finalName: string): string {
    return /(^|\s)(\d{4})(\s|$)/.exec(finalName)[2];
  }

  private sortFinalesByMonthAndYear(): void {
    const months: string[] = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];

    this.finales.sort((a: IFinalesInformation, b: IFinalesInformation) => {
      return months.indexOf(b.month) - months.indexOf(a.month);
    });

    this.finales.sort((a: IFinalesInformation, b: IFinalesInformation) => {
      return Number(b.year) - Number(a.year);
    });
  }
}
