import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './actions-bar.component.html',
  styleUrls: ['./actions-bar.component.scss'],
})
export class ActionsBarComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}

  public openLinkNewTab(link: string): void {
    window.open(link, '_blank');
  }
}
