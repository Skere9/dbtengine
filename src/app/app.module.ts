import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ExamWelcomeComponent } from './components/exam-welcome/exam-welcome.component';
import { ExamSummaryComponent } from './components/exam-summary/exam-summary.component';
import { ExamQuestionComponent } from './components/exam-question/exam-question.component';
import { ExamHomeComponent } from './components/exam-home/exam-home.component';
import { ExamFooterComponent } from './components/exam-footer/exam-footer.component';
import { GlobalService } from './services/global.service';
import { ExamPauseCheckComponent } from './components/exam-pause-check/exam-pause-check.component';


@NgModule({
  declarations: [
    AppComponent,
    ExamWelcomeComponent,
    ExamSummaryComponent,
    ExamQuestionComponent,
    ExamHomeComponent,
    ExamFooterComponent,
    ExamPauseCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpModule
  ],
  providers: [
    GlobalService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
