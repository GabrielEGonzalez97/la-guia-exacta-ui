import { NgModule } from '@angular/core';
import { GridModule, TilesModule } from 'carbon-components-angular';
import { CursosGratuitosComponent } from './cursos-gratuitos.component';
import { CommonModule } from '@angular/common';

const CARBON_IMPORTS = [GridModule, TilesModule];

@NgModule({
  declarations: [CursosGratuitosComponent],
  imports: [CommonModule, CARBON_IMPORTS],
  providers: [],
  exports: [CursosGratuitosComponent],
})
export class CursosGratuitosModule {
  constructor() {}
}
