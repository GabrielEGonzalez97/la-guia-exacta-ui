import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule } from 'carbon-components-angular';
import { HomeModule } from 'src/app/home/home.module';
import { CarrerasHomeComponent } from './carreras-home.component';

const CARBON_IMPORTS = [GridModule];

@NgModule({
  declarations: [CarrerasHomeComponent],
  imports: [CommonModule, CARBON_IMPORTS, HomeModule],
  providers: [],
  exports: [CarrerasHomeComponent],
})
export class CarrerasHomeModule {
  constructor() {}
}
