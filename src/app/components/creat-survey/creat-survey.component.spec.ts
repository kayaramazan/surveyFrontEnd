import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatSurveyComponent } from './creat-survey.component';

describe('CreatSurveyComponent', () => {
  let component: CreatSurveyComponent;
  let fixture: ComponentFixture<CreatSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
