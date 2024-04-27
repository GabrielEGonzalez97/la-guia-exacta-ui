import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconWithTextComponent } from './icon-with-text.component';

@NgModule({
  declarations: [IconWithTextComponent],
  imports: [CommonModule],
  providers: [],
  exports: [IconWithTextComponent],
})
export class IconWithTextModule {
  constructor() {}
}
