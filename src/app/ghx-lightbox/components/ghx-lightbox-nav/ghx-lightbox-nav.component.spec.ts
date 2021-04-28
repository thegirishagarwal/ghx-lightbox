import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhxLightboxNavComponent } from './ghx-lightbox-nav.component';

describe('GhxLightboxNavComponent', () => {
  let component: GhxLightboxNavComponent;
  let fixture: ComponentFixture<GhxLightboxNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhxLightboxNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhxLightboxNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
