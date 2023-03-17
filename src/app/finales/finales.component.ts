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
                  name: final.name,
                  showFile: false,
                  fileUrl: '',
                });
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
}
