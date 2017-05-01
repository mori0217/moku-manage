import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';

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
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

/**
 * appのモジュール
 */
export class AppModule {

  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }

}
