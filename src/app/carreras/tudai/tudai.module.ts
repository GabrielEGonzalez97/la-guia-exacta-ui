import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  GridModule,
  IconModule,
  IconService,
  ModalModule,
  TilesModule,
} from 'carbon-components-angular';
import { CatedraModule } from '../../catedras/catedra/catedra.module';
import { TudaiDescripcionComponent } from './tudai-descripcion/tudai-descripcion.component';
import { TudaiPlanDeEstudiosComponent } from './tudai-plan-de-estudios/tudai-plan-de-estudios.component';
import { TudaiComponent } from './tudai.component';

import ChevronDown32 from '@carbon/icons/es/chevron--down/32';
import ChevronUp32 from '@carbon/icons/es/chevron--up/32';
import { CarreraTemplateModule } from '../carrera-template/carrera-template.module';

const CARBON_IMPORTS = [GridModule, IconModule, ModalModule, TilesModule];

const COMPONENT_IMPORTS = [
  TudaiDescripcionComponent,
  TudaiPlanDeEstudiosComponent,
];

@NgModule({
  declarations: [TudaiComponent, COMPONENT_IMPORTS],
  imports: [CommonModule, CARBON_IMPORTS, CarreraTemplateModule, CatedraModule],
  providers: [],
  exports: [TudaiComponent],
})
export class TudaiModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([ChevronDown32, ChevronUp32]);
  }
}
