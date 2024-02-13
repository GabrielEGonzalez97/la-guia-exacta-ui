import { Component, OnInit } from '@angular/core';
import { HERRAMIENTAS_SECTIONS } from 'src/app/common/constants';
import { IPageSection } from 'src/app/common/interfaces';

@Component({
  selector: 'app-herramientas-home',
  templateUrl: './herramientas-home.component.html',
  styleUrls: ['./herramientas-home.component.scss'],
})
export class HerramientasHomeComponent implements OnInit {
  public toolsSections: IPageSection[] = HERRAMIENTAS_SECTIONS;

  constructor() {}

  public ngOnInit(): void {}
}
