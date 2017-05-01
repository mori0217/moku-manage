import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  /**
   * ログイン処理を行う
   */
  login() {
    this.authService.loginWithGitHub()
      .then(authState => {
        console.log('login');
        this.router.navigate(['/dashboard']);
      });
  }

}
