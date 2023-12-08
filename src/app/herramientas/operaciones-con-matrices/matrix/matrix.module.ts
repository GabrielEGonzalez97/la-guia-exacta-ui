import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import TrashCan24 from '@carbon/icons/es/trash-can/24';
import {
  GridModule,
  IconModule,
  IconService,
  NumberModule,
} from 'carbon-components-angular';
import { MatrixComponent } from './matrix.component';

const CARBON_IMPORTS = [GridModule, IconModule, NumberModule];

@NgModule({
  declarations: [MatrixComponent],
  imports: [CARBON_IMPORTS, CommonModule, FormsModule],
  providers: [],
  exports: [MatrixComponent],
})
export class MatrixModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([TrashCan24]);
  }
}
