/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/ghx-lightbox-actions/ghx-lightbox-actions.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GhxLightboxService } from '../../services';
var GhxLightboxActionsComponent = /** @class */ (function () {
    function GhxLightboxActionsComponent(gls) {
        this.gls = gls;
    }
    /**
     * @return {?}
     */
    GhxLightboxActionsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    GhxLightboxActionsComponent.prototype.onCloseLightBox = /**
     * @return {?}
     */
    function () {
        this.gls.destroy();
    };
    GhxLightboxActionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ghx-lightbox-actions',
                    template: "<div class=\"lightbox-actions-list\">\n  <ul>\n    <li>\n      <a href=\"javascript:;\" (click)=\"onCloseLightBox()\">\n        <span class=\"icon-close\"></span>\n      </a>\n    </li>\n  </ul>\n</div>\n",
                    styles: [".lightbox-actions-list ul{list-style:none;display:flex;align-items:center}.lightbox-actions-list ul li a{background-color:#000;color:#fff;padding:5px;width:35px;height:35px;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;font-size:24px;box-sizing:border-box}.lightbox-actions-list ul li a span{display:inline-block;line-height:0}.lightbox-actions-list ul li a:hover{text-decoration:none}"]
                }] }
    ];
    /** @nocollapse */
    GhxLightboxActionsComponent.ctorParameters = function () { return [
        { type: GhxLightboxService }
    ]; };
    return GhxLightboxActionsComponent;
}());
export { GhxLightboxActionsComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GhxLightboxActionsComponent.prototype.gls;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2h4LWxpZ2h0Ym94LWFjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2h4LWxpZ2h0Ym94LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ2h4LWxpZ2h0Ym94LWFjdGlvbnMvZ2h4LWxpZ2h0Ym94LWFjdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRDtJQU9FLHFDQUNVLEdBQXVCO1FBQXZCLFFBQUcsR0FBSCxHQUFHLENBQW9CO0lBQzdCLENBQUM7Ozs7SUFFTCw4Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQscURBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyQixDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLHdOQUFvRDs7aUJBRXJEOzs7O2dCQU5RLGtCQUFrQjs7SUFvQjNCLGtDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FiWSwyQkFBMkI7Ozs7OztJQUdwQywwQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2h4TGlnaHRib3hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnaHgtbGlnaHRib3gtYWN0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9naHgtbGlnaHRib3gtYWN0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2doeC1saWdodGJveC1hY3Rpb25zLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2h4TGlnaHRib3hBY3Rpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGdsczogR2h4TGlnaHRib3hTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvbkNsb3NlTGlnaHRCb3goKSB7XG4gICAgdGhpcy5nbHMuZGVzdHJveSgpO1xuICB9XG5cbn1cbiJdfQ==