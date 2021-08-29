/**
 *  Common functions for hanlding Date type
 *
 * @export
 * @class DateUtils
 */
export class DateUtils {
  /**
   * Get full Date
   * @param month
   * @param year
   * @returns Date
   */
  static getDaysInMonth = (month: number, year: number) =>
    new Date(year, month, 0).getDate();

  /**
   * Convert timestamp to Date (yyyy/MM/dd)
   * @param timestamp
   * @returns String
   */
  static timestampToDateStr = (timestamp: number): string => {
    let date = new Date(timestamp);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = date.getDate();

    return year + "/" + month + "/" + day;
  };

  /**
   * Convert Date string into timestamp
   * @param date String
   * @returns
   */
  static strToTimeStamp = (date: string): number => {
    // return date in milisecond
    return Date.parse(date);
  };

  /**
   * Get Today String
   * @returns Date string format "yyyy-MM-dd"
   */
  static getCurrentDateStr = (): string => {
    let date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = date.getDate();
    return year + "/" + month + "/" + day;
  };

  /**
   *
   * @param date
   * @returns
   */
  static dateToStr = (date: Date | null): string => {
    const year = date?.getFullYear();
    const _month = date?.getMonth() ? date.getMonth() + 1 : 1;
    const month: string | null = ("0" + _month).slice(-2);
    const day = date?.getDate();
    return year + "/" + month + "/" + day;
  };
}
