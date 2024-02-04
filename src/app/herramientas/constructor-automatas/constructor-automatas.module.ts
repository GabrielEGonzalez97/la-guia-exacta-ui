import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule } from 'carbon-components-angular';

import { ConstructorAutomatasComponent } from './constructor-automatas.component';

const CARBON_IMPORTS = [GridModule];

@NgModule({
  declarations: [ConstructorAutomatasComponent],
  imports: [CARBON_IMPORTS, CommonModule],
  providers: [],
  exports: [ConstructorAutomatasComponent],
})
export class ConstructorAutomatasModule {
  constructor() {}
}
