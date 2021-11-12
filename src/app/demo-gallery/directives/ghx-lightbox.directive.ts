import {
  ApplicationRef,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostBinding,
  HostListener,
  Inject,
  Injector,
  Input,
  OnInit,
  Optional,
  Renderer2
} from '@angular/core';
import { GhxLightboxComponent } from '../ghx-lightbox.component';
import { GhxLightboxConfig, GHX_LIGHTBOX_CONFIG, ItemType, LightBoxConfigInterface } from '../interfaces';
import { GhxLightboxService } from '../services';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ghxLightbox]',
})
export class GhxLightboxDirective implements OnInit {

  @Input() src = '';
  @Input() alt = '';

  constructor(
    private elemRef: ElementRef<HTMLElement>,
    private glService: GhxLightboxService,
    private render2: Renderer2,
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    @Optional() @Inject(GHX_LIGHTBOX_CONFIG) private defaults: LightBoxConfigInterface
  ) {
    this.elemRef.nativeElement.classList.add('ghx-lightbox-item');
    this.glService.defaultConfig = new GhxLightboxConfig(this.defaults);
  }


  @HostListener('click')
  onClick() {
    if (this.elemRef.nativeElement.closest('.ghx-lightbox-group') === null) {
      this.glService.openedIndex = 0;
      const source = [
        {
          src: this.src,
          caption: this.alt
        }
      ];
      this.initLightBox(source);
    } else {
    }
  }

  @HostBinding('class.ghx-lightbox-item')
  get bindClass() {
    return true;
  }

  ngOnInit() {
    this.render2.setStyle(this.elemRef.nativeElement, 'cursor', 'pointer');
  }


  initLightBox(source: ItemType[]) {


    const cf = this.cfr.resolveComponentFactory(GhxLightboxComponent);
    const component = cf.create(this.injector);
    this.appRef.attachView(component.hostView);

    const domElem = (component.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.glService.componentRef = component;

    this.glService._setupComponentInstance(source);

    const bodyElemet = document.querySelector('body') as HTMLBodyElement;
    bodyElemet.classList.add('ghx-lightbox-opened');
  }

}
