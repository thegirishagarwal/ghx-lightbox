import { Component, OnInit } from '@angular/core';
import { GhxLightboxService } from '../../services';

@Component({
  selector: 'ghx-lightbox-actions',
  templateUrl: './ghx-lightbox-actions.component.html',
  styleUrls: ['./ghx-lightbox-actions.component.scss']
})
export class GhxLightboxActionsComponent implements OnInit {

  constructor(
    private gls: GhxLightboxService
  ) { }

  ngOnInit() {
  }

  onCloseLightBox() {
    this.gls.destroy();
  }

}
