import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-exam-question',
  templateUrl: './exam-question.component.html',
  styleUrls: ['./exam-question.component.css']
})
export class ExamQuestionComponent implements OnInit {

  public examDuration: 120;
  public timerMinutes: 0;
  public timeRemaining: number;

  constructor(
    public route: Router,
    public globalService: GlobalService
  ) { 
    globalService.startTimer(120);
  }

  ngOnInit() {
  }

  pauseExam(): void {
    console.log('Pause exam');
    this.globalService.pauseTimer();
  }

  saveExam(): void {
    console.log('Save exam');
  }

  previousQuestion(): void {

    console.log('Previous question navigation');
  }

  nextQuestion(): void {
    console.log('Next question navigation');

  }

  goToSummary(): void {
    console.log('Go To Summary navigation');
    this.route.navigateByUrl('/summary');
  }

}
