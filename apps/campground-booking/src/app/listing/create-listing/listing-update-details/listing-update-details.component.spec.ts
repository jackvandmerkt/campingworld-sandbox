import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingUpdateDetailsComponent } from './listing-update-details.component';

describe('OnSiteServicesComponent', () => {
  let component: ListingUpdateDetailsComponent;
  let fixture: ComponentFixture<ListingUpdateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingUpdateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingUpdateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
