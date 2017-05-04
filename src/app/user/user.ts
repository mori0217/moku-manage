export class User {
    /**
    * キー(uidと同じ)
    */
    // $key: string;

    /**
     * キー(uid)
     */
    uid: string;
    /**
     * 表示名
     */
    displayName: string;
    /**
     * メールアドレス
     */
    email: string;
    /**
     * 画像URL
     */
    photoUrl: string;
    /**
     * プロバイダID
     */
    providerId: string;
    /**
     * 最終ログイン時刻(timestamp)
     */
    lastLoginTime: number;
}
