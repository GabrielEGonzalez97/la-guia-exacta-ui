import { NgModule } from '@angular/core';
import { GridModule, TilesModule } from 'carbon-components-angular';
import { CursosGratuitosComponent } from './cursos-gratuitos.component';

const CARBON_IMPORTS = [GridModule, TilesModule];

@NgModule({
  declarations: [CursosGratuitosComponent],
  imports: [CARBON_IMPORTS],
  providers: [],
  exports: [CursosGratuitosComponent],
})
export class CursosGratuitosModule {
  constructor() {}
}
