import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  GhxLightboxComponent,
  GhxLightboxActionsComponent,
  GhxLightboxNavComponent
} from './components';

import {
  GhxLightboxService
} from './services';

import {
  GhxLightboxDirective,
  GhxLightboxGroupDirective
} from './directives';



@NgModule({
  declarations: [
    GhxLightboxComponent,
    GhxLightboxDirective,
    GhxLightboxGroupDirective,
    GhxLightboxActionsComponent,
    GhxLightboxNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GhxLightboxDirective,
    GhxLightboxGroupDirective
  ],
  entryComponents: [GhxLightboxComponent],
  providers: [
    GhxLightboxService
  ]
})
export class GhxLightboxModule { }
