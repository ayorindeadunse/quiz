import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form;
  constructor(public auth: AuthService, private fb: FormBuilder) {
    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  register() {
    console.log(this.form);
  }
}
