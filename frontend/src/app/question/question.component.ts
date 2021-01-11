import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  question = {
    id: 0,
    text: '',
    correctAnswer: '',
    answer1: '',
    answer2: '',
    answer3: '',
  };

  ngOnInit() {
    this.api.questionSelected.subscribe(
      (question) => (this.question = question)
    );
  }

  constructor(public api: ApiService) {}

  post(question) {
    // console.log(question);
    this.api.postQuestion(question);
  }
}
