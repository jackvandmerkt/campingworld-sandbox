import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodSamParkComponent } from './good-sam-park.component';

describe('GoodSamParkComponent', () => {
  let component: GoodSamParkComponent;
  let fixture: ComponentFixture<GoodSamParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodSamParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSamParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('should change toggle text label', () => {
      
//   })
});