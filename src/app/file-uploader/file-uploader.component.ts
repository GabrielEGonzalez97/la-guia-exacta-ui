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

  constructor(private httpService: HttpService) {}

  public ngOnInit(): void {}

  public onDroppedFile(_): void {
    this.uploadFiles.forEach((file: FileItem) => {
      let fileReader = new FileReader();
      fileReader.onload = (_) => {
        fileReader.result;
      };
      fileReader.readAsText(file.file);
      this.httpService.uploadFileToDrive(file.file).subscribe(
        (response) => {
          console.log(response);
          console.log('El archivo se subió correctamente');
        },
        (error) => {
          console.error('Error al subir el archivo', error);
        }
      );
    });
  }
}
