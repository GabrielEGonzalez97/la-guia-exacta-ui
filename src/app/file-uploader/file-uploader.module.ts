import { NgModule } from '@angular/core';
import {
  ButtonModule,
  FileUploaderModule,
  GridModule,
  TilesModule,
} from 'carbon-components-angular';
import { FileUploaderComponent } from './file-uploader.component';

const CARBON_IMPORTS = [
  ButtonModule,
  FileUploaderModule,
  GridModule,
  TilesModule,
];

@NgModule({
  declarations: [FileUploaderComponent],
  imports: [CARBON_IMPORTS],
  providers: [],
  exports: [FileUploaderComponent],
})
export class FileUploaderComponentModule {
  constructor() {}
}
