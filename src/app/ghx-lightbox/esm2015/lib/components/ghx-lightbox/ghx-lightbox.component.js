/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/ghx-lightbox/ghx-lightbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { GhxLightboxService } from '../../services';
export class GhxLightboxComponent {
    /**
     * @param {?} viewContainerRef
     * @param {?} glService
     * @param {?} render2
     */
    constructor(viewContainerRef, glService, render2) {
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
    onWindowResize() {
        this.setImageHeight();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.setImageHeight();
    }
    /**
     * @return {?}
     */
    closeLightBox() {
        this.glService.destroy();
    }
    /**
     * @return {?}
     */
    setImageHeight() {
        /** @type {?} */
        const totalHeight = window.innerHeight - 100;
        this.render2.setStyle(this.lightboxImage.nativeElement, 'max-height', `${totalHeight}px`);
    }
}
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
GhxLightboxComponent.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: GhxLightboxService },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2h4LWxpZ2h0Ym94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2doeC1saWdodGJveC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2doeC1saWdodGJveC9naHgtbGlnaHRib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxTQUFTLEVBQ1QsU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFTcEQsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBYy9CLFlBQ1MsZ0JBQWtDLEVBQ2pDLFNBQTZCLEVBQzdCLE9BQWtCO1FBRm5CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDN0IsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQWZuQixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsb0JBQWUsR0FBcUIsUUFBUSxDQUFDO1FBQzdDLHVCQUFrQixHQUFZLEtBQUssQ0FBQztJQWF6QyxDQUFDOzs7O0lBR0wsY0FBYztRQUNaLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsY0FBYzs7Y0FDTixXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxHQUFHLFdBQVcsSUFBSSxDQUFDLENBQUM7SUFDNUYsQ0FBQzs7O1lBOUNGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLDhvQkFBNEM7Z0JBRTVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQVhDLGdCQUFnQjtZQUdULGtCQUFrQjtZQUx6QixTQUFTOzs7a0JBZ0JSLEtBQUs7c0JBQ0wsS0FBSzs4QkFDTCxLQUFLO2lDQUNMLEtBQUs7MkJBRUwsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NkJBRTFDLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7NEJBRTFDLFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOzZCQVN6QyxZQUFZLFNBQUMsZUFBZTs7OztJQWxCN0IsbUNBQTBCOztJQUMxQix1Q0FBOEI7O0lBQzlCLCtDQUFzRDs7SUFDdEQsa0RBQTZDOztJQUU3Qyw0Q0FDeUM7O0lBQ3pDLDhDQUMyQzs7SUFDM0MsNkNBQzBDOztJQUd4QyxnREFBeUM7Ozs7O0lBQ3pDLHlDQUFxQzs7Ozs7SUFDckMsdUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdoeExpZ2h0Ym94U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZ2h4LWxpZ2h0Ym94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2doeC1saWdodGJveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2doeC1saWdodGJveC5jb21wb25lbnQuc2NzcycsICcuLi8uLi9zdHlsZXMvX2doeC1saWdodGJveC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgR2h4TGlnaHRib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGNhcHRpb246IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBjYXB0aW9uUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcbiAgQElucHV0KCkgc2hvd1ByZXZOZXh0QnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgnbGlnaHRDYXB0aW9uJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBsaWdodENhcHRpb24hOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnbGlnaHRCb3hGaWd1cmUnLCB7c3RhdGljOiB0cnVlfSlcbiAgICBsaWdodEJveEZpZ3VyZSE6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdsaWdodGJveEltYWdlJywge3N0YXRpYzogdHJ1ZX0pXG4gICAgbGlnaHRib3hJbWFnZSE6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgZ2xTZXJ2aWNlOiBHaHhMaWdodGJveFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXIyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcbiAgb25XaW5kb3dSZXNpemUoKSB7XG4gICAgdGhpcy5zZXRJbWFnZUhlaWdodCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5zZXRJbWFnZUhlaWdodCgpO1xuICB9XG5cbiAgY2xvc2VMaWdodEJveCgpIHtcbiAgICB0aGlzLmdsU2VydmljZS5kZXN0cm95KCk7XG4gIH1cblxuICBzZXRJbWFnZUhlaWdodCgpIHtcbiAgICBjb25zdCB0b3RhbEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDEwMDtcbiAgICB0aGlzLnJlbmRlcjIuc2V0U3R5bGUodGhpcy5saWdodGJveEltYWdlLm5hdGl2ZUVsZW1lbnQsICdtYXgtaGVpZ2h0JywgYCR7dG90YWxIZWlnaHR9cHhgKTtcbiAgfVxuXG5cbn1cbiJdfQ==