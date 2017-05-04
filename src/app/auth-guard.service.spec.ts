import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

describe('AuthGuard', () => {
  beforeEach(() => {
    const authServiceStub = {
    };
    const routerStub = {
    };

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authServiceStub },
        { provide: Router, useValue: routerStub },
      ]
    });
  });

  it('should ...', inject([AuthGuard], (service: AuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
