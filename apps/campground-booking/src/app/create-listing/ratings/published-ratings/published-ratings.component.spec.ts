import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedRatingsComponent } from './published-ratings.component';

describe('PublishedRatingsComponent', () => {
  let component: PublishedRatingsComponent;
  let fixture: ComponentFixture<PublishedRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedRatingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
