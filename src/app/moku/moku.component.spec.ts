import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MokuComponent } from './moku.component';

describe('MokuComponent', () => {
  let component: MokuComponent;
  let fixture: ComponentFixture<MokuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MokuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
