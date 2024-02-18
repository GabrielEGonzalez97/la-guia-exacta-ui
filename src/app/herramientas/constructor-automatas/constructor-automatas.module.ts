import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ButtonModule,
  GridModule,
  IconModule,
  IconService,
  InputModule,
  ModalModule,
  TableModule,
} from 'carbon-components-angular';
import { ConstructorAutomatasComponent } from './constructor-automatas.component';

import Png24 from '@carbon/icons/es/PNG/24';
import CheckmarkOutline32 from '@carbon/icons/es/checkmark--outline/32';
import Information16 from '@carbon/icons/es/information/16';
import MisuseOutline32 from '@carbon/icons/es/misuse--outline/32';
import TrashCan24 from '@carbon/icons/es/trash-can/24';
import { AFDEquivalentModalWindowComponent } from './afd-equivalent-modal-window/afd-equivalent-modal-window.component';
import { InstructionsModalWindowComponent } from './instructions-modal-window/instructions-modal-window.component';
import { StepByStepModalWindowComponent } from './step-by-step-modal-window/step-by-step-modal-window.component';

const CARBON_IMPORTS = [
  ButtonModule,
  GridModule,
  IconModule,
  InputModule,
  ModalModule,
  TableModule,
];

@NgModule({
  declarations: [
    AFDEquivalentModalWindowComponent,
    ConstructorAutomatasComponent,
    InstructionsModalWindowComponent,
    StepByStepModalWindowComponent,
  ],
  imports: [CARBON_IMPORTS, CommonModule],
  providers: [],
  exports: [ConstructorAutomatasComponent],
})
export class ConstructorAutomatasModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([
      Information16,
      Png24,
      TrashCan24,
      CheckmarkOutline32,
      MisuseOutline32,
    ]);
  }
}
