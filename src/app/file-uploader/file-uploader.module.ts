import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  ButtonModule,
  ComboBoxModule,
  FileUploaderModule,
  GridModule,
  InputModule,
  ModalModule,
  TilesModule,
} from 'carbon-components-angular';
import { FileUploaderComponent } from './file-uploader.component';

const CARBON_IMPORTS = [
  ButtonModule,
  ComboBoxModule,
  FileUploaderModule,
  GridModule,
  InputModule,
  ModalModule,
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
