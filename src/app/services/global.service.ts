import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { User } from '../models/user';
import { Exam } from '../models/exam';

@Injectable()
export class GlobalService {

  // Global variables
  public static DBT_SERVER = 'http://localhost:3001';
  public static loggedInStatus: Boolean;
  public static loggedInUser: User;
  public static loggedInUserName: string;
  public static roles = [
    'VISITOR',
    'USER',
    'ADMIN'
  ];

  public static users: User[];

  // Timer global variables
  public static MS_PER_MINUTE = 60000; // Milliseconds Per Minute
  public static MS_PER_SECOND = 1000;  // Milliseconds Per Second

  // Timer instance variables
  public nowMS: number;           // The current time in milliseconds
  public examStopMS: number;      // The exam stop time in milliseconds
  public examMinutes: number;     // The exam duration permitted in minutes
  public examMS: number;          // The exam duration permitted in milliseconds
  public examStopTime: Date;      //
  public examTimeRemainingMS = 0; // Remaining time in MS
  public examTimeRemainingString; // Remaining time as a string

  public theSelectedUser: User;

  constructor() { }

  startTimer(pExamMinutes): Date {
    this.examTimeRemainingString = pExamMinutes + ' min'; // NOTE: This is the same as below.
    // Input: pExamMinutes: the number of minutes each exam taker is permitted to use in taking the exam 
    // Output: Returns "date" showing the datetime when the time permitted to take this exam is "up"
    this.examMinutes = pExamMinutes;
    this.examMS = this.examMinutes * GlobalService.MS_PER_MINUTE;
    this.nowMS = new Date().getTime();
    this.examStopMS = this.nowMS + this.examMS;
    this.examStopTime = new Date(this.examStopMS);
    // Set the recurring process to update the time remaining values
    // so screens can display the time remaining in real time

    setInterval(() => {
      const rightNow = new Date().getTime();
      this.examTimeRemainingString = Math.round((this.examStopMS - rightNow) / GlobalService.MS_PER_MINUTE) + ' min'; // Note: Same as above
    }, GlobalService.MS_PER_MINUTE);

    return (this.examStopTime);
  }

  pauseTimer(): void {
    // Pause the timer: capture remazng minutes, persist them, and then kill the timer process
  }

  stopTimer(): void {
    // Kill the timer process
  }

}
