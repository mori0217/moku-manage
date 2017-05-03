import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MokuEditComponent } from './moku-edit.component';

describe('MokuEditComponent', () => {
  let component: MokuEditComponent;
  let fixture: ComponentFixture<MokuEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MokuEditComponent ]
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
