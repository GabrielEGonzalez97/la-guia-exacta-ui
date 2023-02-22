import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionsBarModule } from './actions-bar/actions-bar.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ActionsBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
