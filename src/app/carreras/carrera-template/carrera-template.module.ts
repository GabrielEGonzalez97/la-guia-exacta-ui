import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule } from 'carbon-components-angular';
import { CarreraTemplateComponent } from './carrera-template.component';

const CARBON_IMPORTS = [GridModule];

@NgModule({
  declarations: [CarreraTemplateComponent],
  imports: [CommonModule, CARBON_IMPORTS],
  providers: [],
  exports: [CarreraTemplateComponent],
})
export class CarreraTemplateModule {
  constructor() {}
}
