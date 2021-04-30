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
var GhxLightboxGroupDirective = /** @class */ (function () {
    function GhxLightboxGroupDirective(elemRef, glService, cfr, injector, appRef) {
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
    GhxLightboxGroupDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    GhxLightboxGroupDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var itemArray = [];
        this.gldList.toArray().forEach((/**
         * @param {?} lightBox
         * @param {?} key
         * @return {?}
         */
        function (lightBox, key) {
            itemArray.push({
                src: lightBox.src,
                caption: lightBox.alt,
            });
        }));
        this.allItems$.next(itemArray);
        this.glService.allItemsLength = itemArray.length;
        /** @type {?} */
        var ghxItems = this.elemRef.nativeElement.querySelectorAll('.ghx-lightbox-item');
        ghxItems.forEach((/**
         * @param {?} lightBox
         * @param {?} key
         * @return {?}
         */
        function (lightBox, key) {
            lightBox.addEventListener('click', (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                e.preventDefault();
                _this.glService.openedIndex = key;
                _this.initLightBox();
                _this.changeNavigation();
                return;
            }));
        }));
    };
    Object.defineProperty(GhxLightboxGroupDirective.prototype, "bindClass", {
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
    GhxLightboxGroupDirective.prototype.initLightBox = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cf = this.cfr.resolveComponentFactory(GhxLightboxComponent);
        /** @type {?} */
        var component = cf.create(this.injector);
        this.appRef.attachView(component.hostView);
        /** @type {?} */
        var domElem = (/** @type {?} */ (((/** @type {?} */ (component.hostView))).rootNodes[0]));
        document.body.appendChild(domElem);
        this.glService.componentRef = component;
        this.glService._setupComponentInstance(this.allItems$.value);
        this.glService.componentRef.instance.showPrevNextButton = true;
        /** @type {?} */
        var bodyElemet = (/** @type {?} */ (document.querySelector('body')));
        bodyElemet.classList.add('ghx-lightbox-opened');
    };
    /**
     * @return {?}
     */
    GhxLightboxGroupDirective.prototype.changeNavigation = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.glService.changeIndex$.subscribe((/**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            _this.glService._setupComponentInstance(_this.allItems$.value);
        }));
    };
    GhxLightboxGroupDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[ghxLightboxGroup]'
                },] }
    ];
    /** @nocollapse */
    GhxLightboxGroupDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: GhxLightboxService },
        { type: ComponentFactoryResolver },
        { type: Injector },
        { type: ApplicationRef }
    ]; };
    GhxLightboxGroupDirective.propDecorators = {
        gldView: [{ type: ViewChildren, args: [GhxLightboxDirective,] }],
        gldList: [{ type: ContentChildren, args: [GhxLightboxDirective,] }],
        bindClass: [{ type: HostBinding, args: ['class.ghx-lightbox-group',] }]
    };
    return GhxLightboxGroupDirective;
}());
export { GhxLightboxGroupDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2h4LWxpZ2h0Ym94LWdyb3VwLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2doeC1saWdodGJveC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2doeC1saWdodGJveC1ncm91cC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsY0FBYyxFQUNkLHdCQUF3QixFQUN4QixlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFFVixXQUFXLEVBQ1gsUUFBUSxFQUVSLFNBQVMsRUFDVCxZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWhFO0lBZ0JFLG1DQUNVLE9BQWdDLEVBQ2hDLFNBQTZCLEVBQzdCLEdBQTZCLEVBQzdCLFFBQWtCLEVBQ2xCLE1BQXNCO1FBSnRCLFlBQU8sR0FBUCxPQUFPLENBQXlCO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQzdCLFFBQUcsR0FBSCxHQUFHLENBQTBCO1FBQzdCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFiaEMsY0FBUyxHQUFnQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQWUvRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDakUsQ0FBQzs7OztJQUVELDRDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxzREFBa0I7OztJQUFsQjtRQUFBLGlCQXVCQzs7WUF0Qk8sU0FBUyxHQUFlLEVBQUU7UUFD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bEZELElBa0ZDO1NBOUVZLHlCQUF5Qjs7O0lBRXBDLHdDQUEwQjs7SUFFMUIsOENBQWlFOzs7OztJQUVqRSw0Q0FDaUQ7O0lBRWpELDRDQUNnRDs7Ozs7SUFHOUMsNENBQXdDOzs7OztJQUN4Qyw4Q0FBcUM7Ozs7O0lBQ3JDLHdDQUFxQzs7Ozs7SUFDckMsNkNBQTBCOzs7OztJQUMxQiwyQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0b3IsXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRyZW4sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEdoeExpZ2h0Ym94Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBJdGVtVHlwZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgR2h4TGlnaHRib3hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgR2h4TGlnaHRib3hEaXJlY3RpdmUgfSBmcm9tICcuL2doeC1saWdodGJveC5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbZ2h4TGlnaHRib3hHcm91cF0nXG59KVxuZXhwb3J0IGNsYXNzIEdoeExpZ2h0Ym94R3JvdXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuXG4gIGdsZDogR2h4TGlnaHRib3hEaXJlY3RpdmU7XG5cbiAgYWxsSXRlbXMkOiBCZWhhdmlvclN1YmplY3Q8SXRlbVR5cGVbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcblxuICBAVmlld0NoaWxkcmVuKEdoeExpZ2h0Ym94RGlyZWN0aXZlKVxuICBwcml2YXRlIGdsZFZpZXc6IFF1ZXJ5TGlzdDxHaHhMaWdodGJveERpcmVjdGl2ZT47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihHaHhMaWdodGJveERpcmVjdGl2ZSlcbiAgcHVibGljIGdsZExpc3Q6IFF1ZXJ5TGlzdDxHaHhMaWdodGJveERpcmVjdGl2ZT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGdsU2VydmljZTogR2h4TGlnaHRib3hTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmXG4gICkge1xuICAgIHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2doeC1saWdodGJveC1ncm91cCcpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgY29uc3QgaXRlbUFycmF5OiBJdGVtVHlwZVtdID0gW107XG4gICAgdGhpcy5nbGRMaXN0LnRvQXJyYXkoKS5mb3JFYWNoKChsaWdodEJveCwga2V5OiBudW1iZXIpID0+IHtcbiAgICAgIGl0ZW1BcnJheS5wdXNoKFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiBsaWdodEJveC5zcmMsXG4gICAgICAgICAgY2FwdGlvbjogbGlnaHRCb3guYWx0LFxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICAgIHRoaXMuYWxsSXRlbXMkLm5leHQoaXRlbUFycmF5KTtcbiAgICB0aGlzLmdsU2VydmljZS5hbGxJdGVtc0xlbmd0aCA9IGl0ZW1BcnJheS5sZW5ndGg7XG5cbiAgICBjb25zdCBnaHhJdGVtcyA9IHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5naHgtbGlnaHRib3gtaXRlbScpO1xuICAgIGdoeEl0ZW1zLmZvckVhY2goKGxpZ2h0Qm94LCBrZXkpID0+IHtcbiAgICAgIGxpZ2h0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IGFueSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZ2xTZXJ2aWNlLm9wZW5lZEluZGV4ID0ga2V5O1xuICAgICAgICB0aGlzLmluaXRMaWdodEJveCgpO1xuICAgICAgICB0aGlzLmNoYW5nZU5hdmlnYXRpb24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZ2h4LWxpZ2h0Ym94LWdyb3VwJylcbiAgZ2V0IGJpbmRDbGFzcygpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGluaXRMaWdodEJveCgpIHtcbiAgICBjb25zdCBjZiA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEdoeExpZ2h0Ym94Q29tcG9uZW50KTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBjZi5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnQuaG9zdFZpZXcpO1xuXG4gICAgY29uc3QgZG9tRWxlbSA9IChjb21wb25lbnQuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUVsZW0pO1xuICAgIHRoaXMuZ2xTZXJ2aWNlLmNvbXBvbmVudFJlZiA9IGNvbXBvbmVudDtcblxuICAgIHRoaXMuZ2xTZXJ2aWNlLl9zZXR1cENvbXBvbmVudEluc3RhbmNlKHRoaXMuYWxsSXRlbXMkLnZhbHVlKTtcbiAgICB0aGlzLmdsU2VydmljZS5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc2hvd1ByZXZOZXh0QnV0dG9uID0gdHJ1ZTtcblxuICAgIGNvbnN0IGJvZHlFbGVtZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgYXMgSFRNTEJvZHlFbGVtZW50O1xuICAgIGJvZHlFbGVtZXQuY2xhc3NMaXN0LmFkZCgnZ2h4LWxpZ2h0Ym94LW9wZW5lZCcpO1xuICB9XG5cbiAgY2hhbmdlTmF2aWdhdGlvbigpIHtcbiAgICB0aGlzLmdsU2VydmljZS5jaGFuZ2VJbmRleCQuc3Vic2NyaWJlKGluZGV4ID0+IHtcbiAgICAgIHRoaXMuZ2xTZXJ2aWNlLl9zZXR1cENvbXBvbmVudEluc3RhbmNlKHRoaXMuYWxsSXRlbXMkLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=