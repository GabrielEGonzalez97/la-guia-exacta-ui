import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGoogleDriveFolderInformation } from '../common/interfaces';
import { HttpService } from '../services/http.service';
import { IWithState } from '../services/utils.service';
import { IResumenesInformation } from './interfaces';

@Component({
  selector: 'app-resumenes',
  templateUrl: './resumenes.component.html',
  styleUrls: ['./resumenes.component.scss'],
})
export class ResumenesComponent implements OnInit {
  public resumenes: IResumenesInformation[] = [];
  public areResumenesLoading: boolean = true;

  private subjectFolderName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {}

  public ngOnInit(): void {
    this.subjectFolderName =
      this.activatedRoute.snapshot.paramMap.get('subjectName');

    this.httpService
      .getFilesFromFolderWithinASubject(this.subjectFolderName, 'Resumenes')
      .subscribe(
        (
          filesResumenesFolderWithState: IWithState<
            IGoogleDriveFolderInformation[]
          >
        ) => {
          if (filesResumenesFolderWithState.state === 'done') {
            filesResumenesFolderWithState.value.forEach(
              (resumen: IGoogleDriveFolderInformation) => {
                this.resumenes.push({
                  id: resumen.id,
                  name: resumen.name.split('.pdf')[0],
                  webViewLink: resumen.webViewLink,
                  year: '',
                  month: '',
                  showFile: false,
                  fileUrl: '',
                });
              }
            );
            this.areResumenesLoading = false;
          } else if (filesResumenesFolderWithState.state === 'error') {
            this.areResumenesLoading = false;
          }
        }
      );
  }

  public onVerResumenButtonClick(resumen: IResumenesInformation): void {
    if (resumen.fileUrl === '') {
      this.httpService
        .getFileById(resumen.id)
        .subscribe((fileWithState: IWithState<ArrayBuffer>) => {
          if (fileWithState.state === 'done') {
            let file = new Blob([fileWithState.value], {
              type: 'application/pdf',
            });
            resumen.fileUrl = URL.createObjectURL(file);
          } else if (fileWithState.state === 'error') {
            resumen.fileUrl = 'large file'
          }
        });
    }

    resumen.showFile = !resumen.showFile;
  }
}
