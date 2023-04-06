import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  ButtonModule,
  FileUploaderModule,
  GridModule,
  InputModule,
  TilesModule,
} from 'carbon-components-angular';
import { FileUploaderComponent } from './file-uploader.component';

const CARBON_IMPORTS = [
  ButtonModule,
  FileUploaderModule,
  GridModule,
  InputModule,
  TilesModule,
];

@NgModule({
  declarations: [FileUploaderComponent],
  imports: [BrowserModule, FormsModule, CARBON_IMPORTS],
  providers: [],
  exports: [FileUploaderComponent],
})
export class FileUploaderComponentModule {
  constructor() {}
}
