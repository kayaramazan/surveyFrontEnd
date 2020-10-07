import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaptionComponent } from './create-caption.component';

describe('CreateCaptionComponent', () => {
  let component: CreateCaptionComponent;
  let fixture: ComponentFixture<CreateCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCaptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
