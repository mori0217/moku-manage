export class Moku {
    /**
     * キー
     */
    $key: string;
    /**
     * ユーザID
     */
    uid: string;
    /**
     * ユーザ名
     */
    userDisplayName: string;
    /**
     * もくもく日
     */
    mokuDate: string;
    /**
     * タイトル
     */
    title: string;
    /**
     * 詳細
     */
    detail: string;
    /**
     * PC持ち込み
     */
    isMypc: boolean;
    /**
     * 登録時間(timestamp)
     */
    created: number;
    /**
     * 更新時間(timestamp)
     */
    updated: number;
}
