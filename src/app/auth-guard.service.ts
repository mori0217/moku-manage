import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(): Observable<boolean> {
    /**
     *  TODO AuthServiceを利用してboolean型を返すようできなかった<br/>
     *  canActivateの方がsubscribeよりも先に呼ばれてしまうためである。
     */
    return this.authService.afAuth.map(authState => {
      if (authState == null) {
        console.log('auth guard');
        this.router.navigate(['/login']);
        return false;
      }
      console.log('auth not-guard');
      return true;
    });
  }

}
