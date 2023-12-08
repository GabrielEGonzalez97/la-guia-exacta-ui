import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ActionBarElementComponent } from './action-bar-element.component';

@NgModule({
  declarations: [ActionBarElementComponent],
  imports: [CommonModule],
  providers: [],
  exports: [ActionBarElementComponent],
})
export class ActionBarElementModule {
  constructor() {}
}
