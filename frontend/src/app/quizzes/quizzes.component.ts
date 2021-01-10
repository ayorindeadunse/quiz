import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css'],
})
export class QuizzesComponent implements OnInit {
  quiz: any = {
    id: 0,
    title: '',
  };
  quizzes: any = [];

  ngOnInit() {
    this.api.getQuizzes().subscribe((res) => {
      this.quizzes = res;
      //console.log(this.questions);
    });
  }
  constructor(public api: ApiService) {}

  post(quiz) {
    // console.log(question);
    this.api.postQuiz(quiz);
  }
}
