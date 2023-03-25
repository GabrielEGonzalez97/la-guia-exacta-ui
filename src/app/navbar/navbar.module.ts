import { NgModule } from '@angular/core';
import {
  ButtonModule,
  HeaderModule,
  IconModule,
  IconService,
  PanelModule,
  SideNavModule,
} from 'carbon-components-angular';
import { NavbarComponent } from './navbar.component';

import Close16 from '@carbon/icons/es/close/16';

const CARBON_IMPORTS = [
  ButtonModule,
  HeaderModule,
  IconModule,
  PanelModule,
  SideNavModule,
];

@NgModule({
  declarations: [NavbarComponent],
  imports: [CARBON_IMPORTS],
  providers: [],
  exports: [NavbarComponent],
})
export class NavbarModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([Close16]);
  }
}
