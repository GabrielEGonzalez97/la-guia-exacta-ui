import { Component, OnInit } from '@angular/core';
import { PAGE_SECTIONS, SOCIAL_MEDIAS } from '../common/constants';
import { IPageSection, ISocialMedia } from '../common/interfaces';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public pageSections: IPageSection[] = PAGE_SECTIONS;
  public socialMedias: ISocialMedia[] = SOCIAL_MEDIAS;

  constructor(private utilsService: UtilsService) {}

  public ngOnInit(): void {}

  public openLinkNewTab(link: string): void {
    this.utilsService.openLinkNewTab(link);
  }

  public navigateTo(route: string): void {
    this.utilsService.navigateTo(route);
  }
}
