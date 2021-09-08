import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsAffiliationsComponent } from './discounts-affiliations.component';

describe('ContactInfoComponent', () => {
  let component: DiscountsAffiliationsComponent;
  let fixture: ComponentFixture<DiscountsAffiliationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountsAffiliationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountsAffiliationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('should change toggle text label', () => {
      
//   })
});
