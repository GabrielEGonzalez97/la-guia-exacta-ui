import { Component, OnInit } from '@angular/core';
import { PAGE_SECTIONS } from '../common/constants';
import { IPageSection } from '../common/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public pageSections: IPageSection[] = PAGE_SECTIONS;

  constructor() {}

  public ngOnInit(): void {}
}
