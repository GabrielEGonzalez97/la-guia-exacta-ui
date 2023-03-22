import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  GridModule,
  ModalModule,
  TilesModule,
} from 'carbon-components-angular';
import { CatedraModule } from '../catedras/catedra/catedra.module';
import { TudaiDescripcionComponent } from './tudai-descripcion/tudai-descripcion.component';
import { TudaiComponent } from './tudai.component';
import { TudaiPlanDeEstudiosComponent } from './tudai-plan-de-estudios/tudai-plan-de-estudios.component';

const CARBON_IMPORTS = [GridModule, ModalModule, TilesModule];

const COMPONENT_IMPORTS = [
  TudaiDescripcionComponent,
  TudaiPlanDeEstudiosComponent,
];

@NgModule({
  declarations: [TudaiComponent, COMPONENT_IMPORTS],
  imports: [CommonModule, CARBON_IMPORTS, CatedraModule],
  providers: [],
  exports: [TudaiComponent],
})
export class TudaiModule {
  constructor() {}
}
