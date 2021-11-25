export class CommonUtils {
  static isNull = (val: any): boolean => val === null;
  static isString = (val: any): boolean => typeof val === "string";
  static isNumber = (val: any): boolean => typeof val === "number";
}
