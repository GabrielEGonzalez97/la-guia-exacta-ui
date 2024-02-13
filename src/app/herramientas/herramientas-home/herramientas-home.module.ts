import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule } from 'carbon-components-angular';
import { HomeModule } from 'src/app/home/home.module';
import { HerramientasHomeComponent } from './herramientas-home.component';

const CARBON_IMPORTS = [GridModule];

@NgModule({
  declarations: [HerramientasHomeComponent],
  imports: [CommonModule, CARBON_IMPORTS, HomeModule],
  providers: [],
  exports: [HerramientasHomeComponent],
})
export class HerramientasHomeModule {
  constructor() {}
}
