import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MokuListComponent } from './moku-list.component';

describe('MokuListComponent', () => {
  let component: MokuListComponent;
  let fixture: ComponentFixture<MokuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MokuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MokuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
