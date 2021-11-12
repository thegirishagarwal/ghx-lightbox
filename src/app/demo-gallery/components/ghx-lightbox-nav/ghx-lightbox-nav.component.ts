import { Component, OnInit } from '@angular/core';
import { GhxLightboxService } from '../../services';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ghx-lightbox-nav',
  templateUrl: './ghx-lightbox-nav.component.html',
  styleUrls: ['./ghx-lightbox-nav.component.scss']
})
export class GhxLightboxNavComponent implements OnInit {

  constructor(
    public gls: GhxLightboxService
  ) { }

  ngOnInit() {
  }

  goToPrev() {
    if (this.gls.openedIndex === 0) {
      return;
    }
    this.gls.openedIndex = this.gls.openedIndex - 1;
    this.gls.changeIndex$.next(this.gls.openedIndex);
  }
  goToNext() {
    if (this.gls.openedIndex >= this.gls.allItemsLength) {
      return;
    }
    this.gls.openedIndex = this.gls.openedIndex + 1;
    this.gls.changeIndex$.next(this.gls.openedIndex);
  }

}
