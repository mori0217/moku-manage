import { Injectable } from '@angular/core';
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {
  // 認証情報
  private authState: FirebaseAuthState = null;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.subscribe((authState: FirebaseAuthState) => {
      this.authState = authState;
      console.log('authState change ' + this.authenticated);
      console.log(authState);
    });
  }

  /**
   * 認証済みであればtrue
   */
  get authenticated(): boolean {
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
   * 名前を表示する
   */
  displayName(): string {
    return this.authenticated ? this.authState.github.displayName : '';
  }

}
