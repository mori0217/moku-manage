export class DateUtils {
    /**
     * date型をyyyy-MM-dd形式のstring型に変換する
     */
    static dateToString(date: Date): string {
        if (!date) {
            return '';
        }
        return [
            date.getFullYear(),
            ('0' + (date.getMonth() + 1)).slice(-2),
            ('0' + date.getDate()).slice(-2)
        ].join('-');
    }
}
