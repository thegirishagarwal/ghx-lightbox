import { ApplicationRef, ComponentFactoryResolver, ElementRef, Injector, OnInit, Renderer2 } from '@angular/core';
import { ItemType } from '../interfaces';
import { GhxLightboxService } from '../services';
export declare class GhxLightboxDirective implements OnInit {
    private elemRef;
    private glService;
    private render2;
    private cfr;
    private appRef;
    private injector;
    src: string;
    alt: string;
    constructor(elemRef: ElementRef<HTMLElement>, glService: GhxLightboxService, render2: Renderer2, cfr: ComponentFactoryResolver, appRef: ApplicationRef, injector: Injector);
    onClick(allItems: ItemType[], index?: number): void;
    readonly bindClass: boolean;
    ngOnInit(): void;
    initLightBox(source: ItemType[]): void;
}
