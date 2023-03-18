import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlaceholderModule } from 'carbon-components-angular';
import { ActionsBarModule } from './actions-bar/actions-bar.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatedrasModule } from './catedras/catedras.module';
import { FinalesModule } from './finales/finales.module';
import { NavbarModule } from './navbar/navbar.module';
import { VideosClasesModule } from './videos-clases/videos-clases.module';

const MODULE_IMPORTS = [AppRoutingModule, BrowserModule, HttpClientModule];

const COMPONENT_IMPORTS = [
  ActionsBarModule,
  CatedrasModule,
  FinalesModule,
  NavbarModule,
  VideosClasesModule,
];

const CARBON_COMPONENTS_IMPORTS = [PlaceholderModule];

@NgModule({
  declarations: [AppComponent],
  imports: [MODULE_IMPORTS, COMPONENT_IMPORTS, CARBON_COMPONENTS_IMPORTS],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
