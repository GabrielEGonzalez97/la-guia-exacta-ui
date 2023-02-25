import { NgModule } from '@angular/core';
import { HeaderModule } from 'carbon-components-angular';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [HeaderModule],
  providers: [],
  exports: [NavbarComponent],
})
export class NavbarModule {
  constructor() {}
}
