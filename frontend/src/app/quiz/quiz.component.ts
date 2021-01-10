import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  quiz = { id: 0, title: '' };
  ngOnInit() {}

  constructor(public api: ApiService) {}

  post(quiz) {
    // console.log(question);
    this.api.postQuiz(quiz);
  }
}
