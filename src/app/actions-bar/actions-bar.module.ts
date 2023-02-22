import { NgModule } from '@angular/core';
import { ActionsBarComponent } from './actions-bar.component';
import { ActionBarElementModule } from './action-bar-element/action-bar-element.module';

const COMPONENT_IMPORTS = [ActionBarElementModule];

@NgModule({
  declarations: [ActionsBarComponent],
  imports: [COMPONENT_IMPORTS],
  providers: [],
  exports: [ActionsBarComponent],
})
export class ActionsBarModule {
  constructor() {}
}
