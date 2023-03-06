import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlaceholderModule } from 'carbon-components-angular';
import { ActionsBarModule } from './actions-bar/actions-bar.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatedrasModule } from './catedras/catedras.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActionsBarModule,
    CatedrasModule,
    NavbarModule,
    PlaceholderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
