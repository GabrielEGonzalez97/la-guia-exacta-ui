import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrera-template',
  templateUrl: './carrera-template.component.html',
  styleUrls: ['./carrera-template.component.scss'],
})
export class CarreraTemplateComponent implements OnInit {
  @Input() public careerTitle: string;

  constructor() {}

  public ngOnInit(): void {}
}
