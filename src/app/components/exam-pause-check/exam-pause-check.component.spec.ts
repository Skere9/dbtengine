import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamPauseCheckComponent } from './exam-pause-check.component';

describe('ExamPauseCheckComponent', () => {
  let component: ExamPauseCheckComponent;
  let fixture: ComponentFixture<ExamPauseCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamPauseCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamPauseCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
