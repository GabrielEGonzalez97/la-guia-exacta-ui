import { NgModule } from '@angular/core';
import {
  ButtonModule,
  HeaderModule,
  IconModule,
  IconService,
  PanelModule,
  SideNavModule,
} from 'carbon-components-angular';
import { ActionBarElementModule } from './action-bar-element/action-bar-element.module';
import { ActionsBarComponent } from './actions-bar.component';

import { CommonModule } from '@angular/common';
import Close16 from '@carbon/icons/es/close/16';
import Home24 from '@carbon/icons/es/home/24';

const CARBON_IMPORTS = [
  ButtonModule,
  HeaderModule,
  IconModule,
  PanelModule,
  SideNavModule,
];
const COMPONENT_IMPORTS = [ActionBarElementModule];

@NgModule({
  declarations: [ActionsBarComponent],
  imports: [CommonModule, CARBON_IMPORTS, COMPONENT_IMPORTS],
  providers: [],
  exports: [ActionsBarComponent],
})
export class ActionsBarModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([Close16, Home24]);
  }
}
