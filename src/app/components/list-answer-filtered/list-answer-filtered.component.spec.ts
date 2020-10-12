import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnswerFilteredComponent } from './list-answer-filtered.component';

describe('ListAnswerFilteredComponent', () => {
  let component: ListAnswerFilteredComponent;
  let fixture: ComponentFixture<ListAnswerFilteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAnswerFilteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnswerFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
