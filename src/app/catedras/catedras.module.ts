import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    DropdownModule,
    GridModule,
    IconModule,
    IconService,
    InputModule,
    SearchModule,
} from 'carbon-components-angular';
import { CatedraModule } from './catedra/catedra.module';
import { CatedrasComponent } from './catedras.component';

import Search16 from '@carbon/icons/es/search/16';
import { IconWithTextModule } from '../common/icon-with-text/icon-with-text.module';

const CARBON_IMPORTS = [
  DropdownModule,
  GridModule,
  IconModule,
  InputModule,
  SearchModule,
];

@NgModule({
  declarations: [CatedrasComponent],
  imports: [
    CommonModule,
    CARBON_IMPORTS,
    IconWithTextModule,
    CatedraModule,
  ],
  providers: [],
  exports: [CatedrasComponent],
})
export class CatedrasModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([Search16]);
  }
}
