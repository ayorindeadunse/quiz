import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  register(credentials) {
    return this.http
      .post<any>(`https://localhost:5001/api/account`, credentials)
      .subscribe((res) => {
        localStorage.setItem('token', res);
      });
  }
}
