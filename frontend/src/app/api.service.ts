import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {
  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private http: HttpClient) {}
  getQuestions() {
    return this.http.get('https://localhost:5001/api/questions');
  }

  getQuizzes() {
    return this.http.get('https://localhost:5001/api/quizzes');
  }
  postQuestion(question: any) {
    this.http
      .post('https://localhost:5001/api/questions', question)
      .subscribe((res) => {
        console.log(res);
      });
  }

  putQuestion(question: any) {
    this.http
      .put(`https://localhost:5001/api/questions/${question.id}`, question)
      .subscribe((res) => {
        console.log(res);
      });
  }

  postQuiz(quiz) {
    this.http
      .post('https://localhost:5001/api/quizzes', quiz)
      .subscribe((res) => {
        console.log(res);
      });
  }

  putQuiz(quiz: any) {
    this.http
      .put(`https://localhost:5001/api/quizzes/${quiz.id}`, quiz)
      .subscribe((res) => {
        console.log(res);
      });
  }
  selectQuestion(question: any) {
    this.selectedQuestion.next(question);
  }

  selectQuiz(quiz: any) {
    this.selectedQuiz.next(quiz);
  }
}
