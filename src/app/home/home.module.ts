import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ButtonModule,
  GridModule,
  TilesModule,
} from 'carbon-components-angular';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { HomeComponent } from './home.component';

const CARBON_IMPORTS = [ButtonModule, GridModule, TilesModule];

@NgModule({
  declarations: [HomeComponent, FlipCardComponent],
  imports: [CommonModule, CARBON_IMPORTS],
  providers: [],
  exports: [HomeComponent],
})
export class HomeModule {
  constructor() {}
}
