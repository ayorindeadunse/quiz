import { FinishedComponent } from './../finished/finished.component';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.css'],
})
export class PlayQuizComponent implements OnInit {
  constructor(
    public api: ApiService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  quizId: any;
  questions;

  ngOnInit() {
    this.quizId = parseInt(this.route.snapshot.paramMap.get('quizId'));

    this.api.getQuestions(this.quizId).subscribe((res) => {
      this.questions = res;

      this.questions.forEach((q) => {
        q.answers = [q.correctAnswer, q.answer1, q.answer2, q.answer3];
        shuffle(q.answers);
      });
    });
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  finish() {
    var correct = 0;
    this.questions.forEach((q) => {
      if (q.correctAnswer == q.selectedAnswer) correct++;
    });

    const dialogRef = this.dialog.open(FinishedComponent, {
      data: { correct, total: this.questions.length },
    });
    console.log(correct);
  }
}

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}
