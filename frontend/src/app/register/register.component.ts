import { ApiService } from './../api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(public api: ApiService) {}

  /* post(quiz) {
    // console.log(question);
    this.api.postQuiz(quiz);
  }*/
}
