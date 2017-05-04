import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Moku } from './moku';
import { AuthService } from '../auth.service';
import { MokuService } from './moku.service';
import { DateUtils } from '../util/date.utils';

@Component({
  selector: 'app-moku-list',
  templateUrl: './moku-list.component.html',
  styleUrls: ['./moku-list.component.css']
})
export class MokuListComponent implements OnInit {
  // タスクの日付
  mokuDate: string;
  // 検索用のタスクの日付
  mokuDateSubject: Subject<string>;

  // タスク一覧
  mokus: FirebaseListObservable<Moku[]>;

  constructor(private authService: AuthService, private mokuSerivce: MokuService, private router: Router) {
    this.mokuDate = DateUtils.dateToString(new Date());
    this.mokuDateSubject = new BehaviorSubject(this.mokuDate);
    this.mokus = mokuSerivce.getMokusByMokuDate(this.mokuDateSubject);
  }

  ngOnInit() {
  }

  /**
   * 日付をもとに検索
   */
  filterByMokuDate(mokuDate: string) {
    this.mokuDateSubject.next(mokuDate);
  }

  /**
   * 自分の作成したタスクであればtrue
   */
  isMyMoku(moku: Moku): boolean {
    return moku.uid === this.authService.getAuthUser().uid;
  }

  /**
   * タスク編集ページへ遷移する
   * @param moku タスク
   */
  goEdit(moku: Moku) {
    this.router.navigate(['moku/edit', moku.$key]);
  }

  /**
   * タスクを削除する
   * @param moku タスク
   */
  deleteMoku(moku: Moku) {
    this.mokuSerivce.delete(moku);
  }
}
