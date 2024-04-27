import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    ButtonModule,
    GridModule,
    TilesModule,
} from 'carbon-components-angular';
import { IconWithTextModule } from '../common/icon-with-text/icon-with-text.module';
import { FooterComponent } from './footer.component';

const CARBON_IMPORTS = [ButtonModule, GridModule, TilesModule];

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, CARBON_IMPORTS, IconWithTextModule],
  providers: [],
  exports: [FooterComponent],
})
export class FooterModule {
  constructor() {}
}
