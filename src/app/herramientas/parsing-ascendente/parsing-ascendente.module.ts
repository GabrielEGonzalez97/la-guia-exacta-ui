import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ButtonModule,
  GridModule,
  InputModule,
  ModalModule,
} from 'carbon-components-angular';
import { AgregarNoTerminalModalWindowComponent } from './agregar-no-terminal-modal-window/agregar-no-terminal-modal-window.component';
import { AgregarTerminalModalWindowComponent } from './agregar-terminal-modal-window/agregar-terminal-modal-window.component';
import { ParsingAscendenteComponent } from './parsing-ascendente.component';

const CARBON_IMPORTS = [ButtonModule, GridModule, InputModule, ModalModule];

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
  constructor() {}
}
