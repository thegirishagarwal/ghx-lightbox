/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/ghx-lightbox.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Directive, ElementRef, HostBinding, HostListener, Injector, Input, Renderer2 } from '@angular/core';
import { GhxLightboxComponent } from '../components';
import { GhxLightboxService } from '../services';
export class GhxLightboxDirective {
    /**
     * @param {?} elemRef
     * @param {?} glService
     * @param {?} render2
     * @param {?} cfr
     * @param {?} appRef
     * @param {?} injector
     */
    constructor(elemRef, glService, render2, cfr, appRef, injector) {
        this.elemRef = elemRef;
        this.glService = glService;
        this.render2 = render2;
        this.cfr = cfr;
        this.appRef = appRef;
        this.injector = injector;
        this.src = '';
        this.alt = '';
        this.elemRef.nativeElement.classList.add('ghx-lightbox-item');
    }
    /**
     * @param {?} allItems
     * @param {?=} index
     * @return {?}
     */
    onClick(allItems, index = 0) {
        // console.error(index);
        if (this.elemRef.nativeElement.closest('.ghx-lightbox-group') === null) {
            this.glService.openedIndex = 0;
            /** @type {?} */
            const source = [
                {
                    src: this.src,
                    caption: this.alt
                }
            ];
            this.initLightBox(source);
        }
        else {
        }
    }
    /**
     * @return {?}
     */
    get bindClass() {
        return true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.render2.setStyle(this.elemRef.nativeElement, 'cursor', 'pointer');
    }
    /**
     * @param {?} source
     * @return {?}
     */
    initLightBox(source) {
        /** @type {?} */
        const cf = this.cfr.resolveComponentFactory(GhxLightboxComponent);
        /** @type {?} */
        const component = cf.create(this.injector);
        this.appRef.attachView(component.hostView);
        /** @type {?} */
        const domElem = (/** @type {?} */ (((/** @type {?} */ (component.hostView))).rootNodes[0]));
        document.body.appendChild(domElem);
        this.glService.componentRef = component;
        this.glService._setupComponentInstance(source);
        /** @type {?} */
        const bodyElemet = (/** @type {?} */ (document.querySelector('body')));
        bodyElemet.classList.add('ghx-lightbox-opened');
    }
}
GhxLightboxDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[ghxLightbox]',
            },] }
];
/** @nocollapse */
GhxLightboxDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: GhxLightboxService },
    { type: Renderer2 },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector }
];
GhxLightboxDirective.propDecorators = {
    src: [{ type: Input }],
    alt: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }],
    bindClass: [{ type: HostBinding, args: ['class.ghx-lightbox-item',] }]
};
if (false) {
    /** @type {?} */
    GhxLightboxDirective.prototype.src;
    /** @type {?} */
    GhxLightboxDirective.prototype.alt;
    /**
     * @type {?}
     * @private
     */
    GhxLightboxDirective.prototype.elemRef;
    /**
     * @type {?}
     * @private
     */
    GhxLightboxDirective.prototype.glService;
    /**
     * @type {?}
     * @private
     */
    GhxLightboxDirective.prototype.render2;
    /**
     * @type {?}
     * @private
     */
    GhxLightboxDirective.prototype.cfr;
    /**
     * @type {?}
     * @private
     */
    GhxLightboxDirective.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    GhxLightboxDirective.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2h4LWxpZ2h0Ym94LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2doeC1saWdodGJveC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2doeC1saWdodGJveC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsY0FBYyxFQUNkLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUVWLFdBQVcsRUFDWCxZQUFZLEVBQ1osUUFBUSxFQUNSLEtBQUssRUFFTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU1qRCxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7Ozs7SUFLL0IsWUFDVSxPQUFnQyxFQUNoQyxTQUE2QixFQUM3QixPQUFrQixFQUNsQixHQUE2QixFQUM3QixNQUFzQixFQUN0QixRQUFrQjtRQUxsQixZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQUNoQyxjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUM3QixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQ2xCLFFBQUcsR0FBSCxHQUFHLENBQTBCO1FBQzdCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFUbkIsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULFFBQUcsR0FBRyxFQUFFLENBQUM7UUFVaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7OztJQUlELE9BQU8sQ0FBQyxRQUFvQixFQUFFLEtBQUssR0FBRyxDQUFDO1FBQ3JDLHdCQUF3QjtRQUN4QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7O2tCQUN6QixNQUFNLEdBQUc7Z0JBQ2I7b0JBQ0UsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO29CQUNiLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRztpQkFDbEI7YUFDRjtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0I7YUFBTTtTQUNOO0lBQ0gsQ0FBQzs7OztJQUVELElBQ0ksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7SUFHRCxZQUFZLENBQUMsTUFBa0I7O2NBR3ZCLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixDQUFDOztjQUMzRCxTQUFTLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Y0FFckMsT0FBTyxHQUFHLG1CQUFBLENBQUMsbUJBQUEsU0FBUyxDQUFDLFFBQVEsRUFBd0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBZTtRQUN4RixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7UUFFeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Y0FFekMsVUFBVSxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQW1CO1FBQ3BFLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBOURGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLGVBQWU7YUFDMUI7Ozs7WUFoQkMsVUFBVTtZQVdILGtCQUFrQjtZQUp6QixTQUFTO1lBVFQsd0JBQXdCO1lBRHhCLGNBQWM7WUFPZCxRQUFROzs7a0JBZVAsS0FBSztrQkFDTCxLQUFLO3NCQWNMLFlBQVksU0FBQyxPQUFPO3dCQWdCcEIsV0FBVyxTQUFDLHlCQUF5Qjs7OztJQS9CdEMsbUNBQWtCOztJQUNsQixtQ0FBa0I7Ozs7O0lBR2hCLHVDQUF3Qzs7Ozs7SUFDeEMseUNBQXFDOzs7OztJQUNyQyx1Q0FBMEI7Ozs7O0lBQzFCLG1DQUFxQzs7Ozs7SUFDckMsc0NBQThCOzs7OztJQUM5Qix3Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdoeExpZ2h0Ym94Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBJdGVtVHlwZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgR2h4TGlnaHRib3hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbZ2h4TGlnaHRib3hdJyxcbn0pXG5leHBvcnQgY2xhc3MgR2h4TGlnaHRib3hEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHNyYyA9ICcnO1xuICBASW5wdXQoKSBhbHQgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1SZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgZ2xTZXJ2aWNlOiBHaHhMaWdodGJveFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXIyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7XG4gICAgdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ2h4LWxpZ2h0Ym94LWl0ZW0nKTtcbiAgfVxuXG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKGFsbEl0ZW1zOiBJdGVtVHlwZVtdLCBpbmRleCA9IDApIHtcbiAgICAvLyBjb25zb2xlLmVycm9yKGluZGV4KTtcbiAgICBpZiAodGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuY2xvc2VzdCgnLmdoeC1saWdodGJveC1ncm91cCcpID09PSBudWxsKSB7XG4gICAgICB0aGlzLmdsU2VydmljZS5vcGVuZWRJbmRleCA9IDA7XG4gICAgICBjb25zdCBzb3VyY2UgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6IHRoaXMuc3JjLFxuICAgICAgICAgIGNhcHRpb246IHRoaXMuYWx0XG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgICB0aGlzLmluaXRMaWdodEJveChzb3VyY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5naHgtbGlnaHRib3gtaXRlbScpXG4gIGdldCBiaW5kQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcjIuc2V0U3R5bGUodGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCAncG9pbnRlcicpO1xuICB9XG5cblxuICBpbml0TGlnaHRCb3goc291cmNlOiBJdGVtVHlwZVtdKSB7XG5cblxuICAgIGNvbnN0IGNmID0gdGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoR2h4TGlnaHRib3hDb21wb25lbnQpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IGNmLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcbiAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudC5ob3N0Vmlldyk7XG5cbiAgICBjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudC5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRWxlbSk7XG4gICAgdGhpcy5nbFNlcnZpY2UuY29tcG9uZW50UmVmID0gY29tcG9uZW50O1xuXG4gICAgdGhpcy5nbFNlcnZpY2UuX3NldHVwQ29tcG9uZW50SW5zdGFuY2Uoc291cmNlKTtcblxuICAgIGNvbnN0IGJvZHlFbGVtZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgYXMgSFRNTEJvZHlFbGVtZW50O1xuICAgIGJvZHlFbGVtZXQuY2xhc3NMaXN0LmFkZCgnZ2h4LWxpZ2h0Ym94LW9wZW5lZCcpO1xuICB9XG5cbn1cbiJdfQ==