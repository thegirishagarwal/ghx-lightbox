/**
 * @fileoverview added by tsickle
 * Generated from: lib/ghx-lightbox.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhxLightboxComponent, GhxLightboxActionsComponent, GhxLightboxNavComponent } from './components';
import { GhxLightboxService } from './services';
import { GhxLightboxDirective, GhxLightboxGroupDirective } from './directives';
export class GhxLightboxModule {
}
GhxLightboxModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2h4LWxpZ2h0Ym94Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2doeC1saWdodGJveC8iLCJzb3VyY2VzIjpbImxpYi9naHgtbGlnaHRib3gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUNMLG9CQUFvQixFQUNwQiwyQkFBMkIsRUFDM0IsdUJBQXVCLEVBQ3hCLE1BQU0sY0FBYyxDQUFDO0FBRXRCLE9BQU8sRUFDTCxrQkFBa0IsRUFDbkIsTUFBTSxZQUFZLENBQUM7QUFFcEIsT0FBTyxFQUNMLG9CQUFvQixFQUNwQix5QkFBeUIsRUFDMUIsTUFBTSxjQUFjLENBQUM7QUF3QnRCLE1BQU0sT0FBTyxpQkFBaUI7OztZQXBCN0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIseUJBQXlCO29CQUN6QiwyQkFBMkI7b0JBQzNCLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG9CQUFvQjtvQkFDcEIseUJBQXlCO2lCQUMxQjtnQkFDRCxlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDdkMsU0FBUyxFQUFFO29CQUNULGtCQUFrQjtpQkFDbkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1xuICBHaHhMaWdodGJveENvbXBvbmVudCxcbiAgR2h4TGlnaHRib3hBY3Rpb25zQ29tcG9uZW50LFxuICBHaHhMaWdodGJveE5hdkNvbXBvbmVudFxufSBmcm9tICcuL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQge1xuICBHaHhMaWdodGJveFNlcnZpY2Vcbn0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5cbmltcG9ydCB7XG4gIEdoeExpZ2h0Ym94RGlyZWN0aXZlLFxuICBHaHhMaWdodGJveEdyb3VwRGlyZWN0aXZlXG59IGZyb20gJy4vZGlyZWN0aXZlcyc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBHaHhMaWdodGJveENvbXBvbmVudCxcbiAgICBHaHhMaWdodGJveERpcmVjdGl2ZSxcbiAgICBHaHhMaWdodGJveEdyb3VwRGlyZWN0aXZlLFxuICAgIEdoeExpZ2h0Ym94QWN0aW9uc0NvbXBvbmVudCxcbiAgICBHaHhMaWdodGJveE5hdkNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBHaHhMaWdodGJveERpcmVjdGl2ZSxcbiAgICBHaHhMaWdodGJveEdyb3VwRGlyZWN0aXZlXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0doeExpZ2h0Ym94Q29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgR2h4TGlnaHRib3hTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgR2h4TGlnaHRib3hNb2R1bGUgeyB9XG4iXX0=