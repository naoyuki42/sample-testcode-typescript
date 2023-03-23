export class Calculation {
  public add10(value: number): number {
    return value + 10;
  }

  public division(value: number): number {
    return 10 / value;
  }

  public multiple(x: number, y: number): { result: number } {
    return { result: x * y };
  }

  public sub10(value: number): number {
    if (value === 0) {
      return 0;
    }
    if (value < 10) {
      return value;
    }
    return value - 10;
  }
}
