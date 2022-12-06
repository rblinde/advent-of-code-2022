import { Solution, NumberDirectory } from "../types";

class Day02 implements Solution {
  readonly input: string;

  constructor(input: string) {
    this.input = input;
  }

  private calculateScore(outcomes: NumberDirectory, options: NumberDirectory): number {
    const lines: string[][] = this.input.split('\n').map(line => line.split(' '));
    let score: number = 0;

    for (const [opponent, response] of lines) {
      score += options[response];
      score += outcomes[opponent + response];
    }

    return score;
  }

  public solvePartOne(): string {
    const outcomes: NumberDirectory = {
      'AX': 3, 'AY': 6, 'AZ': 0,
      'BX': 0, 'BY': 3, 'BZ': 6,
      'CX': 6, 'CY': 0, 'CZ': 3,
    };
    const options: NumberDirectory = {
      'X': 1, 'Y': 2, 'Z': 3,
    };

    const score: number = this.calculateScore(outcomes, options);
    return score.toString();
  }

  public solvePartTwo(): string {
    const outcomes: NumberDirectory = {
      'AX': 3, 'AY': 1, 'AZ': 2,
      'BX': 1, 'BY': 2, 'BZ': 3,
      'CX': 2, 'CY': 3, 'CZ': 1,
    };
    const options: NumberDirectory = {
      'X': 0, 'Y': 3, 'Z': 6,
    };

    const score: number = this.calculateScore(outcomes, options);
    return score.toString();
  }
}

export default Day02;
