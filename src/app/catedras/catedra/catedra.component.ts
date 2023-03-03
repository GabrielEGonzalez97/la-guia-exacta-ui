import { Component, Input, OnInit } from '@angular/core';
import { ISubjectType } from '../interfaces';

@Component({
  selector: 'app-catedra',
  templateUrl: './catedra.component.html',
  styleUrls: ['./catedra.component.scss'],
})
export class CatedraComponent implements OnInit {
  @Input() public subject: ISubjectType;

  constructor() {}

  public ngOnInit(): void {}

  public openLinkNewTab(link: string): void {
    if (link) {
      window.open(link, '_blank');
    }
  }
}
