import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-moku',
  templateUrl: './moku.component.html',
  styleUrls: ['./moku.component.css']
})

export class MokuComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  /**
   * ログアウト処理を行う
   */
  // TODO 2017/05/02 Headerを専用Componentに分割する
  logout() {
    this.authService.logout().then(authState => {
      console.log('logout');
      this.router.navigate(['/login']);
    });
  }

}
