import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    ButtonModule,
    DropdownModule,
    GridModule,
    ModalModule,
    TagModule,
    TilesModule,
} from 'carbon-components-angular';
import { IconWithTextModule } from 'src/app/common/icon-with-text/icon-with-text.module';
import { TooltipComponentModule } from 'src/app/tooltip/tooltip.module';
import { CorrelativesModalWindowComponent } from '../correlatives-modal-window/correlatives-modal-window.component';
import { SubjectsThatObstructModalWindowComponent } from '../subjects-that-obstruct-modal-window/subjects-that-obstruct-modal-window.component';
import { CatedraColumnWithButtonComponent } from './catedra-column-with-button/catedra-column-with-button.component';
import { CatedraComponent } from './catedra.component';

const CARBON_IMPORTS = [
  ButtonModule,
  DropdownModule,
  GridModule,
  ModalModule,
  TagModule,
  TilesModule,
];

@NgModule({
  declarations: [
    CatedraComponent,
    CorrelativesModalWindowComponent,
    SubjectsThatObstructModalWindowComponent,
    CatedraColumnWithButtonComponent,
  ],
  imports: [
    CommonModule,
    CARBON_IMPORTS,
    IconWithTextModule,
    TooltipComponentModule,
  ],
  providers: [],
  exports: [
    CatedraComponent,
    CorrelativesModalWindowComponent,
    SubjectsThatObstructModalWindowComponent,
  ],
})
export class CatedraModule {
  constructor() {}
}
