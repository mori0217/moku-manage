import { Injectable } from '@angular/core';
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {
  // 認証情報
  private authState: FirebaseAuthState = null;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.subscribe((authState: FirebaseAuthState) => {
      this.authState = authState;
      console.log('authState change ' + this.isAuth());
      console.log(authState);
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

  // TODO 2017/05/02 userオブジェクトを作成しそれを返すようにする
  /**
   * 名前を表示する
   */
  getDisplayName(): string {
    return this.isAuth() ? this.authState.github.displayName : '';
  }

  /**
   * uidを表示する
   */
  getUid(): string {
    return this.isAuth() ? this.authState.uid : '';
  }

}
