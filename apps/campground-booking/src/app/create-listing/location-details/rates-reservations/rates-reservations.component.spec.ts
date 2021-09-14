import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesReservationsComponent } from './rates-reservations.component';

describe('RatesReservationsComponent', () => {
  let component: RatesReservationsComponent;
  let fixture: ComponentFixture<RatesReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatesReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
