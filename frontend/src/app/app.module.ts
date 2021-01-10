import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { QuizComponent } from './quiz/quiz.component';

const routes = [
  { path: 'question', component: QuestionComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: '', component: HomeComponent },
  { path: 'quiz', component: QuizComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    NavComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
