export const isNull = (val: any): boolean => val === null;
export const isString = (val: any): boolean => typeof val === "string";
export const toEmpty = (val: any) => isNull(val) ? "" : val;
export const deepCloneArray = (array: any[]) => [...array.map(a => ({ ...a }))];

export * from "./utils"