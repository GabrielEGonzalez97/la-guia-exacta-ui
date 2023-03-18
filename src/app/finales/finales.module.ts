import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ButtonModule,
  DropdownModule,
  GridModule,
  TilesModule,
} from 'carbon-components-angular';
import { SafePipeModule } from '../safe-pipe/safe-pipe.module';
import { FinalesComponent } from './finales.component';

const CARBON_IMPORTS = [ButtonModule, DropdownModule, GridModule, TilesModule];

@NgModule({
  declarations: [FinalesComponent],
  imports: [SafePipeModule, CommonModule, CARBON_IMPORTS],
  providers: [],
  exports: [FinalesComponent],
})
export class FinalesModule {
  constructor() {}
}
