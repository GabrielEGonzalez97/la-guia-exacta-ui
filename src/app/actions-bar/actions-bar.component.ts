import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './actions-bar.component.html',
  styleUrls: ['./actions-bar.component.scss'],
  host: {
    '(document:click)': 'onClickOutsideRightPanel($event)',
  },
})
export class ActionsBarComponent implements OnInit {
  public isRightPanelVisible: boolean = false;

  constructor(private elementRef: ElementRef) {}

  public ngOnInit(): void {}

  public openLinkNewTab(link: string): void {
    window.open(link, '_blank');
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
