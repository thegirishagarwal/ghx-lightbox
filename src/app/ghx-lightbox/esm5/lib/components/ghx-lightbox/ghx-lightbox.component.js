/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/ghx-lightbox/ghx-lightbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { GhxLightboxService } from '../../services';
var GhxLightboxComponent = /** @class */ (function () {
    function GhxLightboxComponent(viewContainerRef, glService, render2) {
        this.viewContainerRef = viewContainerRef;
        this.glService = glService;
        this.render2 = render2;
        this.src = '';
        this.caption = '';
        this.captionPosition = 'bottom';
        this.showPrevNextButton = false;
    }
    /**
     * @return {?}
     */
    GhxLightboxComponent.prototype.onWindowResize = /**
     * @return {?}
     */
    function () {
        this.setImageHeight();
    };
    /**
     * @return {?}
     */
    GhxLightboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    GhxLightboxComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.setImageHeight();
    };
    /**
     * @return {?}
     */
    GhxLightboxComponent.prototype.closeLightBox = /**
     * @return {?}
     */
    function () {
        this.glService.destroy();
    };
    /**
     * @return {?}
     */
    GhxLightboxComponent.prototype.setImageHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var totalHeight = window.innerHeight - 100;
        this.render2.setStyle(this.lightboxImage.nativeElement, 'max-height', totalHeight + "px");
    };
    GhxLightboxComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'ghx-lightbox',
                    template: "<div class=\"ghx-lightbox\">\n  <div class=\"lightbox-overlay\" (click)=\"closeLightBox()\"></div>\n  <div class=\"lightbox-container\">\n    <div class=\"inner-container\">\n      <div class=\"lightbox-caption {{captionPosition}}\" #lightCaption>\n        <h3>{{caption}}</h3>\n      </div>\n      <figure #lightBoxFigure>\n        <img [src]=\"src\" [alt]=\"caption\" #lightboxImage>\n      </figure>\n    </div>\n  </div>\n\n  <ng-container *ngIf=\"showPrevNextButton\">\n    <ghx-lightbox-nav></ghx-lightbox-nav>\n  </ng-container>\n  <div class=\"lightbox-actions\">\n    <ghx-lightbox-actions></ghx-lightbox-actions>\n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".lightbox-overlay{z-index:9999;background-color:rgba(0,0,0,.7);width:100%;height:100%;position:fixed;top:0;left:0;right:0;bottom:0;margin:auto}.ghx-lightbox{position:fixed;top:0;left:0;right:0;bottom:0;margin:auto;width:100%;height:100%;z-index:9999;box-sizing:border-box;display:flex;align-items:center;justify-content:center}.ghx-lightbox .lightbox-container{position:absolute;display:flex;align-items:center;justify-content:center;max-width:100%;z-index:10000;padding:25px;box-sizing:inherit}.ghx-lightbox .lightbox-container .inner-container{max-width:100%;position:relative}.ghx-lightbox .lightbox-container figure{height:100%}.ghx-lightbox .lightbox-container figure img{max-width:100%;max-height:100%}.ghx-lightbox .lightbox-container .lightbox-caption{color:#fff;position:absolute;box-sizing:border-box;left:0;width:100%}.ghx-lightbox .lightbox-container .lightbox-caption.top{padding:15px 15px 30px;top:0;background:linear-gradient(to top,rgba(0,0,0,0),#000)}.ghx-lightbox .lightbox-container .lightbox-caption.bottom{padding:30px 15px 15px;bottom:0;background:linear-gradient(to bottom,rgba(0,0,0,0),#000)}.ghx-lightbox .lightbox-container .lightbox-caption h3{word-break:break-all;line-height:1.2;font-size:18px;letter-spacing:.5px}.ghx-lightbox .lightbox-actions{position:fixed;top:0;right:0;z-index:9999}", "@font-face{font-family:Lightbox;src:url(lightbox.eot);src:url(lightbox.eot?#iefix) format(\"embedded-opentype\"),url(lightbox.woff) format(\"woff\"),url(lightbox.ttf) format(\"truetype\"),url(lightbox.svg#Lightbox) format(\"svg\");font-weight:400;font-style:normal}[data-icon]:before{font-family:Lightbox!important;content:attr(data-icon);font-style:normal!important;font-weight:400!important;font-variant:normal!important;text-transform:none!important;speak:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}[class*=\" icon-\"]:before,[class^=icon-]:before{font-family:Lightbox!important;font-style:normal!important;font-weight:400!important;font-variant:normal!important;text-transform:none!important;speak:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-close:before{content:\"a\"}.icon-zoom-in:before{content:\"b\"}.icon-zoom-out:before{content:\"c\"}.icon-angle-double-left:before{content:\"d\"}.icon-angle-double-right:before{content:\"e\"}body.ghx-lightbox-opened{overflow:hidden}"]
                }] }
    ];
    /** @nocollapse */
    GhxLightboxComponent.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: GhxLightboxService },
        { type: Renderer2 }
    ]; };
    GhxLightboxComponent.propDecorators = {
        src: [{ type: Input }],
        caption: [{ type: Input }],
        captionPosition: [{ type: Input }],
        showPrevNextButton: [{ type: Input }],
        lightCaption: [{ type: ViewChild, args: ['lightCaption', { static: true },] }],
        lightBoxFigure: [{ type: ViewChild, args: ['lightBoxFigure', { static: true },] }],
        lightboxImage: [{ type: ViewChild, args: ['lightboxImage', { static: true },] }],
        onWindowResize: [{ type: HostListener, args: ['window:resize',] }]
    };
    return GhxLightboxComponent;
}());
export { GhxLightboxComponent };
if (false) {
    /** @type {?} */
    GhxLightboxComponent.prototype.src;
    /** @type {?} */
    GhxLightboxComponent.prototype.caption;
    /** @type {?} */
    GhxLightboxComponent.prototype.captionPosition;
    /** @type {?} */
    GhxLightboxComponent.prototype.showPrevNextButton;
    /** @type {?} */
    GhxLightboxComponent.prototype.lightCaption;
    /** @type {?} */
    GhxLightboxComponent.prototype.lightBoxFigure;
    /** @type {?} */
    GhxLightboxComponent.prototype.lightboxImage;
    /** @type {?} */
    GhxLightboxComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    GhxLightboxComponent.prototype.glService;
    /**
     * @type {?}
     * @private
     */
    GhxLightboxComponent.prototype.render2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2h4LWxpZ2h0Ym94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2doeC1saWdodGJveC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2doeC1saWdodGJveC9naHgtbGlnaHRib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxTQUFTLEVBQ1QsU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEQ7SUFxQkUsOEJBQ1MsZ0JBQWtDLEVBQ2pDLFNBQTZCLEVBQzdCLE9BQWtCO1FBRm5CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDN0IsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQWZuQixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsb0JBQWUsR0FBcUIsUUFBUSxDQUFDO1FBQzdDLHVCQUFrQixHQUFZLEtBQUssQ0FBQztJQWF6QyxDQUFDOzs7O0lBR0wsNkNBQWM7OztJQURkO1FBRUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsaURBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELDRDQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELDZDQUFjOzs7SUFBZDs7WUFDUSxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBSyxXQUFXLE9BQUksQ0FBQyxDQUFDO0lBQzVGLENBQUM7O2dCQTlDRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxjQUFjO29CQUN4Qiw4b0JBQTRDO29CQUU1QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQVhDLGdCQUFnQjtnQkFHVCxrQkFBa0I7Z0JBTHpCLFNBQVM7OztzQkFnQlIsS0FBSzswQkFDTCxLQUFLO2tDQUNMLEtBQUs7cUNBQ0wsS0FBSzsrQkFFTCxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtpQ0FFMUMsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQztnQ0FFMUMsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7aUNBU3pDLFlBQVksU0FBQyxlQUFlOztJQXNCL0IsMkJBQUM7Q0FBQSxBQWpERCxJQWlEQztTQTFDWSxvQkFBb0I7OztJQUUvQixtQ0FBMEI7O0lBQzFCLHVDQUE4Qjs7SUFDOUIsK0NBQXNEOztJQUN0RCxrREFBNkM7O0lBRTdDLDRDQUN5Qzs7SUFDekMsOENBQzJDOztJQUMzQyw2Q0FDMEM7O0lBR3hDLGdEQUF5Qzs7Ozs7SUFDekMseUNBQXFDOzs7OztJQUNyQyx1Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2h4TGlnaHRib3hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdnaHgtbGlnaHRib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2h4LWxpZ2h0Ym94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2h4LWxpZ2h0Ym94LmNvbXBvbmVudC5zY3NzJywgJy4uLy4uL3N0eWxlcy9fZ2h4LWxpZ2h0Ym94LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBHaHhMaWdodGJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQElucHV0KCkgc3JjOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgY2FwdGlvbjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGNhcHRpb25Qb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyA9ICdib3R0b20nO1xuICBASW5wdXQoKSBzaG93UHJldk5leHRCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdsaWdodENhcHRpb24nLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGxpZ2h0Q2FwdGlvbiE6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdsaWdodEJveEZpZ3VyZScsIHtzdGF0aWM6IHRydWV9KVxuICAgIGxpZ2h0Qm94RmlndXJlITogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ2xpZ2h0Ym94SW1hZ2UnLCB7c3RhdGljOiB0cnVlfSlcbiAgICBsaWdodGJveEltYWdlITogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBnbFNlcnZpY2U6IEdoeExpZ2h0Ym94U2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcjI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuICBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICB0aGlzLnNldEltYWdlSGVpZ2h0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLnNldEltYWdlSGVpZ2h0KCk7XG4gIH1cblxuICBjbG9zZUxpZ2h0Qm94KCkge1xuICAgIHRoaXMuZ2xTZXJ2aWNlLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHNldEltYWdlSGVpZ2h0KCkge1xuICAgIGNvbnN0IHRvdGFsSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gMTAwO1xuICAgIHRoaXMucmVuZGVyMi5zZXRTdHlsZSh0aGlzLmxpZ2h0Ym94SW1hZ2UubmF0aXZlRWxlbWVudCwgJ21heC1oZWlnaHQnLCBgJHt0b3RhbEhlaWdodH1weGApO1xuICB9XG5cblxufVxuIl19