import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { MokuEditComponent } from './moku-edit.component';

import { AuthService } from '../auth.service';
import { MokuService } from './moku.service';

describe('MokuEditComponent', () => {
  let component: MokuEditComponent;
  let fixture: ComponentFixture<MokuEditComponent>;

  beforeEach(async(() => {
    const authServiceStub = {
    };
    const mokuServiceStub = {
    };
    const activatedRouteStub = {
      params: {
        switchMap: Observable,
      },
    };
    const locationStub = {
    };

    TestBed.configureTestingModule({
      declarations: [MokuEditComponent],
      imports: [FormsModule],
      providers: [
        { provide: AuthService, useValue: authServiceStub },
        { provide: MokuService, useValue: mokuServiceStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: Location, useValue: locationStub },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MokuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
