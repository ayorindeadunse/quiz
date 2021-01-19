import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  //styleUrls: ['./app.component.css'],
})
export class NavComponent {
  // title = 'frontend app with asp.net core and angular.';
  constructor(public auth: AuthService) {}
}
