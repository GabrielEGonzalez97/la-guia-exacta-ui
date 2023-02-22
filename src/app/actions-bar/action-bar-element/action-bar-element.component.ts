import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-bar-element',
  templateUrl: './action-bar-element.component.html',
  styleUrls: ['./action-bar-element.component.scss'],
})
export class ActionBarElementComponent implements OnInit {
  @Input() public elementIconImagePath: string;
  @Input() public elementLink: string;
  @Input() public elementName: string;

  constructor() {}

  public ngOnInit(): void {}

  public openLinkNewTab(): void {
    window.open(this.elementLink, '_blank');
  }
}
