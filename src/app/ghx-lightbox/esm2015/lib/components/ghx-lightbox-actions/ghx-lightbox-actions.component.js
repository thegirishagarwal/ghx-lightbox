/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/ghx-lightbox-actions/ghx-lightbox-actions.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GhxLightboxService } from '../../services';
export class GhxLightboxActionsComponent {
    /**
     * @param {?} gls
     */
    constructor(gls) {
        this.gls = gls;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    onCloseLightBox() {
        this.gls.destroy();
    }
}
GhxLightboxActionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ghx-lightbox-actions',
                template: "<div class=\"lightbox-actions-list\">\n  <ul>\n    <li>\n      <a href=\"javascript:;\" (click)=\"onCloseLightBox()\">\n        <span class=\"icon-close\"></span>\n      </a>\n    </li>\n  </ul>\n</div>\n",
                styles: [".lightbox-actions-list ul{list-style:none;display:flex;align-items:center}.lightbox-actions-list ul li a{background-color:#000;color:#fff;padding:5px;width:35px;height:35px;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;font-size:24px;box-sizing:border-box}.lightbox-actions-list ul li a span{display:inline-block;line-height:0}.lightbox-actions-list ul li a:hover{text-decoration:none}"]
            }] }
];
/** @nocollapse */
GhxLightboxActionsComponent.ctorParameters = () => [
    { type: GhxLightboxService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GhxLightboxActionsComponent.prototype.gls;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2h4LWxpZ2h0Ym94LWFjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2h4LWxpZ2h0Ym94LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ2h4LWxpZ2h0Ym94LWFjdGlvbnMvZ2h4LWxpZ2h0Ym94LWFjdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9wRCxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBRXRDLFlBQ1UsR0FBdUI7UUFBdkIsUUFBRyxHQUFILEdBQUcsQ0FBb0I7SUFDN0IsQ0FBQzs7OztJQUVMLFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyx3TkFBb0Q7O2FBRXJEOzs7O1lBTlEsa0JBQWtCOzs7Ozs7O0lBVXZCLDBDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHaHhMaWdodGJveFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2doeC1saWdodGJveC1hY3Rpb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2doeC1saWdodGJveC1hY3Rpb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2h4LWxpZ2h0Ym94LWFjdGlvbnMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHaHhMaWdodGJveEFjdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZ2xzOiBHaHhMaWdodGJveFNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uQ2xvc2VMaWdodEJveCgpIHtcbiAgICB0aGlzLmdscy5kZXN0cm95KCk7XG4gIH1cblxufVxuIl19