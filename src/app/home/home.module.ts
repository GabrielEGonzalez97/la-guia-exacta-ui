import { NgModule } from '@angular/core';
import {
  ButtonModule,
  GridModule,
  TilesModule,
} from 'carbon-components-angular';
import { HomeComponent } from './home.component';
import { FlipCardComponent } from './flip-card/flip-card.component';

const CARBON_IMPORTS = [ButtonModule, GridModule, TilesModule];

@NgModule({
  declarations: [HomeComponent, FlipCardComponent],
  imports: [CARBON_IMPORTS],
  providers: [],
  exports: [HomeComponent],
})
export class HomeModule {
  constructor() {}
}
