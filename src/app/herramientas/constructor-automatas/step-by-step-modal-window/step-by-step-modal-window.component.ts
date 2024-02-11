import { Component, Inject, OnInit } from '@angular/core';
import { BaseModal } from 'carbon-components-angular';

@Component({
  selector: 'app-step-by-step-modal-window',
  templateUrl: './step-by-step-modal-window.component.html',
  styleUrls: ['./step-by-step-modal-window.component.scss'],
})
export class StepByStepModalWindowComponent
  extends BaseModal
  implements OnInit
{
  constructor(
    @Inject('steps')
    public steps: { stepDescription: string; imageUrl: string }[],
    @Inject('stringToTest') public stringToTest: string
  ) {
    super();
  }

  public ngOnInit(): void {}
}
