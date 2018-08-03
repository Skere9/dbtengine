import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamHomeComponent } from './components/exam-home/exam-home.component';
import { ExamQuestionComponent } from './components/exam-question/exam-question.component';
import { ExamWelcomeComponent } from './components/exam-welcome/exam-welcome.component';
import { ExamSummaryComponent } from './components/exam-summary/exam-summary.component';
import { ExamPauseCheckComponent } from './components/exam-pause-check/exam-pause-check.component';

const routes: Routes = [
  {
    path: 'home',
    component: ExamHomeComponent
  },
  {
    path: 'welcome',
    component: ExamWelcomeComponent
  },
  {
    path: 'question',
    component: ExamQuestionComponent
  },
  {
    path: 'question/pause',
    component: ExamPauseCheckComponent
  },
  {
    path: 'summary',
    component: ExamSummaryComponent
  },
  {
    path: 'home',
    component: ExamHomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
