/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/ghx-lightbox-nav/ghx-lightbox-nav.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GhxLightboxService } from '../../services';
export class GhxLightboxNavComponent {
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
    goToPrev() {
        if (this.gls.openedIndex === 0) {
            return;
        }
        this.gls.openedIndex = this.gls.openedIndex - 1;
        this.gls.changeIndex$.next(this.gls.openedIndex);
    }
    /**
     * @return {?}
     */
    goToNext() {
        if (this.gls.openedIndex >= this.gls.allItemsLength) {
            return;
        }
        this.gls.openedIndex = this.gls.openedIndex + 1;
        this.gls.changeIndex$.next(this.gls.openedIndex);
    }
}
GhxLightboxNavComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'ghx-lightbox-nav',
                template: "<div class=\"ghx-lightbox-nav-button\">\n  <ng-container *ngIf=\"gls.openedIndex > 0\">\n    <a href=\"javascript:;\" class=\"lightbox-prev\" (click)=\"goToPrev()\">\n      <span class=\"icon-angle-double-left\"></span>\n    </a>\n  </ng-container>\n\n  <ng-container *ngIf=\"gls.openedIndex < (gls.allItemsLength - 1)\">\n    <a href=\"javascript:;\" class=\"lightbox-next\" (click)=\"goToNext()\">\n      <span class=\"icon-angle-double-right\"></span>\n    </a>\n  </ng-container>\n</div>\n",
                styles: [".ghx-lightbox-nav-button a{position:fixed;top:0;bottom:0;margin:auto 0;background-color:#000;color:#fff;padding:5px;width:35px;height:35px;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;font-size:24px;box-sizing:border-box;z-index:10000}.ghx-lightbox-nav-button a.lightbox-prev{left:0}.ghx-lightbox-nav-button a.lightbox-next{right:0}.ghx-lightbox-nav-button a span{display:inline-block;line-height:0}.ghx-lightbox-nav-button a:hover{text-decoration:none}"]
            }] }
];
/** @nocollapse */
GhxLightboxNavComponent.ctorParameters = () => [
    { type: GhxLightboxService }
];
if (false) {
    /** @type {?} */
    GhxLightboxNavComponent.prototype.gls;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2h4LWxpZ2h0Ym94LW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9naHgtbGlnaHRib3gvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9naHgtbGlnaHRib3gtbmF2L2doeC1saWdodGJveC1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVFwRCxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBRWxDLFlBQ1MsR0FBdUI7UUFBdkIsUUFBRyxHQUFILEdBQUcsQ0FBb0I7SUFDNUIsQ0FBQzs7OztJQUVMLFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEtBQUssQ0FBQyxFQUFFO1lBQzlCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ0QsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUU7WUFDbkQsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7OztZQTVCRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHlmQUFnRDs7YUFFakQ7Ozs7WUFQUSxrQkFBa0I7Ozs7SUFXdkIsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdoeExpZ2h0Ym94U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZ2h4LWxpZ2h0Ym94LW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9naHgtbGlnaHRib3gtbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2h4LWxpZ2h0Ym94LW5hdi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdoeExpZ2h0Ym94TmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZ2xzOiBHaHhMaWdodGJveFNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGdvVG9QcmV2KCkge1xuICAgIGlmICh0aGlzLmdscy5vcGVuZWRJbmRleCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmdscy5vcGVuZWRJbmRleCA9IHRoaXMuZ2xzLm9wZW5lZEluZGV4IC0gMTtcbiAgICB0aGlzLmdscy5jaGFuZ2VJbmRleCQubmV4dCh0aGlzLmdscy5vcGVuZWRJbmRleCk7XG4gIH1cbiAgZ29Ub05leHQoKSB7XG4gICAgaWYgKHRoaXMuZ2xzLm9wZW5lZEluZGV4ID49IHRoaXMuZ2xzLmFsbEl0ZW1zTGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZ2xzLm9wZW5lZEluZGV4ID0gdGhpcy5nbHMub3BlbmVkSW5kZXggKyAxO1xuICAgIHRoaXMuZ2xzLmNoYW5nZUluZGV4JC5uZXh0KHRoaXMuZ2xzLm9wZW5lZEluZGV4KTtcbiAgfVxuXG59XG4iXX0=