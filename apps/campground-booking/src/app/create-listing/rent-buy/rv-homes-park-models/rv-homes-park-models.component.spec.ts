import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvHomesParkModelsComponent } from './rv-homes-park-models.component';

describe('RvHomesParkModelsComponent', () => {
  let component: RvHomesParkModelsComponent;
  let fixture: ComponentFixture<RvHomesParkModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvHomesParkModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvHomesParkModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
