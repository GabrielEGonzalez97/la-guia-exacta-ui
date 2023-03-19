import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  GridModule,
  ModalModule,
  TilesModule,
} from 'carbon-components-angular';
import { IngenieriaDeSistemasComponent } from './ingenieria-de-sistemas.component';
import { IngenieriaDeSistemasDescripcionComponent } from './ingenieria-de-sistemas-descripcion/ingenieria-de-sistemas-descripcion.component';
import { CatedraModalWindowComponent } from '../catedras/catedra-modal-window/catedra-modal-window.component';
import { CatedraModule } from '../catedras/catedra/catedra.module';

const CARBON_IMPORTS = [GridModule, ModalModule, TilesModule];

@NgModule({
  declarations: [
    IngenieriaDeSistemasComponent,
    IngenieriaDeSistemasDescripcionComponent,
    CatedraModalWindowComponent,
  ],
  imports: [CommonModule, CARBON_IMPORTS, CatedraModule],
  providers: [],
  exports: [IngenieriaDeSistemasComponent],
})
export class IngenieriaDeSistemasModule {
  constructor() {}
}
