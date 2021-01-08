import { ApiService } from './../api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent {
  question = {
    Text: '',
    correctAnswer: '',
    answer1: '',
    answer2: '',
    answer3: '',
  };

  constructor(private api: ApiService) {}

  post(question) {
    // console.log(question);
    this.api.postQuestion(question);
  }
}
