import { NgModule } from '@angular/core';
import { ActionsBarComponent } from './actions-bar.component';
import { ActionBarElementModule } from './action-bar-element/action-bar-element.module';
import { HeaderModule } from 'carbon-components-angular';

const COMPONENT_IMPORTS = [ActionBarElementModule];

@NgModule({
  declarations: [ActionsBarComponent],
  imports: [COMPONENT_IMPORTS, HeaderModule],
  providers: [],
  exports: [ActionsBarComponent],
})
export class ActionsBarModule {
  constructor() {}
}
