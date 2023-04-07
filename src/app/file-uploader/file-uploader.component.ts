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

  public filesName: string = '';

  public isFilesInputNameVisible: boolean = false;

  public isSubmitFilesButtonDisabled: boolean = true;

  constructor(private httpService: HttpService) {}

  public ngOnInit(): void {}

  public onDroppedFile(_): void {
    if (this.uploadFiles.size > 0) {
      this.isFilesInputNameVisible = true;
    } else {
      this.isFilesInputNameVisible = false;
    }
  }

  public onFileInputNameChange(newFileName: any): void {
    this.filesName = newFileName.target.value;

    if (this.filesName !== '') {
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
      this.httpService.uploadFileToDrive(file.file, this.filesName).subscribe(
        (_) => {
          this.isFilesInputNameVisible = false;
          this.isSubmitFilesButtonDisabled = true;
        },
        (_) => {
          this.isFilesInputNameVisible = false;
          this.isSubmitFilesButtonDisabled = true;
        }
      );
    });
    this.uploadFiles = new Set<FileItem>();
    this.filesName = '';
  }
}
