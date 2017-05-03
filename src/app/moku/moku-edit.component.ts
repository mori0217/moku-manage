import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

import { Moku } from './moku';
import { AuthService } from '../auth.service';
import { MokuService } from './moku.service';

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
          moku.mokuDate = this.dateToString(new Date());
          return Observable.of(moku);
        }
      });
  }

  ngOnInit() {
  }

  // TODO 2017/05/03 utilに分割する
  /**
   * date型をyyyy-MM-dd形式のstring型に変換する
   */
  dateToString(date: Date): string {
    return [
      date.getFullYear(),
      ('0' + (date.getMonth() + 1)).slice(-2),
      ('0' + date.getDate()).slice(-2)
    ].join('-');
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

  // TODO 2017/05/03　タスク登録時に登録日時・更新日時・登録者名を入れるようにする

  /**
   * タスクを登録/更新する
   * @param moku 登録/更新データ
   */
  createUpdateMoku(moku: Moku) {
    if (moku.$key) {
      this.mokuSerivce.update(moku)
        .then(() => this.goBack());
    } else {
      moku.uid = this.authService.getAuthUser().uid;
      this.mokuSerivce.create(moku)
        .then(() => this.goBack());
    }
  }
}
