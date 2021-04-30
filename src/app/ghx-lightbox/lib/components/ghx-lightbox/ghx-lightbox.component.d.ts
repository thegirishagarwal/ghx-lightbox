import { AfterContentInit, ElementRef, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { GhxLightboxService } from '../../services';
export declare class GhxLightboxComponent implements OnInit, AfterContentInit {
    viewContainerRef: ViewContainerRef;
    private glService;
    private render2;
    src: string;
    caption: string;
    captionPosition: 'top' | 'bottom';
    showPrevNextButton: boolean;
    lightCaption: ElementRef<HTMLElement>;
    lightBoxFigure: ElementRef<HTMLElement>;
    lightboxImage: ElementRef<HTMLElement>;
    constructor(viewContainerRef: ViewContainerRef, glService: GhxLightboxService, render2: Renderer2);
    onWindowResize(): void;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    closeLightBox(): void;
    setImageHeight(): void;
}
