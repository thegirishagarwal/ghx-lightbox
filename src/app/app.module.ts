import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GhxLightboxModule } from './demo-gallery/ghx-lightbox.module';
import { CommonModule } from '@angular/common';
import { GHX_LIGHTBOX_CONFIG, LightBoxConfigInterface } from './demo-gallery/interfaces';

const GHXConfig: LightBoxConfigInterface = {
  showCaption: true,
  showDownload: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    GhxLightboxModule
  ],
  providers: [
    {
      provide: GHX_LIGHTBOX_CONFIG,
      useValue: GHXConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
