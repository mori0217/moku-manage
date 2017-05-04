import { TestBed, inject } from '@angular/core/testing';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    const angularFireDatabaseStub = {
      list: FirebaseListObservable,
    };

    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: AngularFireDatabase, useValue: angularFireDatabaseStub },
      ]
    });
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
