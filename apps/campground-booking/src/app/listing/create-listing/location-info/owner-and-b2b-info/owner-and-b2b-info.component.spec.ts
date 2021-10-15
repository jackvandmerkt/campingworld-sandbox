import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAndB2bInfoComponent } from './owner-and-b2b-info.component';

describe('OwnerAndB2bInfoComponent', () => {
  let component: OwnerAndB2bInfoComponent;
  let fixture: ComponentFixture<OwnerAndB2bInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerAndB2bInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerAndB2bInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
