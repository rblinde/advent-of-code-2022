import { Solution } from "../types";

class Day04 implements Solution {
  readonly input: string;

  constructor(input: string) {
    this.input = input;
  }

  public solvePartOne(): string {
    const descructLines = (line: string): number[] => line.match(/(\d+)/g)?.map(Number) as Array<number>;
    const ranges: number[][] = this.input.split('\n').map(descructLines);
    let count: number = 0;

    for (const [startA, endA, startB, endB] of ranges) {
      if ((startA <= startB && endA >= endB) || (startB <= startA && endB >= endA)) {
        count += 1;
      }
    }

    return count.toString();
  }

  public solvePartTwo(): string {
    const descructLines = (line: string): number[] => line.match(/(\d+)/g)?.map(Number) as Array<number>;
    const ranges: number[][] = this.input.split('\n').map(descructLines);
    let count: number = 0;

    for (const [startA, endA, startB, endB] of ranges) {
      if (
        (startA >= startB && startA <= endB) ||
        (endA >= startB && endA <= endB) ||
        (startB >= startA && startB <= endA) ||
        (endB >= startA && endB <= endA)

      ) {
        count += 1;
      }
    }

    return count.toString();
  }
}

export default Day04;
