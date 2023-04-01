import { Component, OnInit } from '@angular/core';
import { FileItem } from 'carbon-components-angular';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements OnInit {
  public uploadFiles: Set<FileItem> = new Set<FileItem>();

  public isSubmitFilesButtonDisabled: boolean = true;

  constructor(private httpService: HttpService) {}

  public ngOnInit(): void {}

  public onDroppedFile(_): void {
    if (this.uploadFiles.size > 0) {
      this.isSubmitFilesButtonDisabled = false;
    } else {
      this.isSubmitFilesButtonDisabled = true;
    }
  }

  public onSubmitFiles(): void {
    this.uploadFiles.forEach((file: FileItem) => {
      let fileReader = new FileReader();
      fileReader.onload = (_) => {
        fileReader.result;
      };
      fileReader.readAsText(file.file);
      this.httpService.uploadFileToDrive(file.file).subscribe(
        (_) => {
          this.uploadFiles = new Set<FileItem>();
          this.isSubmitFilesButtonDisabled = true;
        },
        (_) => {
          this.uploadFiles = new Set<FileItem>();
          this.isSubmitFilesButtonDisabled = true;
        }
      );
    });
  }
}
