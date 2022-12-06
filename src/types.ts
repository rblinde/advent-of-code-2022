export interface Solution {
  input: string;
  solvePartOne(): string;
  solvePartTwo(): string;
}

export interface NumberDirectory {
  [index: string]: number;
}
