import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carreras-template',
  templateUrl: './carreras-template.component.html',
  styleUrls: ['./carreras-template.component.scss'],
})
export class CarrerasTemplateComponent implements OnInit {
  @Input() public careerTitle: string;

  constructor() {}

  public ngOnInit(): void {}
}
