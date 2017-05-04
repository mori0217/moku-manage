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

  // タスク一覧
  mokus: FirebaseListObservable<Moku[]>;

  constructor(private authService: AuthService, private mokuSerivce: MokuService, private router: Router) {
    this.mokuDate = DateUtils.dateToString(new Date());
    // subjectを利用した方法だと別ブラウザで更新を行った際に、別ブラウザで更新した日付にfilterされるため避けた
    this.mokus = mokuSerivce.getMokusByMokuDate(this.mokuDate);
  }

  ngOnInit() {
  }

  /**
   * 日付をもとに検索
   */
  filterByMokuDate(mokuDate: string) {
    this.mokus = this.mokuSerivce.getMokusByMokuDate(mokuDate);
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
