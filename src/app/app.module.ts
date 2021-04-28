import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GhxLightboxModule } from './ghx-lightbox/ghx-lightbox.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GhxLightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
