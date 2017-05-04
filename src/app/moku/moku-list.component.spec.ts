import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { FirebaseListObservable } from 'angularfire2';

import { MokuListComponent } from './moku-list.component';
import { AuthService } from '../auth.service';
import { MokuService } from './moku.service';

describe('MokuListComponent', () => {
  let component: MokuListComponent;
  let fixture: ComponentFixture<MokuListComponent>;

  beforeEach(async(() => {
    const authServiceStub = {
    };
    const mokuServiceStub = {
      getMokusByMokuDate: FirebaseListObservable
    };
    const routerStub = {
    };

    TestBed.configureTestingModule({
      declarations: [MokuListComponent],
      imports: [FormsModule],
      providers: [
        { provide: AuthService, useValue: authServiceStub },
        { provide: MokuService, useValue: mokuServiceStub },
        { provide: Router, useValue: routerStub },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MokuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
