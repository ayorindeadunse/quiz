import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  question = {
    id: 0,
    text: '',
    correctAnswer: '',
    answer1: '',
    answer2: '',
    answer3: '',
  };
  questions: any = [];

  ngOnInit() {
    let quizId = parseInt(this.route.snapshot.paramMap.get('quizId'));
    this.api.getQuestions(quizId).subscribe((res) => {
      this.questions = res;
      //console.log(this.questions);
    });
  }
  constructor(public api: ApiService, private route: ActivatedRoute) {}

  post(question) {
    // console.log(question);
    this.api.postQuestion(question);
  }
}
