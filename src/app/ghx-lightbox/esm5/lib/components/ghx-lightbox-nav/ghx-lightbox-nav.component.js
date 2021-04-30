/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/ghx-lightbox-nav/ghx-lightbox-nav.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GhxLightboxService } from '../../services';
var GhxLightboxNavComponent = /** @class */ (function () {
    function GhxLightboxNavComponent(gls) {
        this.gls = gls;
    }
    /**
     * @return {?}
     */
    GhxLightboxNavComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    GhxLightboxNavComponent.prototype.goToPrev = /**
     * @return {?}
     */
    function () {
        if (this.gls.openedIndex === 0) {
            return;
        }
        this.gls.openedIndex = this.gls.openedIndex - 1;
        this.gls.changeIndex$.next(this.gls.openedIndex);
    };
    /**
     * @return {?}
     */
    GhxLightboxNavComponent.prototype.goToNext = /**
     * @return {?}
     */
    function () {
        if (this.gls.openedIndex >= this.gls.allItemsLength) {
            return;
        }
        this.gls.openedIndex = this.gls.openedIndex + 1;
        this.gls.changeIndex$.next(this.gls.openedIndex);
    };
    GhxLightboxNavComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'ghx-lightbox-nav',
                    template: "<div class=\"ghx-lightbox-nav-button\">\n  <ng-container *ngIf=\"gls.openedIndex > 0\">\n    <a href=\"javascript:;\" class=\"lightbox-prev\" (click)=\"goToPrev()\">\n      <span class=\"icon-angle-double-left\"></span>\n    </a>\n  </ng-container>\n\n  <ng-container *ngIf=\"gls.openedIndex < (gls.allItemsLength - 1)\">\n    <a href=\"javascript:;\" class=\"lightbox-next\" (click)=\"goToNext()\">\n      <span class=\"icon-angle-double-right\"></span>\n    </a>\n  </ng-container>\n</div>\n",
                    styles: [".ghx-lightbox-nav-button a{position:fixed;top:0;bottom:0;margin:auto 0;background-color:#000;color:#fff;padding:5px;width:35px;height:35px;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;font-size:24px;box-sizing:border-box;z-index:10000}.ghx-lightbox-nav-button a.lightbox-prev{left:0}.ghx-lightbox-nav-button a.lightbox-next{right:0}.ghx-lightbox-nav-button a span{display:inline-block;line-height:0}.ghx-lightbox-nav-button a:hover{text-decoration:none}"]
                }] }
    ];
    /** @nocollapse */
    GhxLightboxNavComponent.ctorParameters = function () { return [
        { type: GhxLightboxService }
    ]; };
    return GhxLightboxNavComponent;
}());
export { GhxLightboxNavComponent };
if (false) {
    /** @type {?} */
    GhxLightboxNavComponent.prototype.gls;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2h4LWxpZ2h0Ym94LW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9naHgtbGlnaHRib3gvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9naHgtbGlnaHRib3gtbmF2L2doeC1saWdodGJveC1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRDtJQVFFLGlDQUNTLEdBQXVCO1FBQXZCLFFBQUcsR0FBSCxHQUFHLENBQW9CO0lBQzVCLENBQUM7Ozs7SUFFTCwwQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsS0FBSyxDQUFDLEVBQUU7WUFDOUIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFDRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFO1lBQ25ELE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRCxDQUFDOztnQkE1QkYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qix5ZkFBZ0Q7O2lCQUVqRDs7OztnQkFQUSxrQkFBa0I7O0lBZ0MzQiw4QkFBQztDQUFBLEFBOUJELElBOEJDO1NBeEJZLHVCQUF1Qjs7O0lBR2hDLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHaHhMaWdodGJveFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2doeC1saWdodGJveC1uYXYnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2h4LWxpZ2h0Ym94LW5hdi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2doeC1saWdodGJveC1uYXYuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHaHhMaWdodGJveE5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGdsczogR2h4TGlnaHRib3hTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBnb1RvUHJldigpIHtcbiAgICBpZiAodGhpcy5nbHMub3BlbmVkSW5kZXggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5nbHMub3BlbmVkSW5kZXggPSB0aGlzLmdscy5vcGVuZWRJbmRleCAtIDE7XG4gICAgdGhpcy5nbHMuY2hhbmdlSW5kZXgkLm5leHQodGhpcy5nbHMub3BlbmVkSW5kZXgpO1xuICB9XG4gIGdvVG9OZXh0KCkge1xuICAgIGlmICh0aGlzLmdscy5vcGVuZWRJbmRleCA+PSB0aGlzLmdscy5hbGxJdGVtc0xlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmdscy5vcGVuZWRJbmRleCA9IHRoaXMuZ2xzLm9wZW5lZEluZGV4ICsgMTtcbiAgICB0aGlzLmdscy5jaGFuZ2VJbmRleCQubmV4dCh0aGlzLmdscy5vcGVuZWRJbmRleCk7XG4gIH1cblxufVxuIl19