import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-moku',
  templateUrl: './moku.component.html',
  styleUrls: ['./moku.component.css']
})
export class MokuComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  /**
   * ログアウト処理を行う
   */
  logout() {
    this.authService.logout().then(authState => {
      console.log('logout');
      this.router.navigate(['/login']);
    });
  }

}
