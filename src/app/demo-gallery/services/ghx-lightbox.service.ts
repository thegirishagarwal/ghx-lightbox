import {
  ComponentRef,
  Injectable,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GhxLightboxConfig, ItemType, LightBoxConfigInterface } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GhxLightboxService {

  public allItems$: BehaviorSubject<ItemType[]> = new BehaviorSubject([]);
  public allItemsLength = 0;
  public openedIndex = 0;

  public changeIndex$: BehaviorSubject<number> = new BehaviorSubject(0);

  public defaultConfig: LightBoxConfigInterface;

  viewCont: any;
  componentRef!: any;

  constructor() { }


  public destroy() {
    this.componentRef.remove();
    const bodyElemet = document.querySelector('body') as HTMLBodyElement;
    bodyElemet.classList.remove('ghx-lightbox-opened');
  }


  _setupComponentInstance(item: ItemType[]) {
    this.componentRef.src = item[this.openedIndex].src;
    this.componentRef.caption = item[this.openedIndex].caption;
    this.componentRef.configs = this.defaultConfig;
  }

}
