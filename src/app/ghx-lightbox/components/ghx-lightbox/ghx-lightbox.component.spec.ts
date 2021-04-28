import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhxLightboxComponent } from './ghx-lightbox.component';

describe('GhxLightboxComponent', () => {
  let component: GhxLightboxComponent;
  let fixture: ComponentFixture<GhxLightboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhxLightboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhxLightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
