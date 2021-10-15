import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingCodesComponent } from './advertising-codes.component';

describe('AdvertisingCodesComponent', () => {
  let component: AdvertisingCodesComponent;
  let fixture: ComponentFixture<AdvertisingCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisingCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
