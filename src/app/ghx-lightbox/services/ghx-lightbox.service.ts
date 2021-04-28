import { ApplicationRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { ItemType } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class GhxLightboxService {

  public allItems: ItemType[] = [];
  public openedIndex: number = 0;

  _viewCont: any;
  componentRef!: ComponentRef<any>;

  constructor(
    private cfr: ComponentFactoryResolver,
    private _appRef: ApplicationRef,
    private injector: Injector
  ) { }


  public destroy() {
    this.componentRef.destroy();
    document.querySelector('body').classList.remove('ghx-lightbox-opened');
  }


  _setupComponentInstance(item) {
    this.componentRef.instance.src = item[this.openedIndex].src;
    this.componentRef.instance.caption = item[this.openedIndex].caption;
  }

}
