import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  get isAuthenticated() {
    return !!localStorage.getItem('token');
  }
  register(credentials) {
    return this.http
      .post<any>(`https://localhost:5001/api/account`, credentials)
      .subscribe((res) => {
        this.authenticate(res);
      });
  }

  login(credentials) {
    return this.http
      .post<any>(`https://localhost:5001/api/account/login`, credentials)
      .subscribe((res) => {
        this.authenticate(res);
      });
  }

  logout() {
    localStorage.removeItem('token');
  }
  authenticate(res) {
    localStorage.setItem('token', res);
    this.router.navigate(['/']);
  }
}
