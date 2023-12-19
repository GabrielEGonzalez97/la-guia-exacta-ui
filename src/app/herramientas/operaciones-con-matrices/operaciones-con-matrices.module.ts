import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ButtonModule,
  GridModule,
  NumberModule,
} from 'carbon-components-angular';
import { ActionBarElementModule } from 'src/app/actions-bar/action-bar-element/action-bar-element.module';
import { MatrixModule } from './matrix/matrix.module';
import { OperacionesConMatricesComponent } from './operaciones-con-matrices.component';

import { MathjaxModule } from 'mathjax-angular';

const CARBON_IMPORTS = [ButtonModule, GridModule, NumberModule];

@NgModule({
  declarations: [OperacionesConMatricesComponent],
  imports: [
    CARBON_IMPORTS,
    ActionBarElementModule,
    MatrixModule,
    CommonModule,
    FormsModule,
    MathjaxModule.forChild(),
  ],
  providers: [],
  exports: [OperacionesConMatricesComponent],
})
export class OperacionesConMatricesModule {
  constructor() {}
}
