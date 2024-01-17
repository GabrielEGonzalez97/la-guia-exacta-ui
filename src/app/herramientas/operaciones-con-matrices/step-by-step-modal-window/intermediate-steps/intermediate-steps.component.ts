import { Component, Input, OnInit } from '@angular/core';
import { ICalculationStep } from '../../interfaces';

@Component({
  selector: 'intermediate-steps',
  templateUrl: './intermediate-steps.component.html',
  styleUrls: ['./intermediate-steps.component.scss'],
})
export class IntermediateStepsComponent implements OnInit {
  @Input() public step: ICalculationStep;
  @Input() public numberStep: string;

  public intermediateStepVisible: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public setIntermediateStepVisibleValue(): void {
    this.intermediateStepVisible = !this.intermediateStepVisible;
  }
}
