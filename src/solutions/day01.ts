import { Solution } from "../types";

class Day01 implements Solution {
  readonly input: string;

  constructor(input: string) {
    this.input = input;
  }

  private createSets(): number[] {
    const nums: number[] = this.input.split('\n').map(Number);
    const sets: number[] = [];
    let current: number = 0;

    for (const num of nums) {
      if (num > 0) {
        current += num;
        continue;
      }

      sets.push(current);
      current = 0;
    }

    // Add last set since it is not seperated
    sets.push(current);
    return sets;
  }

  public solvePartOne(): string {
    const sets: number[] = this.createSets();
    return Math.max(...sets).toString();
  }

  public solvePartTwo(): string {
    const sets: number[] = this.createSets();
    sets.sort((a: number, b: number) => b - a);
    const answer = sets[0] + sets[1] + sets[2];
    return answer.toString();
  }
}

export default Day01;
