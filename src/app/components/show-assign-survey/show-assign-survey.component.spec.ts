import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAssignSurveyComponent } from './show-assign-survey.component';

describe('ShowAssignSurveyComponent', () => {
  let component: ShowAssignSurveyComponent;
  let fixture: ComponentFixture<ShowAssignSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAssignSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAssignSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
