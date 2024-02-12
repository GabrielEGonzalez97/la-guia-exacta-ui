import { Component, OnInit } from '@angular/core';
import { CareerName, Careers } from 'src/app/catedras/interfaces';

@Component({
  selector: 'app-ingenieria-de-sistemas',
  templateUrl: './ingenieria-de-sistemas.component.html',
  styleUrls: ['./ingenieria-de-sistemas.component.scss'],
})
export class IngenieriaDeSistemasComponent implements OnInit {
  public careerTitle: CareerName = Careers.INGENIERIA_DE_SISTEMAS;

  constructor() {}

  public ngOnInit(): void {}
}
