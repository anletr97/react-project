export class Utils {
  // DATA
  static deepCloneArray = (array: any[]) => [...array.map((a) => ({ ...a }))];

  // NUMBER
  static addCommas = (number: number) => {
    return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0';
  };

  // DATE
  static getDaysLeft = (endDate: number = 0): number => {
    const currentDate = Date.now();
    return endDate >= currentDate
      ? Math.round((endDate - currentDate) / (1000 * 60 * 60 * 24))
      : 0;
  };

  // STRING
  static truncate = (string = '', maxLength = 50) => {
    return string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;
  };
}
