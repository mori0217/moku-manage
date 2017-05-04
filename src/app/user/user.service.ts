import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { User } from './user';

@Injectable()
export class UserService {
  // ユーザ一覧のObservable
  private users: FirebaseListObservable<User[]>;

  constructor(private afDatabase: AngularFireDatabase) {
    this.users = this.afDatabase.list('/users');
  }

  /**
   * ユーザ一覧を取得
   */
  getUsers(): FirebaseListObservable<User[]> {
    return this.users;
  }

  /**
   * キーよりユーザを取得
   */
  getUser(key: string): FirebaseObjectObservable<User> {
    return this.afDatabase.object(`/users/${key}`);
  }
}
