import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ButtonModule,
  GridModule,
  InputModule,
  ModalModule,
} from 'carbon-components-angular';
import { AgregarTerminalModalWindowComponent } from './agregar-terminal-modal-window/agregar-terminal-modal-window.component';
import { ParsingAscendenteComponent } from './parsing-ascendente.component';

const CARBON_IMPORTS = [ButtonModule, GridModule, InputModule, ModalModule];

@NgModule({
  declarations: [
    ParsingAscendenteComponent,
    AgregarTerminalModalWindowComponent,
  ],
  imports: [CommonModule, CARBON_IMPORTS, FormsModule],
  providers: [],
  exports: [ParsingAscendenteComponent],
})
export class ParsingAscendenteModule {
  constructor() {}
}
