import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ButtonModule,
  GridModule,
  SkeletonModule,
  TilesModule,
} from 'carbon-components-angular';
import { SafePipeModule } from '../safe-pipe/safe-pipe.module';
import { ResumenesComponent } from './resumenes.component';

const CARBON_IMPORTS = [ButtonModule, GridModule, SkeletonModule, TilesModule];

@NgModule({
  declarations: [ResumenesComponent],
  imports: [SafePipeModule, CommonModule, CARBON_IMPORTS],
  providers: [],
  exports: [ResumenesComponent],
})
export class ResumenesModule {
  constructor() {}
}
