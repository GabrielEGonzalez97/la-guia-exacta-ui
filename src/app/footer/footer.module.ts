import { NgModule } from '@angular/core';
import {
  ButtonModule,
  GridModule,
  TilesModule,
} from 'carbon-components-angular';
import { ActionBarElementModule } from '../actions-bar/action-bar-element/action-bar-element.module';
import { FooterComponent } from './footer.component';

const CARBON_IMPORTS = [ButtonModule, GridModule, TilesModule];

@NgModule({
  declarations: [FooterComponent],
  imports: [CARBON_IMPORTS, ActionBarElementModule],
  providers: [],
  exports: [FooterComponent],
})
export class FooterModule {
  constructor() {}
}
