import { Component, Input, OnInit } from '@angular/core';
import { GhxLightboxConfig } from '../../interfaces';
import { GhxLightboxService } from '../../services';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ghx-lightbox-actions',
  templateUrl: './ghx-lightbox-actions.component.html',
  styleUrls: ['./ghx-lightbox-actions.component.scss']
})
export class GhxLightboxActionsComponent implements OnInit {

  @Input() config: GhxLightboxConfig;

  constructor(
    private gls: GhxLightboxService
  ) { }

  ngOnInit() {
  }

  onCloseLightBox() {
    this.gls.destroy();
  }

}

