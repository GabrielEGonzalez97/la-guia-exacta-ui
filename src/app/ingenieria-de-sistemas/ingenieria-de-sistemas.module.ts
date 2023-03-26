import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ButtonModule,
  GridModule,
  ModalModule,
  TableModule,
  TilesModule,
} from 'carbon-components-angular';
import { IngenieriaDeSistemasComponent } from './ingenieria-de-sistemas.component';
import { IngenieriaDeSistemasDescripcionComponent } from './ingenieria-de-sistemas-descripcion/ingenieria-de-sistemas-descripcion.component';
import { CatedraModalWindowComponent } from '../catedras/catedra-modal-window/catedra-modal-window.component';
import { CatedraModule } from '../catedras/catedra/catedra.module';
import { IngenieriaDeSistemasPlanDeEstudiosComponent } from './ingenieria-de-sistemas-plan-de-estudios/ingenieria-de-sistemas-plan-de-estudios.component';
import { ActionBarElementModule } from '../actions-bar/action-bar-element/action-bar-element.module';

const CARBON_IMPORTS = [
  ButtonModule,
  GridModule,
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
    CatedraModule,
    ActionBarElementModule,
  ],
  providers: [],
  exports: [IngenieriaDeSistemasComponent],
})
export class IngenieriaDeSistemasModule {
  constructor() {}
}
