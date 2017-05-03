import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseListObservable } from 'angularfire2';
import { Moku } from './moku';
import { MokuService } from './moku.service';

@Component({
  selector: 'app-moku-list',
  templateUrl: './moku-list.component.html',
  styleUrls: ['./moku-list.component.css']
})
export class MokuListComponent implements OnInit {

  // タスク一覧
  mokus: FirebaseListObservable<Moku[]>;

  constructor(private mokuSerivce: MokuService, private router: Router) {
    // FIXME 2017/05/03 日付での絞込
    this.mokus = mokuSerivce.getMokus();
  }

  ngOnInit() {
  }

  /**
   * タスク編集ページへ遷移する
   * @param moku タスク
   */
  goEdit(moku: Moku) {
    this.router.navigate(['moku/edit', moku.$key]);
  }

  // FIXME 2017/05/03 タスクを削除する前には確認を入れる
  /**
   * タスクを削除する
   * @param moku タスク
   */
  deleteMoku(moku: Moku) {
    this.mokuSerivce.delete(moku);
  }
}
