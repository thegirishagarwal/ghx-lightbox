/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/ghx-lightbox-group.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, ContentChildren, Directive, ElementRef, HostBinding, Injector, QueryList, ViewChildren, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GhxLightboxComponent } from '../components';
import { GhxLightboxService } from '../services';
import { GhxLightboxDirective } from './ghx-lightbox.directive';
export class GhxLightboxGroupDirective {
    /**
     * @param {?} elemRef
     * @param {?} glService
     * @param {?} cfr
     * @param {?} injector
     * @param {?} appRef
     */
    constructor(elemRef, glService, cfr, injector, appRef) {
        this.elemRef = elemRef;
        this.glService = glService;
        this.cfr = cfr;
        this.injector = injector;
        this.appRef = appRef;
        this.allItems$ = new BehaviorSubject([]);
        this.elemRef.nativeElement.classList.add('ghx-lightbox-group');
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
        /** @type {?} */
        const itemArray = [];
        this.gldList.toArray().forEach((/**
         * @param {?} lightBox
         * @param {?} key
         * @return {?}
         */
        (lightBox, key) => {
            itemArray.push({
                src: lightBox.src,
                caption: lightBox.alt,
            });
        }));
        this.allItems$.next(itemArray);
        this.glService.allItemsLength = itemArray.length;
        /** @type {?} */
        const ghxItems = this.elemRef.nativeElement.querySelectorAll('.ghx-lightbox-item');
        ghxItems.forEach((/**
         * @param {?} lightBox
         * @param {?} key
         * @return {?}
         */
        (lightBox, key) => {
            lightBox.addEventListener('click', (/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                e.preventDefault();
                this.glService.openedIndex = key;
                this.initLightBox();
                this.changeNavigation();
                return;
            }));
        }));
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
    initLightBox() {
        /** @type {?} */
        const cf = this.cfr.resolveComponentFactory(GhxLightboxComponent);
        /** @type {?} */
        const component = cf.create(this.injector);
        this.appRef.attachView(component.hostView);
        /** @type {?} */
        const domElem = (/** @type {?} */ (((/** @type {?} */ (component.hostView))).rootNodes[0]));
        document.body.appendChild(domElem);
        this.glService.componentRef = component;
        this.glService._setupComponentInstance(this.allItems$.value);
        this.glService.componentRef.instance.showPrevNextButton = true;
        /** @type {?} */
        const bodyElemet = (/** @type {?} */ (document.querySelector('body')));
        bodyElemet.classList.add('ghx-lightbox-opened');
    }
    /**
     * @return {?}
     */
    changeNavigation() {
        this.glService.changeIndex$.subscribe((/**
         * @param {?} index
         * @return {?}
         */
        index => {
            this.glService._setupComponentInstance(this.allItems$.value);
        }));
    }
}
GhxLightboxGroupDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[ghxLightboxGroup]'
            },] }
];
/** @nocollapse */
GhxLightboxGroupDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: GhxLightboxService },
    { type: ComponentFactoryResolver },
    { type: Injector },
    { type: ApplicationRef }
];
GhxLightboxGroupDirective.propDecorators = {
    gldView: [{ type: ViewChildren, args: [GhxLightboxDirective,] }],
    gldList: [{ type: ContentChildren, args: [GhxLightboxDirective,] }],
    bindClass: [{ type: HostBinding, args: ['class.ghx-lightbox-group',] }]
};
if (false) {
    /** @type {?} */
    GhxLightboxGroupDirective.prototype.gld;
    /** @type {?} */
    GhxLightboxGroupDirective.prototype.allItems$;
    /**
     * @type {?}
     * @private
     */
    GhxLightboxGroupDirective.prototype.gldView;
    /** @type {?} */
    GhxLightboxGroupDirective.prototype.gldList;
    /**
     * @type {?}
     * @private
     */
    GhxLightboxGroupDirective.prototype.elemRef;
    /**
     * @type {?}
     * @private
     */
    GhxLightboxGroupDirective.prototype.glService;
    /**
     * @type {?}
     * @private
     */
    GhxLightboxGroupDirective.prototype.cfr;
    /**
     * @type {?}
     * @private
     */
    GhxLightboxGroupDirective.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    GhxLightboxGroupDirective.prototype.appRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2h4LWxpZ2h0Ym94LWdyb3VwLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2doeC1saWdodGJveC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2doeC1saWdodGJveC1ncm91cC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsY0FBYyxFQUNkLHdCQUF3QixFQUN4QixlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFFVixXQUFXLEVBQ1gsUUFBUSxFQUVSLFNBQVMsRUFDVCxZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBTWhFLE1BQU0sT0FBTyx5QkFBeUI7Ozs7Ozs7O0lBWXBDLFlBQ1UsT0FBZ0MsRUFDaEMsU0FBNkIsRUFDN0IsR0FBNkIsRUFDN0IsUUFBa0IsRUFDbEIsTUFBc0I7UUFKdEIsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7UUFDaEMsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDN0IsUUFBRyxHQUFILEdBQUcsQ0FBMEI7UUFDN0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQWJoQyxjQUFTLEdBQWdDLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBZS9ELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxrQkFBa0I7O2NBQ1YsU0FBUyxHQUFlLEVBQUU7UUFDaEMsSUFB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RSw0Q0FDaUQ7O0lBRWpELDRDQUNnRDs7Ozs7SUFHOUMsNENBQXdDOzs7OztJQUN4Qyw4Q0FBcUM7Ozs7O0lBQ3JDLHdDQUFxQzs7Ozs7SUFDckMsNkNBQTBCOzs7OztJQUMxQiwyQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0b3IsXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRyZW4sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEdoeExpZ2h0Ym94Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBJdGVtVHlwZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgR2h4TGlnaHRib3hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgR2h4TGlnaHRib3hEaXJlY3RpdmUgfSBmcm9tICcuL2doeC1saWdodGJveC5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbZ2h4TGlnaHRib3hHcm91cF0nXG59KVxuZXhwb3J0IGNsYXNzIEdoeExpZ2h0Ym94R3JvdXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuXG4gIGdsZDogR2h4TGlnaHRib3hEaXJlY3RpdmU7XG5cbiAgYWxsSXRlbXMkOiBCZWhhdmlvclN1YmplY3Q8SXRlbVR5cGVbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcblxuICBAVmlld0NoaWxkcmVuKEdoeExpZ2h0Ym94RGlyZWN0aXZlKVxuICBwcml2YXRlIGdsZFZpZXc6IFF1ZXJ5TGlzdDxHaHhMaWdodGJveERpcmVjdGl2ZT47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihHaHhMaWdodGJveERpcmVjdGl2ZSlcbiAgcHVibGljIGdsZExpc3Q6IFF1ZXJ5TGlzdDxHaHhMaWdodGJveERpcmVjdGl2ZT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGdsU2VydmljZTogR2h4TGlnaHRib3hTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmXG4gICkge1xuICAgIHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2doeC1saWdodGJveC1ncm91cCcpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgY29uc3QgaXRlbUFycmF5OiBJdGVtVHlwZVtdID0gW107XG4gICAgdGhpcy5nbGRMaXN0LnRvQXJyYXkoKS5mb3JFYWNoKChsaWdodEJveCwga2V5OiBudW1iZXIpID0+IHtcbiAgICAgIGl0ZW1BcnJheS5wdXNoKFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiBsaWdodEJveC5zcmMsXG4gICAgICAgICAgY2FwdGlvbjogbGlnaHRCb3guYWx0LFxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICAgIHRoaXMuYWxsSXRlbXMkLm5leHQoaXRlbUFycmF5KTtcbiAgICB0aGlzLmdsU2VydmljZS5hbGxJdGVtc0xlbmd0aCA9IGl0ZW1BcnJheS5sZW5ndGg7XG5cbiAgICBjb25zdCBnaHhJdGVtcyA9IHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5naHgtbGlnaHRib3gtaXRlbScpO1xuICAgIGdoeEl0ZW1zLmZvckVhY2goKGxpZ2h0Qm94LCBrZXkpID0+IHtcbiAgICAgIGxpZ2h0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IGFueSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZ2xTZXJ2aWNlLm9wZW5lZEluZGV4ID0ga2V5O1xuICAgICAgICB0aGlzLmluaXRMaWdodEJveCgpO1xuICAgICAgICB0aGlzLmNoYW5nZU5hdmlnYXRpb24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZ2h4LWxpZ2h0Ym94LWdyb3VwJylcbiAgZ2V0IGJpbmRDbGFzcygpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGluaXRMaWdodEJveCgpIHtcbiAgICBjb25zdCBjZiA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEdoeExpZ2h0Ym94Q29tcG9uZW50KTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBjZi5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnQuaG9zdFZpZXcpO1xuXG4gICAgY29uc3QgZG9tRWxlbSA9IChjb21wb25lbnQuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUVsZW0pO1xuICAgIHRoaXMuZ2xTZXJ2aWNlLmNvbXBvbmVudFJlZiA9IGNvbXBvbmVudDtcblxuICAgIHRoaXMuZ2xTZXJ2aWNlLl9zZXR1cENvbXBvbmVudEluc3RhbmNlKHRoaXMuYWxsSXRlbXMkLnZhbHVlKTtcbiAgICB0aGlzLmdsU2VydmljZS5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc2hvd1ByZXZOZXh0QnV0dG9uID0gdHJ1ZTtcblxuICAgIGNvbnN0IGJvZHlFbGVtZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgYXMgSFRNTEJvZHlFbGVtZW50O1xuICAgIGJvZHlFbGVtZXQuY2xhc3NMaXN0LmFkZCgnZ2h4LWxpZ2h0Ym94LW9wZW5lZCcpO1xuICB9XG5cbiAgY2hhbmdlTmF2aWdhdGlvbigpIHtcbiAgICB0aGlzLmdsU2VydmljZS5jaGFuZ2VJbmRleCQuc3Vic2NyaWJlKGluZGV4ID0+IHtcbiAgICAgIHRoaXMuZ2xTZXJ2aWNlLl9zZXR1cENvbXBvbmVudEluc3RhbmNlKHRoaXMuYWxsSXRlbXMkLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=