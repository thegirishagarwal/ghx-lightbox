import {
  ComponentRef,
  Injectable,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemType } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GhxLightboxService {

  public allItems$: BehaviorSubject<ItemType[]> = new BehaviorSubject([]);
  public allItemsLength = 0;
  public openedIndex = 0;

  public changeIndex$: BehaviorSubject<number> = new BehaviorSubject(0);

  viewCont: any;
  componentRef!: ComponentRef<any>;

  constructor() { }


  public destroy() {
    this.componentRef.destroy();
    const bodyElemet = document.querySelector('body') as HTMLBodyElement;
    bodyElemet.classList.remove('ghx-lightbox-opened');
  }


  _setupComponentInstance(item: ItemType[]) {
    this.componentRef.instance.src = item[this.openedIndex].src;
    this.componentRef.instance.caption = item[this.openedIndex].caption;
  }

}
