import {
  AfterContentInit,
  ApplicationRef,
  ComponentFactoryResolver,
  ContentChildren,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostBinding,
  Injector,
  OnInit,
  QueryList,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BehaviorSubject } from 'rxjs';
import { GhxLightboxComponent } from '../ghx-lightbox.component';
import { ItemType } from '../interfaces';
import { GhxLightboxService } from '../services';
import { GhxLightboxDirective } from './ghx-lightbox.directive';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ghxLightboxGroup]'
})
export class GhxLightboxGroupDirective implements OnInit, AfterContentInit {

  allItems$: BehaviorSubject<ItemType[]> = new BehaviorSubject([]);

  @ContentChildren(GhxLightboxDirective)
  public gldList: QueryList<GhxLightboxDirective>;

  constructor(
    private elemRef: ElementRef<HTMLElement>,
    private glService: GhxLightboxService,
    private cfr: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {
    this.elemRef.nativeElement.classList.add('ghx-lightbox-group');
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const itemArray: ItemType[] = [];
    this.gldList.toArray().forEach((lightBox, key: number) => {
      itemArray.push(
        {
          src: lightBox.src,
          caption: lightBox.alt,
        }
      );
    });
    this.allItems$.next(itemArray);
    this.glService.allItemsLength = itemArray.length;

    const ghxItems = this.elemRef.nativeElement.querySelectorAll('.ghx-lightbox-item');
    ghxItems.forEach((lightBox, key) => {
      lightBox.addEventListener('click', (e: any) => {
        e.preventDefault();
        this.glService.openedIndex = key;
        this.initLightBox();
        this.changeNavigation();
        return;
      });
    });
  }


  @HostBinding('class.ghx-lightbox-group')
  get bindClass() {
    return true;
  }

  initLightBox() {
    const component = document.createElement('ghx-lightbox');

    this.glService.componentRef = component;
    this.glService._setupComponentInstance(this.allItems$.value);
    this.glService.componentRef.showPrevNextButton = true;

    document.body.appendChild(component);
    const bodyElemet = document.querySelector('body') as HTMLBodyElement;
    bodyElemet.classList.add('ghx-lightbox-opened');
  }

  changeNavigation() {
    this.glService.changeIndex$.subscribe(index => {
      this.glService._setupComponentInstance(this.allItems$.value);
    });
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
