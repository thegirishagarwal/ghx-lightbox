import { Component, OnInit } from '@angular/core';

import { GhxLightboxService } from './ghx-lightbox/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ghx-lightbox';

  constructor(
    private ghxServ: GhxLightboxService
  ) {}

  ngOnInit() {
    // this.ghxServ.show()
  }
}
