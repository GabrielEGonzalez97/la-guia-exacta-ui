import { NgModule } from '@angular/core';
import {
  ButtonModule,
  HeaderModule,
  IconModule,
  IconService,
  PanelModule,
  SideNavModule,
} from 'carbon-components-angular';
import { IconWithTextModule } from '../common/icon-with-text/icon-with-text.module';
import { HeaderComponent } from './header.component';

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
const COMPONENT_IMPORTS = [IconWithTextModule];

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, CARBON_IMPORTS, COMPONENT_IMPORTS],
  providers: [],
  exports: [HeaderComponent],
})
export class HeaderComponentModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([Close16, Home24]);
  }
}
