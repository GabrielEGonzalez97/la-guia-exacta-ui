import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  GridModule,
  IconModule,
  IconService,
  ModalModule,
  TilesModule,
} from 'carbon-components-angular';
import { CatedraModule } from '../catedras/catedra/catedra.module';
import ChevronDown32 from '@carbon/icons/es/chevron--down/32';
import ChevronUp32 from '@carbon/icons/es/chevron--up/32';
import { LtaComponent } from './lta.component';
import { LtaDescripcionComponent } from './lta-descripcion/lta-descripcion.component';
import { LtaPlanDeEstudiosComponent } from './lta-plan-de-estudios/lta-plan-de-estudios.component';

const CARBON_IMPORTS = [GridModule, IconModule, ModalModule, TilesModule];

const COMPONENT_IMPORTS = [LtaDescripcionComponent, LtaPlanDeEstudiosComponent];

@NgModule({
  declarations: [LtaComponent, COMPONENT_IMPORTS, LtaPlanDeEstudiosComponent],
  imports: [CommonModule, CARBON_IMPORTS, CatedraModule],
  providers: [],
  exports: [LtaComponent],
})
export class LtaModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([ChevronDown32, ChevronUp32]);
  }
}
