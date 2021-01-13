import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    quizId: 0,
  };

  quizId: any;
  ngOnInit() {
    this.quizId = parseInt(this.route.snapshot.paramMap.get('quizId'));
    this.question.quizId = this.quizId;

    this.api.questionSelected.subscribe(
      (question) => (this.question = question)
    );
  }

  constructor(public api: ApiService, private route: ActivatedRoute) {}

  post(question: any) {
    this.api.postQuestion(question);
  }
}
