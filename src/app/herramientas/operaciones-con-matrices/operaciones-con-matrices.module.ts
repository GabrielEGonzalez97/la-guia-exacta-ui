import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ButtonModule,
  DialogModule,
  DropdownModule,
  GridModule,
  IconModule,
  IconService,
  ModalModule,
  NumberModule,
} from 'carbon-components-angular';
import { ActionBarElementModule } from 'src/app/actions-bar/action-bar-element/action-bar-element.module';
import { MatrixModule } from './matrix/matrix.module';
import { OperacionesConMatricesComponent } from './operaciones-con-matrices.component';

import CharacterDecimal20 from '@carbon/icons/es/character--decimal/20';
import CharacterFraction20 from '@carbon/icons/es/character--fraction/20';
import WarningAlt32 from '@carbon/icons/es/warning--alt/32';

import { MathjaxModule } from 'mathjax-angular';
import { IntermediateStepsComponent } from './step-by-step-modal-window/intermediate-steps/intermediate-steps.component';
import { StepByStepModalWindowComponent } from './step-by-step-modal-window/step-by-step-modal-window.component';

const CARBON_IMPORTS = [
  ButtonModule,
  DialogModule,
  DropdownModule,
  GridModule,
  IconModule,
  ModalModule,
  NumberModule,
];

@NgModule({
  declarations: [
    OperacionesConMatricesComponent,
    IntermediateStepsComponent,
    StepByStepModalWindowComponent,
  ],
  imports: [
    CARBON_IMPORTS,
    ActionBarElementModule,
    MatrixModule,
    CommonModule,
    FormsModule,
    MathjaxModule.forChild(),
  ],
  providers: [],
  exports: [OperacionesConMatricesComponent, StepByStepModalWindowComponent],
})
export class OperacionesConMatricesModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([
      CharacterDecimal20,
      CharacterFraction20,
      WarningAlt32,
    ]);
  }
}
