import { NgModule } from '@angular/core';
import { TilesModule } from 'carbon-components-angular';
import { FooterComponent } from './footer.component';

const CARBON_IMPORTS = [TilesModule];

@NgModule({
  declarations: [FooterComponent],
  imports: [CARBON_IMPORTS],
  providers: [],
  exports: [FooterComponent],
})
export class FooterModule {
  constructor() {}
}
