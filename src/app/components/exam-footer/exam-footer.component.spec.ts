import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamFooterComponent } from './exam-footer.component';

describe('ExamFooterComponent', () => {
  let component: ExamFooterComponent;
  let fixture: ComponentFixture<ExamFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
