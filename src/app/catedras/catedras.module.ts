import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  DropdownModule,
  GridModule,
  InputModule,
  SearchModule,
} from 'carbon-components-angular';
import { ActionBarElementModule } from '../actions-bar/action-bar-element/action-bar-element.module';
import { CatedrasComponent } from './catedras.component';
import { CatedraModule } from './catedra/catedra.module';

const CARBON_IMPORTS = [DropdownModule, GridModule, InputModule, SearchModule];

@NgModule({
  declarations: [CatedrasComponent],
  imports: [
    CommonModule,
    CARBON_IMPORTS,
    ActionBarElementModule,
    CatedraModule,
  ],
  providers: [],
  exports: [CatedrasComponent],
})
export class CatedrasModule {
  constructor() {}
}
