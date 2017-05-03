import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseListObservable } from 'angularfire2';
import { Moku } from './moku';
import { AuthService } from '../auth.service';
import { MokuService } from './moku.service';

@Component({
  selector: 'app-moku-list',
  templateUrl: './moku-list.component.html',
  styleUrls: ['./moku-list.component.css']
})
export class MokuListComponent implements OnInit {

  // タスク一覧
  mokus: FirebaseListObservable<Moku[]>;

  constructor(private authService: AuthService, private mokuSerivce: MokuService, private router: Router) {
    // FIXME 2017/05/03 日付での絞込
    this.mokus = mokuSerivce.getMokus();
  }

  ngOnInit() {
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
