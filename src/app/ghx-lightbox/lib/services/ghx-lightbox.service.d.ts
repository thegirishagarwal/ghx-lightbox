import { ComponentRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemType } from '../interfaces';
export declare class GhxLightboxService {
    allItems$: BehaviorSubject<ItemType[]>;
    allItemsLength: number;
    openedIndex: number;
    changeIndex$: BehaviorSubject<number>;
    viewCont: any;
    componentRef: ComponentRef<any>;
    constructor();
    destroy(): void;
    _setupComponentInstance(item: ItemType[]): void;
}
