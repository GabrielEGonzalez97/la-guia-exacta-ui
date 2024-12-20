import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ButtonModule,
  GridModule,
  IconModule,
  IconService,
  InputModule,
  ModalModule,
} from 'carbon-components-angular';
import { AgregarNoTerminalModalWindowComponent } from './agregar-no-terminal-modal-window/agregar-no-terminal-modal-window.component';
import { AgregarTerminalModalWindowComponent } from './agregar-terminal-modal-window/agregar-terminal-modal-window.component';
import { ParsingAscendenteComponent } from './parsing-ascendente.component';

import Close16 from '@carbon/icons/es/close/16';

const CARBON_IMPORTS = [
  ButtonModule,
  GridModule,
  IconModule,
  InputModule,
  ModalModule,
];

@NgModule({
  declarations: [
    ParsingAscendenteComponent,
    AgregarNoTerminalModalWindowComponent,
    AgregarTerminalModalWindowComponent,
  ],
  imports: [CommonModule, CARBON_IMPORTS, FormsModule],
  providers: [],
  exports: [ParsingAscendenteComponent],
})
export class ParsingAscendenteModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([Close16]);
  }
}
