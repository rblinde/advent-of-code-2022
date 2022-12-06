import { Solution } from "../types";

class Day03 implements Solution {
  readonly input: string;

  constructor(input: string) {
    this.input = input;
  }

  private getIntersection(set: Set<string>, sets: Array<Set<string>>): string {
    for (const item of set) {
      if (sets.every(set => set.has(item))) {
        return item;
      }
    }

    return '';
  }

  private getPriority(item: string): number {
    const value: number = item.charCodeAt(0);
    if (item[0].toUpperCase() === item[0]) {
      return value - 38;
    }

    return value - 96;
  }

  public solvePartOne(): string {
    const lines = this.input.split('\n');
    let sum: number = 0;

    for (const line of lines) {
      const size: number = line.length / 2;
      const sackA: Set<string> = new Set(line.substring(0, size));
      const sackB: Set<string> = new Set(line.substring(size));
      const commonItem: string = this.getIntersection(sackA, [sackB]);
      sum += this.getPriority(commonItem);
    }

    return sum.toString();
  }

  public solvePartTwo(): string {
    const lines = this.input.split('\n');
    let sum: number = 0;

    for (let i: number = 0; i < lines.length; i += 3) {
      const sackA: Set<string> = new Set(lines[i]);
      const sackB: Set<string> = new Set(lines[i + 1]);
      const sackC: Set<string> = new Set(lines[i + 2]);
      const commonItem = this.getIntersection(sackA, [sackB, sackC]);
      sum += this.getPriority(commonItem);
    }

    return sum.toString();
  }
}

export default Day03;
