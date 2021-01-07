import { ApiService } from './../api.service';
import { Component } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent {
  question = { Text };
  constructor(private api: ApiService) {}

  post(question) {
    // console.log(question);
    this.api.postQuestion(question);
  }
}
