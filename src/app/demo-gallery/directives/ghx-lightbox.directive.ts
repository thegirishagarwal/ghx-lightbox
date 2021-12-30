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
import { createCustomElement } from '@angular/elements';
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
    this.customElements();
    this.elemRef.nativeElement.classList.add('ghx-lightbox-item');
    this.glService.defaultConfig = this.defaults;
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
    const component = document.createElement('ghx-lightbox');

    this.glService.componentRef = component;
    this.glService._setupComponentInstance(source);

    document.body.appendChild(component);
    const bodyElemet = document.querySelector('body') as HTMLBodyElement;
    bodyElemet.classList.add('ghx-lightbox-opened');
  }

  customElements() {
    if (customElements.get('ghx-lightbox') === undefined) {
      const appGeneralComp = createCustomElement(GhxLightboxComponent, {
        injector: this.injector,
      });
      customElements.define('ghx-lightbox', appGeneralComp);
    }
  }

}
