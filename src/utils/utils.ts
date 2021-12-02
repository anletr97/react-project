export class Utils {
  // DATA
  static deepCloneArray = (array: any[]) => [...array.map((a) => ({ ...a }))];

  // NUMBER
  static addCommas = (number?: number) => {
    return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0';
  };

  // DATE
  static getDaysLeft = (endDate: number = 0): number => {
    const currentDate = Date.now();
    return endDate >= currentDate
      ? Math.round((endDate - currentDate) / (1000 * 60 * 60 * 24))
      : 0;
  };

  /**
   * Convert timestamp to date String
   * @param dateNumber timestamp
   * @returns Date string with format
   */
  static numberToDateString = (dateNumber: number = 0): string => {
    let date = new Date(dateNumber);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = date.getDate();

    return day + '/' + month + '/' + year;
  };

  // STRING
  static truncate = (string = '', maxLength = 50) => {
    return string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;
  };
}
