import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  DialogModule,
  IconModule,
  IconService,
} from 'carbon-components-angular';
import { TooltipComponent } from './tooltip.component';

import Information16 from '@carbon/icons/es/information/16';

const CARBON_IMPORTS = [DialogModule, IconModule];

@NgModule({
  declarations: [TooltipComponent],
  imports: [CommonModule, ...CARBON_IMPORTS],
  exports: [TooltipComponent],
})
export class TooltipComponentModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([Information16]);
  }
}
