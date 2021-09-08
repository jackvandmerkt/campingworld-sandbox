import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodSamRecordFormComponent } from './good-sam-record.component';

describe('ContactInfoComponent', () => {
  let component: GoodSamRecordFormComponent;
  let fixture: ComponentFixture<GoodSamRecordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodSamRecordFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSamRecordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('should change toggle text label', () => {
      
//   })
});