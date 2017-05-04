import { TestBed, inject } from '@angular/core/testing';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { MokuService } from './moku.service';

describe('MokuService', () => {
  beforeEach(() => {
    const angularFireDatabaseStub = {
      list: FirebaseListObservable,
    };

    TestBed.configureTestingModule({
      providers: [
        MokuService,
        { provide: AngularFireDatabase, useValue: angularFireDatabaseStub }
      ]
    });
  });

  it('should ...', inject([MokuService], (service: MokuService) => {
    expect(service).toBeTruthy();
  }));
});
