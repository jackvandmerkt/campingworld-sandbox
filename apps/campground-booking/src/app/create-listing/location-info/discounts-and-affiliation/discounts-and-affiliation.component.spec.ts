import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsAndAffiliationComponent } from './discounts-and-affiliation.component';

describe('DiscountsAndAffiliationComponent', () => {
  let component: DiscountsAndAffiliationComponent;
  let fixture: ComponentFixture<DiscountsAndAffiliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountsAndAffiliationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountsAndAffiliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
