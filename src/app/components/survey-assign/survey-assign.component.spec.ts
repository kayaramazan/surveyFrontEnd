import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAssignComponent } from './survey-assign.component';

describe('SurveyAssignComponent', () => {
  let component: SurveyAssignComponent;
  let fixture: ComponentFixture<SurveyAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyAssignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
