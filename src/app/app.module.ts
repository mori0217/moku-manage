import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { MokuModule } from './moku/moku.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './user/user.service';
import { AuthService } from './auth.service';

/**
 * firebase用のconfig
 * TODO 2017/05/01 configを別クラスに分離することを検討する
 */
const firebaseConfig = {
  apiKey: 'AIzaSyAjOZmmsrDeq-3KIRnKPCg6PNNBFQ179Q0',
  authDomain: 'moku-manage.firebaseapp.com',
  databaseURL: 'https://moku-manage.firebaseio.com',
  projectId: 'moku-manage',
  storageBucket: 'moku-manage.appspot.com',
  messagingSenderId: '89996400937'
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MokuModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
  ],
  providers: [
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})

/**
 * appのモジュール
 */
export class AppModule {

  constructor(private router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }

}
