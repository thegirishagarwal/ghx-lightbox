import { AfterContentChecked, ApplicationRef, ComponentFactoryResolver, Directive, ElementRef, EmbeddedViewRef, HostBinding, Injector, OnInit, Renderer2 } from '@angular/core';
import { GhxLightboxComponent } from '../components';
import { GhxLightboxService } from '../services';

@Directive({
  selector: '[ghxLightboxGroup]'
})
export class GhxLightboxGroupDirective implements AfterContentChecked, OnInit {

  // elementRef: ElementRef;

  constructor(
    private _elemRef: ElementRef<HTMLElement>,
    private glService: GhxLightboxService,
    private render2: Renderer2,
    private cfr: ComponentFactoryResolver,
    private injector: Injector,
    private _appRef: ApplicationRef
  ) {

  }

  ngOnInit() {
    this.glService.allItems = [];
    const ghxItems = this._elemRef.nativeElement.querySelectorAll('[ghxLightbox]');
    ghxItems.forEach((lightBox, key) => {
      this.glService.allItems.push(
        {
          src: lightBox.getAttribute('src'),
          caption: lightBox.getAttribute('alt')
        }
      )
      lightBox.addEventListener('click', (e: any) => {
        e.preventDefault();
        this.glService.openedIndex = key;
        this.initLightBox(this.glService.allItems)
        return;
      })
    })
  }

  @HostBinding('class.ghx-lightbox-group')
  get bindClass() {
    return true;
  }

  ngAfterContentChecked() {

  }

  initLightBox(source: any, index = 0, isLightBox = true) {
    const cf = this.cfr.resolveComponentFactory(GhxLightboxComponent);
    const component = cf.create(this.injector);
    this._appRef.attachView(component.hostView);

    const domElem = (component.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.glService.componentRef = component;

    this.glService._setupComponentInstance(source);
    this.glService.componentRef.instance.showPrevNextButton = true;

    document.querySelector('body').classList.add('ghx-lightbox-opened');
  }

}
