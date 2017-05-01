import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFire, private router: Router) {
  }

  ngOnInit() {
  }

  /**
   * ログイン処理を行う。
   */
  login() {
    this.af.auth.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Popup,
    }).then(auth => {
      console.log('login');
      console.log(auth);
      this.router.navigate(['/dashboard']);
    }).catch(error => {
      console.error(error);
    });
  }

}
