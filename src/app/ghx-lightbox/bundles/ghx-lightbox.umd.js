(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ghx-lightbox', ['exports', '@angular/core', 'rxjs', '@angular/common'], factory) :
    (global = global || self, factory(global['ghx-lightbox'] = {}, global.ng.core, global.rxjs, global.ng.common));
}(this, (function (exports, core, rxjs, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/ghx-lightbox.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GhxLightboxService = /** @class */ (function () {
        function GhxLightboxService() {
            this.allItems$ = new rxjs.BehaviorSubject([]);
            this.allItemsLength = 0;
            this.openedIndex = 0;
            this.changeIndex$ = new rxjs.BehaviorSubject(0);
        }
        /**
         * @return {?}
         */
        GhxLightboxService.prototype.destroy = /**
         * @return {?}
         */
        function () {
            this.componentRef.destroy();
            /** @type {?} */
            var bodyElemet = (/** @type {?} */ (document.querySelector('body')));
            bodyElemet.classList.remove('ghx-lightbox-opened');
        };
        /**
         * @param {?} item
         * @return {?}
         */
        GhxLightboxService.prototype._setupComponentInstance = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this.componentRef.instance.src = item[this.openedIndex].src;
            this.componentRef.instance.caption = item[this.openedIndex].caption;
        };
        GhxLightboxService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        GhxLightboxService.ctorParameters = function () { return []; };
        /** @nocollapse */ GhxLightboxService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function GhxLightboxService_Factory() { return new GhxLightboxService(); }, token: GhxLightboxService, providedIn: "root" });
        return GhxLightboxService;
    }());
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

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/ghx-lightbox/ghx-lightbox.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
                        // tslint:disable-next-line: component-selector
                        selector: 'ghx-lightbox',
                        template: "<div class=\"ghx-lightbox\">\n  <div class=\"lightbox-overlay\" (click)=\"closeLightBox()\"></div>\n  <div class=\"lightbox-container\">\n    <div class=\"inner-container\">\n      <div class=\"lightbox-caption {{captionPosition}}\" #lightCaption>\n        <h3>{{caption}}</h3>\n      </div>\n      <figure #lightBoxFigure>\n        <img [src]=\"src\" [alt]=\"caption\" #lightboxImage>\n      </figure>\n    </div>\n  </div>\n\n  <ng-container *ngIf=\"showPrevNextButton\">\n    <ghx-lightbox-nav></ghx-lightbox-nav>\n  </ng-container>\n  <div class=\"lightbox-actions\">\n    <ghx-lightbox-actions></ghx-lightbox-actions>\n  </div>\n</div>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".lightbox-overlay{z-index:9999;background-color:rgba(0,0,0,.7);width:100%;height:100%;position:fixed;top:0;left:0;right:0;bottom:0;margin:auto}.ghx-lightbox{position:fixed;top:0;left:0;right:0;bottom:0;margin:auto;width:100%;height:100%;z-index:9999;box-sizing:border-box;display:flex;align-items:center;justify-content:center}.ghx-lightbox .lightbox-container{position:absolute;display:flex;align-items:center;justify-content:center;max-width:100%;z-index:10000;padding:25px;box-sizing:inherit}.ghx-lightbox .lightbox-container .inner-container{max-width:100%;position:relative}.ghx-lightbox .lightbox-container figure{height:100%}.ghx-lightbox .lightbox-container figure img{max-width:100%;max-height:100%}.ghx-lightbox .lightbox-container .lightbox-caption{color:#fff;position:absolute;box-sizing:border-box;left:0;width:100%}.ghx-lightbox .lightbox-container .lightbox-caption.top{padding:15px 15px 30px;top:0;background:linear-gradient(to top,rgba(0,0,0,0),#000)}.ghx-lightbox .lightbox-container .lightbox-caption.bottom{padding:30px 15px 15px;bottom:0;background:linear-gradient(to bottom,rgba(0,0,0,0),#000)}.ghx-lightbox .lightbox-container .lightbox-caption h3{word-break:break-all;line-height:1.2;font-size:18px;letter-spacing:.5px}.ghx-lightbox .lightbox-actions{position:fixed;top:0;right:0;z-index:9999}", "@font-face{font-family:Lightbox;src:url(lightbox.eot);src:url(lightbox.eot?#iefix) format(\"embedded-opentype\"),url(lightbox.woff) format(\"woff\"),url(lightbox.ttf) format(\"truetype\"),url(lightbox.svg#Lightbox) format(\"svg\");font-weight:400;font-style:normal}[data-icon]:before{font-family:Lightbox!important;content:attr(data-icon);font-style:normal!important;font-weight:400!important;font-variant:normal!important;text-transform:none!important;speak:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}[class*=\" icon-\"]:before,[class^=icon-]:before{font-family:Lightbox!important;font-style:normal!important;font-weight:400!important;font-variant:normal!important;text-transform:none!important;speak:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-close:before{content:\"a\"}.icon-zoom-in:before{content:\"b\"}.icon-zoom-out:before{content:\"c\"}.icon-angle-double-left:before{content:\"d\"}.icon-angle-double-right:before{content:\"e\"}body.ghx-lightbox-opened{overflow:hidden}"]
                    }] }
        ];
        /** @nocollapse */
        GhxLightboxComponent.ctorParameters = function () { return [
            { type: core.ViewContainerRef },
            { type: GhxLightboxService },
            { type: core.Renderer2 }
        ]; };
        GhxLightboxComponent.propDecorators = {
            src: [{ type: core.Input }],
            caption: [{ type: core.Input }],
            captionPosition: [{ type: core.Input }],
            showPrevNextButton: [{ type: core.Input }],
            lightCaption: [{ type: core.ViewChild, args: ['lightCaption', { static: true },] }],
            lightBoxFigure: [{ type: core.ViewChild, args: ['lightBoxFigure', { static: true },] }],
            lightboxImage: [{ type: core.ViewChild, args: ['lightboxImage', { static: true },] }],
            onWindowResize: [{ type: core.HostListener, args: ['window:resize',] }]
        };
        return GhxLightboxComponent;
    }());
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

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/ghx-lightbox-actions/ghx-lightbox-actions.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
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
    if (false) {
        /**
         * @type {?}
         * @private
         */
        GhxLightboxActionsComponent.prototype.gls;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/ghx-lightbox-nav/ghx-lightbox-nav.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
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
    if (false) {
        /** @type {?} */
        GhxLightboxNavComponent.prototype.gls;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/ghx-lightbox.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Directive, args: [{
                        // tslint:disable-next-line: directive-selector
                        selector: '[ghxLightbox]',
                    },] }
        ];
        /** @nocollapse */
        GhxLightboxDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: GhxLightboxService },
            { type: core.Renderer2 },
            { type: core.ComponentFactoryResolver },
            { type: core.ApplicationRef },
            { type: core.Injector }
        ]; };
        GhxLightboxDirective.propDecorators = {
            src: [{ type: core.Input }],
            alt: [{ type: core.Input }],
            onClick: [{ type: core.HostListener, args: ['click',] }],
            bindClass: [{ type: core.HostBinding, args: ['class.ghx-lightbox-item',] }]
        };
        return GhxLightboxDirective;
    }());
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

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/ghx-lightbox-group.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GhxLightboxGroupDirective = /** @class */ (function () {
        function GhxLightboxGroupDirective(elemRef, glService, cfr, injector, appRef) {
            this.elemRef = elemRef;
            this.glService = glService;
            this.cfr = cfr;
            this.injector = injector;
            this.appRef = appRef;
            this.allItems$ = new rxjs.BehaviorSubject([]);
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
            { type: core.Directive, args: [{
                        // tslint:disable-next-line: directive-selector
                        selector: '[ghxLightboxGroup]'
                    },] }
        ];
        /** @nocollapse */
        GhxLightboxGroupDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: GhxLightboxService },
            { type: core.ComponentFactoryResolver },
            { type: core.Injector },
            { type: core.ApplicationRef }
        ]; };
        GhxLightboxGroupDirective.propDecorators = {
            gldView: [{ type: core.ViewChildren, args: [GhxLightboxDirective,] }],
            gldList: [{ type: core.ContentChildren, args: [GhxLightboxDirective,] }],
            bindClass: [{ type: core.HostBinding, args: ['class.ghx-lightbox-group',] }]
        };
        return GhxLightboxGroupDirective;
    }());
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

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ghx-lightbox.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GhxLightboxModule = /** @class */ (function () {
        function GhxLightboxModule() {
        }
        GhxLightboxModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            GhxLightboxComponent,
                            GhxLightboxDirective,
                            GhxLightboxGroupDirective,
                            GhxLightboxActionsComponent,
                            GhxLightboxNavComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            GhxLightboxDirective,
                            GhxLightboxGroupDirective
                        ],
                        entryComponents: [GhxLightboxComponent],
                        providers: [
                            GhxLightboxService
                        ]
                    },] }
        ];
        return GhxLightboxModule;
    }());

    exports.GhxLightboxDirective = GhxLightboxDirective;
    exports.GhxLightboxGroupDirective = GhxLightboxGroupDirective;
    exports.GhxLightboxModule = GhxLightboxModule;
    exports.ɵa = GhxLightboxComponent;
    exports.ɵb = GhxLightboxActionsComponent;
    exports.ɵc = GhxLightboxNavComponent;
    exports.ɵd = GhxLightboxService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ghx-lightbox.umd.js.map
