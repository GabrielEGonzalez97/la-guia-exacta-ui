import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule, TilesModule } from 'carbon-components-angular';
import { IngenieriaDeSistemasComponent } from './ingenieria-de-sistemas.component';
import { IngenieriaDeSistemasDescripcionComponent } from './ingenieria-de-sistemas-descripcion/ingenieria-de-sistemas-descripcion.component';

const CARBON_IMPORTS = [GridModule, TilesModule];

@NgModule({
  declarations: [IngenieriaDeSistemasComponent, IngenieriaDeSistemasDescripcionComponent],
  imports: [CommonModule, CARBON_IMPORTS],
  providers: [],
  exports: [IngenieriaDeSistemasComponent],
})
export class IngenieriaDeSistemasModule {
  constructor() {}
}
