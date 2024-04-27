import { Component, ElementRef, OnInit } from '@angular/core';
import { PAGE_SECTIONS, PAGE_TITLE, SOCIAL_MEDIAS } from '../common/constants';
import { IPageSection, ISocialMedia } from '../common/interfaces';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(document:click)': 'onClickOutsideRightPanel($event)',
  },
})
export class HeaderComponent implements OnInit {
  public pageTitle: string = PAGE_TITLE;
  public pageSections: IPageSection[] = PAGE_SECTIONS;
  public socialMedias: ISocialMedia[] = SOCIAL_MEDIAS;

  public isRightPanelVisible: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private utilsService: UtilsService
  ) {}

  public ngOnInit(): void {}

  public openLinkNewTab(link: string): void {
    this.utilsService.openLinkNewTab(link);
  }

  public updateRightPanelVisibility() {
    this.isRightPanelVisible = !this.isRightPanelVisible;
  }

  public onClickOutsideRightPanel(event: any): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isRightPanelVisible = false;
    }
  }
}
