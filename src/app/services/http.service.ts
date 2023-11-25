import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGoogleDriveFolderInformation } from '../common/interfaces';
import { IWithState, UtilsService } from './utils.service';

const API_URL = 'https://la-guia-exacta.vercel.app';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private utilsService: UtilsService) {}

  public getFilesFromFolderWithinASubject(
    subjectName: string,
    folderToSearch: string
  ): Observable<IWithState<IGoogleDriveFolderInformation[]>> {
    return this.getWithState<IGoogleDriveFolderInformation[]>(
      API_URL +
        `/getFilesFromFolderWithinASubject/${subjectName}/${folderToSearch}`
    );
  }

  public getFileById(fileId: string): Observable<IWithState<ArrayBuffer>> {
    return this.getWithState<ArrayBuffer>(
      API_URL + `/getFileById/${fileId}`,
      'arraybuffer'
    );
  }

  public getJSONFileById(fileId: string): Observable<IWithState<ArrayBuffer>> {
    return this.getWithState<any>(API_URL + `/getFileById/${fileId}`);
  }

  public uploadFileToDrive(file: File, filesName: string) {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('filesName', filesName);

    // Hace la solicitud HTTP a la API para subir el archivo a Google Drive
    return this.postWithState<any>(
      API_URL + '/uploadFileFromCommunity',
      formData
    );
  }

  public getYouTubeChannelInfo(channelId: string) {
    const apiKey = 'AIzaSyAAwYKshc8dVlWNVTEv3q-oR8wlDlTk1qU';
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`;

    return this.http.get(url);
  }

  public getLogoOfPage(pageName: string) {
    const url = `https://logo.clearbit.com/${pageName}`;

    return this.http.get(url);
  }

  private getWithState = <T>(url: string, responseType?, params?: HttpParams) =>
    this.utilsService.withState(
      this.http.get<T>(url, { params, responseType })
    );

  private postWithState = <T>(
    url: string,
    body: any,
    responseType?,
    params?: HttpParams
  ) =>
    this.utilsService.withState(
      this.http.post<T>(url, body, { params, responseType })
    );
}
