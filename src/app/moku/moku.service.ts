import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

import { Moku } from './moku';

@Injectable()
export class MokuService {
  // タスク一覧のObservable
  private mokus: FirebaseListObservable<Moku[]>;

  constructor(private afDatabase: AngularFireDatabase) {
    this.mokus = this.afDatabase.list('/mokus');
  }

  /**
   * タスク一覧を取得
   */
  getMokus(): FirebaseListObservable<Moku[]> {
    return this.mokus;
  }

  /**
 * タスクの日付からタスク一覧を取得
 */
  getMokusByMokuDate(mokuDateSubject: Subject<string>): FirebaseListObservable<Moku[]> {
    return this.afDatabase.list('/mokus', {
      query: {
        orderByChild: 'mokuDate',
        equalTo: mokuDateSubject
      }
    });
  }

  /**
   * キーよりタスクを取得
   */
  getMoku(key: string): FirebaseObjectObservable<Moku> {
    return this.afDatabase.object(`/mokus/${key}`);
  }

  /**
   * タスクを新規登録
   */
  create(moku: Moku): firebase.Promise<Moku> {
    return this.mokus.push(moku);
  }

  /**
   * タスクを更新
   */
  update(moku: Moku): firebase.Promise<void> {
    return this.mokus.update(moku.$key, moku);
  }

  /**
   * タスクを削除
   */
  delete(moku: Moku): firebase.Promise<void> {
    return this.mokus.remove(moku.$key);
  }
}
