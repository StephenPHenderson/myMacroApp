import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDiaryComponent } from './food-diary.component';

describe('FoodDiaryComponent', () => {
  let component: FoodDiaryComponent;
  let fixture: ComponentFixture<FoodDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
