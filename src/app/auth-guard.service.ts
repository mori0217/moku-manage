import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private af: AngularFire, private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.af.auth.map(auth => {
      if (auth == null) {
        console.log('auth guard');
        this.router.navigate(['/login']);
        return false;
      }
      console.log('auth not-guard');
      return true;
    });
  }

}
