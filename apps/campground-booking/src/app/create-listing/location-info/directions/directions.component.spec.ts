import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionsComponent } from './directions.component';

describe('ContactInfoComponent', () => {
  let component: DirectionsComponent;
  let fixture: ComponentFixture<DirectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('should change toggle text label', () => {
      
//   })
});