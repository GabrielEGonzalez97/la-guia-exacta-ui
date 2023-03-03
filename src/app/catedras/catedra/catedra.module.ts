import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ButtonModule,
  GridModule,
  TagModule,
  TilesModule,
} from 'carbon-components-angular';
import { ActionBarElementModule } from 'src/app/actions-bar/action-bar-element/action-bar-element.module';
import { CatedraComponent } from './catedra.component';

const CARBON_IMPORTS = [ButtonModule, GridModule, TagModule, TilesModule];

@NgModule({
  declarations: [CatedraComponent],
  imports: [CommonModule, CARBON_IMPORTS, ActionBarElementModule],
  providers: [],
  exports: [CatedraComponent],
})
export class CatedraModule {
  constructor() {}
}
