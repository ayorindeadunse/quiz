import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent implements OnInit {
  constructor(public api: ApiService) {}

  quizzes: any = [];

  ngOnInit() {
    this.api.getAllQuizzes().subscribe((res) => {
      this.quizzes = res;
      //console.log(this.questions);
    });
  }
}
