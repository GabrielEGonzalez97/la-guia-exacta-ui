import { NgModule } from '@angular/core';
import { HeaderModule } from 'carbon-components-angular';
import { NavbarComponent } from './navbar.component';

const CARBON_IMPORTS = [HeaderModule];

@NgModule({
  declarations: [NavbarComponent],
  imports: [CARBON_IMPORTS],
  providers: [],
  exports: [NavbarComponent],
})
export class NavbarModule {
  constructor() {}
}
