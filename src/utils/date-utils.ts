import { isNull } from "utils";
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
  static toDate = (timestamp: number): string => {
    let date = new Date(timestamp);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = date.getDate();

    return year + "/" + month + "/" + day;
  };

  /**
   * TODO
   * @param date
   * @returns
   */
  static fortmatDate = (date: Date) => {
    if (!isNull(date)) {
      return "haha";
    }
  };
}
