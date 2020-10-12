import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserResultsComponent } from './list-user-results.component';

describe('ListUserResultsComponent', () => {
  let component: ListUserResultsComponent;
  let fixture: ComponentFixture<ListUserResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
