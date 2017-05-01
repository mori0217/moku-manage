import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(public af: AngularFire, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.af.auth.logout().then(auth => {
      console.log('logout');
      console.log(auth);
      this.router.navigateByUrl('/login');
    }).catch(error => {
      console.error(error);
    });
  }

}
