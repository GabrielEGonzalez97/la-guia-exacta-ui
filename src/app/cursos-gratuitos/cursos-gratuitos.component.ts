import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { FREE_COURSES_PAGES } from './constants';
import { IFreeCoursesPages } from './interfaces';

@Component({
  selector: 'app-cursos-gratuitos',
  templateUrl: './cursos-gratuitos.component.html',
  styleUrls: ['./cursos-gratuitos.component.scss'],
})
export class CursosGratuitosComponent implements OnInit {
  public freeCoursesPages: IFreeCoursesPages[] = FREE_COURSES_PAGES;

  public channelId = 'UC4FHiPgS1KXkUMx3dxBUtPg';
  public channelInfo: any;

  constructor(private httpService: HttpService) {}

  public ngOnInit(): void {
    // this.httpService
    //   .getYouTubeChannelInfo(this.channelId)
    //   .subscribe((response: any) => {
    //     this.channelInfo = response.items[0].snippet;
    //     console.log(this.channelInfo);
    //   });
  }
}
