import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListingHeaderComponent } from './create-listing-header.component';

describe('CreateListingHeaderComponent', () => {
  let component: CreateListingHeaderComponent;
  let fixture: ComponentFixture<CreateListingHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateListingHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateListingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});