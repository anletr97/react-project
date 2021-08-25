import { isNull } from "utils";

export const getDaysInMonth = (month: number, year: number) =>
  new Date(year, month, 0).getDate();

export const toDate = (date: number) => {
  return new Date(date);
};

export const fortmatDate = (date: Date) => {
  if (!isNull(date)) {
    return "haha";
  }
};
