import { AfterContentInit, ApplicationRef, ComponentFactoryResolver, ElementRef, Injector, OnInit, QueryList } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemType } from '../interfaces';
import { GhxLightboxService } from '../services';
import { GhxLightboxDirective } from './ghx-lightbox.directive';
export declare class GhxLightboxGroupDirective implements OnInit, AfterContentInit {
    private elemRef;
    private glService;
    private cfr;
    private injector;
    private appRef;
    gld: GhxLightboxDirective;
    allItems$: BehaviorSubject<ItemType[]>;
    private gldView;
    gldList: QueryList<GhxLightboxDirective>;
    constructor(elemRef: ElementRef<HTMLElement>, glService: GhxLightboxService, cfr: ComponentFactoryResolver, injector: Injector, appRef: ApplicationRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    readonly bindClass: boolean;
    initLightBox(): void;
    changeNavigation(): void;
}
