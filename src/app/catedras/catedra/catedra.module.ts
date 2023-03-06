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
import { ActionBarElementModule } from 'src/app/actions-bar/action-bar-element/action-bar-element.module';
import { CorrelativesModalWindowComponent } from '../correlatives-modal-window/correlatives-modal-window.component';
import { SubjectsThatObstructModalWindowComponent } from '../subjects-that-obstruct-modal-window/subjects-that-obstruct-modal-window.component';
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
  ],
  imports: [CommonModule, CARBON_IMPORTS, ActionBarElementModule],
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
