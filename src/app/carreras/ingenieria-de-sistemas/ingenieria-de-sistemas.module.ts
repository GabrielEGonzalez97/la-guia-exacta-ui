import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ButtonModule,
  GridModule,
  IconModule,
  IconService,
  ModalModule,
  TableModule,
  TilesModule,
} from 'carbon-components-angular';
import { ActionBarElementModule } from '../../actions-bar/action-bar-element/action-bar-element.module';
import { CatedraModalWindowComponent } from '../../catedras/catedra-modal-window/catedra-modal-window.component';
import { CatedraModule } from '../../catedras/catedra/catedra.module';
import { IngenieriaDeSistemasDescripcionComponent } from './ingenieria-de-sistemas-descripcion/ingenieria-de-sistemas-descripcion.component';
import { IngenieriaDeSistemasPlanDeEstudiosComponent } from './ingenieria-de-sistemas-plan-de-estudios/ingenieria-de-sistemas-plan-de-estudios.component';
import { IngenieriaDeSistemasComponent } from './ingenieria-de-sistemas.component';

import ChevronDown32 from '@carbon/icons/es/chevron--down/32';
import ChevronUp32 from '@carbon/icons/es/chevron--up/32';
import { CarrerasTemplateModule } from '../carreras-template/carreras-template.module';

const CARBON_IMPORTS = [
  ButtonModule,
  GridModule,
  IconModule,
  ModalModule,
  TableModule,
  TilesModule,
];

const COMPONENT_IMPORTS = [
  IngenieriaDeSistemasDescripcionComponent,
  IngenieriaDeSistemasPlanDeEstudiosComponent,
];

@NgModule({
  declarations: [
    IngenieriaDeSistemasComponent,
    CatedraModalWindowComponent,
    COMPONENT_IMPORTS,
  ],
  imports: [
    CommonModule,
    CARBON_IMPORTS,
    CarrerasTemplateModule,
    CatedraModule,
    ActionBarElementModule,
  ],
  providers: [],
  exports: [IngenieriaDeSistemasComponent],
})
export class IngenieriaDeSistemasModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([ChevronDown32, ChevronUp32]);
  }
}
