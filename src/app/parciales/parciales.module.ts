import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ButtonModule,
  DropdownModule,
  GridModule,
  SkeletonModule,
  TilesModule,
} from 'carbon-components-angular';
import { SafePipeModule } from '../safe-pipe/safe-pipe.module';
import { ParcialesComponent } from './parciales.component';

const CARBON_IMPORTS = [
  ButtonModule,
  DropdownModule,
  GridModule,
  SkeletonModule,
  TilesModule,
];

@NgModule({
  declarations: [ParcialesComponent],
  imports: [SafePipeModule, CommonModule, CARBON_IMPORTS],
  providers: [],
  exports: [ParcialesComponent],
})
export class ParcialesModule {
  constructor() {}
}
