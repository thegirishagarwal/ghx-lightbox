import { TestBed } from '@angular/core/testing';

import { GhxLightboxService } from './ghx-lightbox.service';

describe('GhxLightboxService', () => {
  let service: GhxLightboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhxLightboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
