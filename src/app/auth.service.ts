import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';

import { User } from './user/user';
import { UserService } from './user/user.service';

@Injectable()
export class AuthService {
  // 認証情報
  private authState: FirebaseAuthState = null;

  constructor(public afAuth: AngularFireAuth, private userService: UserService, private router: Router) {
    afAuth.subscribe((authState: FirebaseAuthState) => {
      this.authState = authState;
      if (this.isAuth()) {
        const authUser = this.getAuthUser();
        // ユーザ情報を更新
        authUser.lastLoginTime = new Date().getTime();
        this.userService.getUser(authUser.uid).update(authUser);
        console.log(authUser);
      } else {
        // 認証が切れた場合はログインページに遷移
        this.router.navigate(['/login']);
      }
      // console.log('authState change ' + this.isAuth());
    });
  }

  /**
   * 認証済みであればtrue
   */
  isAuth(): boolean {
    return this.authState !== null;
  }

  /**
   * GitHubでログイン
   */
  loginWithGitHub(): firebase.Promise<FirebaseAuthState> {
    return this.afAuth.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Popup
    }).catch(this.handleError);
  }

  /**
   * ログアウト
   */
  logout(): Promise<void> {
    return this.afAuth.logout().catch(this.handleError);
  }

  /**
   * エラーのハンドリング
   * @param error エラー情報
   */
  private handleError(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error);
  }

  /**
   * 認証ユーザ情報を取得
   */
  getAuthUser(): User {
    if (!this.isAuth()) {
      return new User();
    }
    const githubUser: firebase.UserInfo = this.authState.github;
    // TODO 2017/05/04 userクラスへの値のコピーを簡潔に記載できないか調査
    const user = new User();
    user.uid = this.authState.uid;
    user.displayName = githubUser.displayName;
    user.email = githubUser.email;
    user.photoUrl = githubUser.photoURL;
    user.providerId = githubUser.providerId;
    return user;
  }

}
