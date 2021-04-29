import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector
} from '@angular/core';
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
    const bodyElemet = <HTMLBodyElement>document.querySelector('body');
    bodyElemet.classList.remove('ghx-lightbox-opened');
  }


  _setupComponentInstance(item: ItemType[]) {
    this.componentRef.instance.src = item[this.openedIndex].src;
    this.componentRef.instance.caption = item[this.openedIndex].caption;
  }

}
