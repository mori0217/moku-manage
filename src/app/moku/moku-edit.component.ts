import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

import { Moku } from './moku';
import { AuthService } from '../auth.service';
import { MokuService } from './moku.service';
import { DateUtils } from '../util/date.utils';

@Component({
  selector: 'app-moku-edit',
  templateUrl: './moku-edit.component.html',
  styleUrls: ['./moku-edit.component.css']
})

export class MokuEditComponent implements OnInit {
  // titleの最大文字数
  private titleMaxlength = 50;
  // detailの最大文字数
  private detailMaxlength = 200;

  // *ngifとasyncを組み合わせることができる
  moku: Observable<Moku>;

  constructor(private authService: AuthService, private mokuSerivce: MokuService,
    private route: ActivatedRoute, private location: Location) {
    this.moku = this.route.params
      .switchMap((params: Params) => {
        const id = params['id'];
        if (id) {
          return this.mokuSerivce.getMoku(id);
        } else {
          const moku = new Moku();
          // 日付の初期値に今日をセットする
          moku.mokuDate = DateUtils.dateToString(new Date());
          return Observable.of(moku);
        }
      });
  }

  ngOnInit() {
  }

  /**
   * 遷移元のページに戻る
   */
  goBack() {
    this.location.back();
  }

  /**
   * 新規登録の場合は「登録」。更新の場合は「更新」
   */
  getCreateUpdateLabel(moku: Moku): string {
    return moku.$key ? '更新' : '登録';
  }

  /**
   * タスクを登録/更新する
   * @param moku 登録/更新データ
   */
  createUpdateMoku(moku: Moku) {
    const now: number = new Date().getTime();
    moku.updated = now;
    if (moku.$key) {
      // 更新
      this.mokuSerivce.update(moku)
        .then(() => this.goBack());
    } else {
      // 登録
      const authUser = this.authService.getAuthUser();
      moku.uid = authUser.uid;
      moku.userDisplayName = authUser.displayName;
      moku.created = now;
      this.mokuSerivce.create(moku)
        .then(() => this.goBack());
    }
  }
}
