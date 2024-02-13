import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule } from 'carbon-components-angular';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { HomeComponent } from './home.component';

const CARBON_IMPORTS = [GridModule];

@NgModule({
  declarations: [HomeComponent, FlipCardComponent],
  imports: [CommonModule, CARBON_IMPORTS],
  providers: [],
  exports: [HomeComponent, FlipCardComponent],
})
export class HomeModule {
  constructor() {}
}
