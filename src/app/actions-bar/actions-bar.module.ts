import { NgModule } from '@angular/core';
import { ActionsBarComponent } from './actions-bar.component';
import { ActionBarElementModule } from './action-bar-element/action-bar-element.module';
import {
  ButtonModule,
  HeaderModule,
  IconModule,
  IconService,
  PanelModule,
  SideNavModule,
} from 'carbon-components-angular';

import Close16 from '@carbon/icons/es/close/16';

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
  imports: [CARBON_IMPORTS, COMPONENT_IMPORTS],
  providers: [],
  exports: [ActionsBarComponent],
})
export class ActionsBarModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([Close16]);
  }
}
