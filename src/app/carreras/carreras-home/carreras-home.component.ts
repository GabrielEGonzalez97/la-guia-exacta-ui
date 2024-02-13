import { Component, OnInit } from '@angular/core';
import { CARRERAS_SECTIONS } from 'src/app/common/constants';
import { IPageSection } from 'src/app/common/interfaces';

@Component({
  selector: 'app-carreras-home',
  templateUrl: './carreras-home.component.html',
  styleUrls: ['./carreras-home.component.scss'],
})
export class CarrerasHomeComponent implements OnInit {
  public careersSections: IPageSection[] = CARRERAS_SECTIONS;

  constructor() {}

  public ngOnInit(): void {}
}
