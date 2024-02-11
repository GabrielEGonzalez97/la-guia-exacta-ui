import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ButtonModule,
  GridModule,
  IconModule,
  IconService,
  InputModule,
  TableModule,
} from 'carbon-components-angular';
import { ConstructorAutomatasComponent } from './constructor-automatas.component';

import CheckmarkOutline32 from '@carbon/icons/es/checkmark--outline/32';
import MisuseOutline32 from '@carbon/icons/es/misuse--outline/32';
import Png24 from '@carbon/icons/es/PNG/24';
import TrashCan24 from '@carbon/icons/es/trash-can/24';

const CARBON_IMPORTS = [
  ButtonModule,
  GridModule,
  IconModule,
  InputModule,
  TableModule,
];

@NgModule({
  declarations: [ConstructorAutomatasComponent],
  imports: [CARBON_IMPORTS, CommonModule],
  providers: [],
  exports: [ConstructorAutomatasComponent],
})
export class ConstructorAutomatasModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([
      CheckmarkOutline32,
      MisuseOutline32,
      Png24,
      TrashCan24,
    ]);
  }
}
