import { NgModule } from '@angular/core';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [SafePipe],
  imports: [],
  providers: [],
  exports: [SafePipe],
})
export class SafePipeModule {
  constructor() {}
}
