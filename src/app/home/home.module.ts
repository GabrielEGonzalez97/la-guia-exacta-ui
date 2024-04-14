import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  DatePickerModule,
  DropdownModule,
  GridModule,
  IconModule,
  IconService,
  InputModule,
  PaginationModule,
  SkeletonModule,
  TableModule,
  TagModule,
} from 'carbon-components-angular';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { HomeComponent } from './home.component';

import Link24 from '@carbon/icons/es/link/24';

const CARBON_IMPORTS = [
  DatePickerModule,
  DropdownModule,
  GridModule,
  IconModule,
  InputModule,
  PaginationModule,
  SkeletonModule,
  TableModule,
  TagModule,
];

@NgModule({
  declarations: [HomeComponent, FlipCardComponent],
  imports: [CommonModule, CARBON_IMPORTS],
  providers: [],
  exports: [HomeComponent, FlipCardComponent],
})
export class HomeModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([Link24]);
  }
}
