import { AfterContentChecked, ApplicationRef, ComponentFactoryResolver, Directive, ElementRef, EmbeddedViewRef, HostBinding, Injector, Input, OnInit, Renderer2 } from '@angular/core';
import { GhxLightboxComponent } from '../components';
import { ItemType } from '../interfaces';
import { GhxLightboxService } from '../services';

@Directive({
  selector: '[ghxLightbox]',
})
export class GhxLightboxDirective implements OnInit {

  @Input() src: string = '';
  @Input() alt: string = '';

  constructor(
    private _elemRef: ElementRef<HTMLImageElement>,
    private glService: GhxLightboxService,
    private render2: Renderer2,
    private cfr: ComponentFactoryResolver,
    private _appRef: ApplicationRef,
    private injector: Injector
  ) {
    this._elemRef.nativeElement.classList.add('ghx-lightbox-item')
  }

  @HostBinding('class.ghx-lightbox-item')
  get bindClass() {
    return true;
  }

  ngOnInit() {
    this.render2.setStyle(this._elemRef.nativeElement, 'cursor', 'pointer');
    this._elemRef.nativeElement.addEventListener('click', () => {
      if (this._elemRef.nativeElement.closest('.ghx-lightbox-group') === null) {
        const source = [
          {
            src: this.src,
            caption: this.alt
          }
        ]
        this.initLightBox(source);
      }
    })
  }


  initLightBox(source: ItemType[], index: number = 0) {


    const cf = this.cfr.resolveComponentFactory(GhxLightboxComponent);
    const component = cf.create(this.injector);
    this._appRef.attachView(component.hostView);

    const domElem = (component.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.glService.componentRef = component;

    this.glService._setupComponentInstance(source);

    const bodyElemet = <HTMLBodyElement>document.querySelector('body');
    bodyElemet.classList.add('ghx-lightbox-opened');
  }

}
