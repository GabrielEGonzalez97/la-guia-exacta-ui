import { Component, OnInit } from '@angular/core';
import { CareerName, Careers } from 'src/app/catedras/interfaces';

@Component({
  selector: 'app-tudai',
  templateUrl: './tudai.component.html',
  styleUrls: ['./tudai.component.scss'],
})
export class TudaiComponent implements OnInit {
  public careerTitle: CareerName = Careers.TUDAI;

  constructor() {}

  public ngOnInit(): void {}
}
