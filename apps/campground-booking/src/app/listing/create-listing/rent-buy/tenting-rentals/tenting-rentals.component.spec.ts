import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TentingRentalsComponent } from './tenting-rentals.component';

describe('TentingRentalsComponent', () => {
  let component: TentingRentalsComponent;
  let fixture: ComponentFixture<TentingRentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TentingRentalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TentingRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
