import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserSurveyComponent } from './list-user-survey.component';

describe('ListUserSurveyComponent', () => {
  let component: ListUserSurveyComponent;
  let fixture: ComponentFixture<ListUserSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
