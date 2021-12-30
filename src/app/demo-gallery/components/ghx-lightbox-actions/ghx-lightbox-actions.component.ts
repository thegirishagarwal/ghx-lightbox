import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() downloadClick = new EventEmitter();

  constructor(
    private gls: GhxLightboxService
  ) { }

  ngOnInit() {
  }

  onCloseLightBox() {
    this.gls.destroy();
  }

  onDownload() {
    this.downloadClick.emit(true);
  }

}

