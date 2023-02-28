import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ButtonModule,
  DropdownModule,
  GridModule,
  InputModule,
  SearchModule,
  TagModule,
  TilesModule,
} from 'carbon-components-angular';
import { ActionBarElementModule } from '../actions-bar/action-bar-element/action-bar-element.module';
import { CatedrasComponent } from './catedras.component';

const CARBON_IMPORTS = [
  ButtonModule,
  DropdownModule,
  GridModule,
  InputModule,
  SearchModule,
  TagModule,
  TilesModule,
];

@NgModule({
  declarations: [CatedrasComponent],
  imports: [CommonModule, CARBON_IMPORTS, ActionBarElementModule],
  providers: [],
  exports: [CatedrasComponent],
})
export class CatedrasModule {
  constructor() {}
}
