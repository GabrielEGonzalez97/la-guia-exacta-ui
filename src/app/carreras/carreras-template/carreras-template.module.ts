import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule } from 'carbon-components-angular';
import { CarrerasTemplateComponent } from './carreras-template.component';

const CARBON_IMPORTS = [GridModule];

@NgModule({
  declarations: [CarrerasTemplateComponent],
  imports: [CommonModule, CARBON_IMPORTS],
  providers: [],
  exports: [CarrerasTemplateComponent],
})
export class CarrerasTemplateModule {
  constructor() {}
}
