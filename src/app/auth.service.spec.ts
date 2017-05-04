import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';
import { Subscription } from 'rxjs/';
import { AuthService } from './auth.service';
import { UserService } from './user/user.service';

describe('AuthService', () => {
  beforeEach(() => {
    const angularFireAuthStub = {
      subscribe: Subscription,
    };
    const userServiceStub = {
    };
    const routerStub = {
    };

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: angularFireAuthStub },
        { provide: UserService, useValue: userServiceStub },
        { provide: Router, useValue: routerStub },
      ]
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
