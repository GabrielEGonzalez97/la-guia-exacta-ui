import { Component, OnInit } from '@angular/core';
import { CareerName, Careers } from 'src/app/catedras/interfaces';

@Component({
  selector: 'app-lta',
  templateUrl: './lta.component.html',
  styleUrls: ['./lta.component.scss'],
})
export class LtaComponent implements OnInit {
  public careerTitle: CareerName = Careers.LTA;

  constructor() {}

  public ngOnInit(): void {}
}
