import { Component, ElementRef, OnInit } from '@angular/core';
import { PAGE_SECTIONS } from '../common/constants';
import { IPageSection } from '../common/interfaces';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-action-bar',
  templateUrl: './actions-bar.component.html',
  styleUrls: ['./actions-bar.component.scss'],
  host: {
    '(document:click)': 'onClickOutsideRightPanel($event)',
  },
})
export class ActionsBarComponent implements OnInit {
  public pageSections: IPageSection[] = PAGE_SECTIONS;

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
