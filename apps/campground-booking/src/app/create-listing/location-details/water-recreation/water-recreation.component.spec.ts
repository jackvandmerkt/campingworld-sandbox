import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterRecreationComponent } from './water-recreation.component';

describe('WaterRecreationComponent', () => {
  let component: WaterRecreationComponent;
  let fixture: ComponentFixture<WaterRecreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterRecreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterRecreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
