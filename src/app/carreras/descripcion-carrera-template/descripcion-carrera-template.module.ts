import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  GridModule,
  IconModule,
  IconService,
  TilesModule,
} from 'carbon-components-angular';
import { DescripcionCarreraTemplateComponent } from './descripcion-carrera-template.component';

import ChevronDown32 from '@carbon/icons/es/chevron--down/32';
import ChevronUp32 from '@carbon/icons/es/chevron--up/32';

const CARBON_IMPORTS = [GridModule, IconModule, TilesModule];

@NgModule({
  declarations: [DescripcionCarreraTemplateComponent],
  imports: [CommonModule, CARBON_IMPORTS],
  providers: [],
  exports: [DescripcionCarreraTemplateComponent],
})
export class DescripcionCarreraTemplateModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([ChevronDown32, ChevronUp32]);
  }
}
