import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestroomsComponent } from './restrooms.component';

describe('RestroomsComponent', () => {
  let component: RestroomsComponent;
  let fixture: ComponentFixture<RestroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestroomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
