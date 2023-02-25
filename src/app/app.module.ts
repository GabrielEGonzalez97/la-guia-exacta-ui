import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionsBarModule } from './actions-bar/actions-bar.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ActionsBarModule, NavbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
