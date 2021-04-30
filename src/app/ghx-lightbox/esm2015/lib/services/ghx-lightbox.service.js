/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/ghx-lightbox.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class GhxLightboxService {
    constructor() {
        this.allItems$ = new BehaviorSubject([]);
        this.allItemsLength = 0;
        this.openedIndex = 0;
        this.changeIndex$ = new BehaviorSubject(0);
    }
    /**
     * @return {?}
     */
    destroy() {
        this.componentRef.destroy();
        /** @type {?} */
        const bodyElemet = (/** @type {?} */ (document.querySelector('body')));
        bodyElemet.classList.remove('ghx-lightbox-opened');
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _setupComponentInstance(item) {
        this.componentRef.instance.src = item[this.openedIndex].src;
        this.componentRef.instance.caption = item[this.openedIndex].caption;
    }
}
GhxLightboxService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GhxLightboxService.ctorParameters = () => [];
/** @nocollapse */ GhxLightboxService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GhxLightboxService_Factory() { return new GhxLightboxService(); }, token: GhxLightboxService, providedIn: "root" });
if (false) {
    /** @type {?} */
    GhxLightboxService.prototype.allItems$;
    /** @type {?} */
    GhxLightboxService.prototype.allItemsLength;
    /** @type {?} */
    GhxLightboxService.prototype.openedIndex;
    /** @type {?} */
    GhxLightboxService.prototype.changeIndex$;
    /** @type {?} */
    GhxLightboxService.prototype.viewCont;
    /** @type {?} */
    GhxLightboxService.prototype.componentRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2h4LWxpZ2h0Ym94LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9naHgtbGlnaHRib3gvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ2h4LWxpZ2h0Ym94LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBTXZDLE1BQU0sT0FBTyxrQkFBa0I7SUFXN0I7UUFUTyxjQUFTLEdBQWdDLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLGlCQUFZLEdBQTRCLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBS3RELENBQUM7Ozs7SUFHVixPQUFPO1FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Y0FDdEIsVUFBVSxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQW1CO1FBQ3BFLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFHRCx1QkFBdUIsQ0FBQyxJQUFnQjtRQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDNUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3RFLENBQUM7OztZQTNCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7SUFHQyx1Q0FBd0U7O0lBQ3hFLDRDQUEwQjs7SUFDMUIseUNBQXVCOztJQUV2QiwwQ0FBc0U7O0lBRXRFLHNDQUFjOztJQUNkLDBDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0YWJsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEl0ZW1UeXBlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdoeExpZ2h0Ym94U2VydmljZSB7XG5cbiAgcHVibGljIGFsbEl0ZW1zJDogQmVoYXZpb3JTdWJqZWN0PEl0ZW1UeXBlW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIHB1YmxpYyBhbGxJdGVtc0xlbmd0aCA9IDA7XG4gIHB1YmxpYyBvcGVuZWRJbmRleCA9IDA7XG5cbiAgcHVibGljIGNoYW5nZUluZGV4JDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xuXG4gIHZpZXdDb250OiBhbnk7XG4gIGNvbXBvbmVudFJlZiE6IENvbXBvbmVudFJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cblxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgY29uc3QgYm9keUVsZW1ldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSBhcyBIVE1MQm9keUVsZW1lbnQ7XG4gICAgYm9keUVsZW1ldC5jbGFzc0xpc3QucmVtb3ZlKCdnaHgtbGlnaHRib3gtb3BlbmVkJyk7XG4gIH1cblxuXG4gIF9zZXR1cENvbXBvbmVudEluc3RhbmNlKGl0ZW06IEl0ZW1UeXBlW10pIHtcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zcmMgPSBpdGVtW3RoaXMub3BlbmVkSW5kZXhdLnNyYztcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5jYXB0aW9uID0gaXRlbVt0aGlzLm9wZW5lZEluZGV4XS5jYXB0aW9uO1xuICB9XG5cbn1cbiJdfQ==