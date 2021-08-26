export class DataUtils {
  static deepCloneArray = (array: any[]) => [...array.map((a) => ({ ...a }))];
}
