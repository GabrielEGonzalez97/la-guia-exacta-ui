import { Component, Inject, OnInit } from '@angular/core';
import { BaseModal } from 'carbon-components-angular';
import { ICalculationStep } from '../interfaces';

@Component({
  selector: 'app-step-by-step-modal-window',
  templateUrl: './step-by-step-modal-window.component.html',
  styleUrls: ['./step-by-step-modal-window.component.scss'],
})
export class StepByStepModalWindowComponent
  extends BaseModal
  implements OnInit
{
  public intermediateStepsVisibles: boolean[] = [];

  constructor(
    @Inject('steps') public steps: ICalculationStep[],
    @Inject('latexExpression') public latexExpression: string
  ) {
    super();
  }

  public ngOnInit(): void {
    this.steps.forEach((_) => {
      this.intermediateStepsVisibles.push(false);
    });
  }

  public setIntermediateStepVisibleValue(index: number): void {
    this.intermediateStepsVisibles[index] =
      !this.intermediateStepsVisibles[index];
  }
}
