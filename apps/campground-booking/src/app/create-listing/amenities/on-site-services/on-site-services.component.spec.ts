import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnSiteServicesComponent } from './on-site-services.component';

describe('OnSiteServicesComponent', () => {
  let component: OnSiteServicesComponent;
  let fixture: ComponentFixture<OnSiteServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnSiteServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnSiteServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
