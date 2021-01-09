import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {
  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  constructor(private http: HttpClient) {}
  getQuestions() {
    return this.http.get('https://localhost:5001/api/questions');
  }

  postQuestion(question) {
    this.http
      .post('https://localhost:5001/api/questions', question)
      .subscribe((res) => {
        //    console.log(res);
      });
  }

  selectQuestion(question: any) {
    this.selectedQuestion.next(question);
  }
}
