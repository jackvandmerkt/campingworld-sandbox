import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorRoadsSiteInformationComponent } from './interior-roads-site-info.component';

describe('DiscountsAffiliationsComponent', () => {
  let component: InteriorRoadsSiteInformationComponent;
  let fixture: ComponentFixture<InteriorRoadsSiteInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorRoadsSiteInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorRoadsSiteInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
