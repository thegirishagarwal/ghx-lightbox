/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/ghx-lightbox.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Directive, ElementRef, HostBinding, HostListener, Injector, Input, Renderer2 } from '@angular/core';
import { GhxLightboxComponent } from '../components';
import { GhxLightboxService } from '../services';
var GhxLightboxDirective = /** @class */ (function () {
    function GhxLightboxDirective(elemRef, glService, render2, cfr, appRef, injector) {
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
    GhxLightboxDirective.prototype.onClick = /**
     * @param {?} allItems
     * @param {?=} index
     * @return {?}
     */
    function (allItems, index) {
        if (index === void 0) { index = 0; }
        // console.error(index);
        if (this.elemRef.nativeElement.closest('.ghx-lightbox-group') === null) {
            this.glService.openedIndex = 0;
            /** @type {?} */
            var source = [
                {
                    src: this.src,
                    caption: this.alt
                }
            ];
            this.initLightBox(source);
        }
        else {
        }
    };
    Object.defineProperty(GhxLightboxDirective.prototype, "bindClass", {
        get: /**
         * @return {?}
         */
        function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GhxLightboxDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.render2.setStyle(this.elemRef.nativeElement, 'cursor', 'pointer');
    };
    /**
     * @param {?} source
     * @return {?}
     */
    GhxLightboxDirective.prototype.initLightBox = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        /** @type {?} */
        var cf = this.cfr.resolveComponentFactory(GhxLightboxComponent);
        /** @type {?} */
        var component = cf.create(this.injector);
        this.appRef.attachView(component.hostView);
        /** @type {?} */
        var domElem = (/** @type {?} */ (((/** @type {?} */ (component.hostView))).rootNodes[0]));
        document.body.appendChild(domElem);
        this.glService.componentRef = component;
        this.glService._setupComponentInstance(source);
        /** @type {?} */
        var bodyElemet = (/** @type {?} */ (document.querySelector('body')));
        bodyElemet.classList.add('ghx-lightbox-opened');
    };
    GhxLightboxDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[ghxLightbox]',
                },] }
    ];
    /** @nocollapse */
    GhxLightboxDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: GhxLightboxService },
        { type: Renderer2 },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector }
    ]; };
    GhxLightboxDirective.propDecorators = {
        src: [{ type: Input }],
        alt: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }],
        bindClass: [{ type: HostBinding, args: ['class.ghx-lightbox-item',] }]
    };
    return GhxLightboxDirective;
}());
export { GhxLightboxDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2h4LWxpZ2h0Ym94LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2doeC1saWdodGJveC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2doeC1saWdodGJveC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsY0FBYyxFQUNkLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUVWLFdBQVcsRUFDWCxZQUFZLEVBQ1osUUFBUSxFQUNSLEtBQUssRUFFTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVqRDtJQVNFLDhCQUNVLE9BQWdDLEVBQ2hDLFNBQTZCLEVBQzdCLE9BQWtCLEVBQ2xCLEdBQTZCLEVBQzdCLE1BQXNCLEVBQ3RCLFFBQWtCO1FBTGxCLFlBQU8sR0FBUCxPQUFPLENBQXlCO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDbEIsUUFBRyxHQUFILEdBQUcsQ0FBMEI7UUFDN0IsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQVRuQixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQVVoQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7O0lBSUQsc0NBQU87Ozs7O0lBRFAsVUFDUSxRQUFvQixFQUFFLEtBQVM7UUFBVCxzQkFBQSxFQUFBLFNBQVM7UUFDckMsd0JBQXdCO1FBQ3hCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQzs7Z0JBQ3pCLE1BQU0sR0FBRztnQkFDYjtvQkFDRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7b0JBQ2IsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHO2lCQUNsQjthQUNGO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQjthQUFNO1NBQ047SUFDSCxDQUFDO0lBRUQsc0JBQ0ksMkNBQVM7Ozs7UUFEYjtZQUVFLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQzs7O09BQUE7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7SUFHRCwyQ0FBWTs7OztJQUFaLFVBQWEsTUFBa0I7O1lBR3ZCLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixDQUFDOztZQUMzRCxTQUFTLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFFckMsT0FBTyxHQUFHLG1CQUFBLENBQUMsbUJBQUEsU0FBUyxDQUFDLFFBQVEsRUFBd0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBZTtRQUN4RixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7UUFFeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFFekMsVUFBVSxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQW1CO1FBQ3BFLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBOURGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLGVBQWU7aUJBQzFCOzs7O2dCQWhCQyxVQUFVO2dCQVdILGtCQUFrQjtnQkFKekIsU0FBUztnQkFUVCx3QkFBd0I7Z0JBRHhCLGNBQWM7Z0JBT2QsUUFBUTs7O3NCQWVQLEtBQUs7c0JBQ0wsS0FBSzswQkFjTCxZQUFZLFNBQUMsT0FBTzs0QkFnQnBCLFdBQVcsU0FBQyx5QkFBeUI7O0lBMkJ4QywyQkFBQztDQUFBLEFBaEVELElBZ0VDO1NBNURZLG9CQUFvQjs7O0lBRS9CLG1DQUFrQjs7SUFDbEIsbUNBQWtCOzs7OztJQUdoQix1Q0FBd0M7Ozs7O0lBQ3hDLHlDQUFxQzs7Ozs7SUFDckMsdUNBQTBCOzs7OztJQUMxQixtQ0FBcUM7Ozs7O0lBQ3JDLHNDQUE4Qjs7Ozs7SUFDOUIsd0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXBwbGljYXRpb25SZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHaHhMaWdodGJveENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgSXRlbVR5cGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEdoeExpZ2h0Ym94U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2doeExpZ2h0Ym94XScsXG59KVxuZXhwb3J0IGNsYXNzIEdoeExpZ2h0Ym94RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBzcmMgPSAnJztcbiAgQElucHV0KCkgYWx0ID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGdsU2VydmljZTogR2h4TGlnaHRib3hTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyMjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge1xuICAgIHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2doeC1saWdodGJveC1pdGVtJyk7XG4gIH1cblxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljayhhbGxJdGVtczogSXRlbVR5cGVbXSwgaW5kZXggPSAwKSB7XG4gICAgLy8gY29uc29sZS5lcnJvcihpbmRleCk7XG4gICAgaWYgKHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJy5naHgtbGlnaHRib3gtZ3JvdXAnKSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5nbFNlcnZpY2Uub3BlbmVkSW5kZXggPSAwO1xuICAgICAgY29uc3Qgc291cmNlID0gW1xuICAgICAgICB7XG4gICAgICAgICAgc3JjOiB0aGlzLnNyYyxcbiAgICAgICAgICBjYXB0aW9uOiB0aGlzLmFsdFxuICAgICAgICB9XG4gICAgICBdO1xuICAgICAgdGhpcy5pbml0TGlnaHRCb3goc291cmNlKTtcbiAgICB9IGVsc2Uge1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZ2h4LWxpZ2h0Ym94LWl0ZW0nKVxuICBnZXQgYmluZENsYXNzKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXIyLnNldFN0eWxlKHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LCAnY3Vyc29yJywgJ3BvaW50ZXInKTtcbiAgfVxuXG5cbiAgaW5pdExpZ2h0Qm94KHNvdXJjZTogSXRlbVR5cGVbXSkge1xuXG5cbiAgICBjb25zdCBjZiA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEdoeExpZ2h0Ym94Q29tcG9uZW50KTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBjZi5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnQuaG9zdFZpZXcpO1xuXG4gICAgY29uc3QgZG9tRWxlbSA9IChjb21wb25lbnQuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUVsZW0pO1xuICAgIHRoaXMuZ2xTZXJ2aWNlLmNvbXBvbmVudFJlZiA9IGNvbXBvbmVudDtcblxuICAgIHRoaXMuZ2xTZXJ2aWNlLl9zZXR1cENvbXBvbmVudEluc3RhbmNlKHNvdXJjZSk7XG5cbiAgICBjb25zdCBib2R5RWxlbWV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIGFzIEhUTUxCb2R5RWxlbWVudDtcbiAgICBib2R5RWxlbWV0LmNsYXNzTGlzdC5hZGQoJ2doeC1saWdodGJveC1vcGVuZWQnKTtcbiAgfVxuXG59XG4iXX0=