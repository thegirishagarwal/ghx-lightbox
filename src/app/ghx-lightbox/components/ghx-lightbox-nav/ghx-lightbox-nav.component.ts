import { Component, OnInit } from '@angular/core';
import { GhxLightboxService } from '../../services';

@Component({
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
    this.gls._setupComponentInstance(this.gls.allItems);
  }
  goToNext() {
    if (this.gls.openedIndex >= this.gls.allItems.length) {
      return;
    }
    this.gls.openedIndex = this.gls.openedIndex + 1;
    this.gls._setupComponentInstance(this.gls.allItems);
  }

}
