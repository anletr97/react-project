import { CommonUtils } from "utils";

export class NumberUtils {
  static numberWithCommas = (number: number) => {
    return CommonUtils.isNumber(number)
      ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : "";
  };
}
