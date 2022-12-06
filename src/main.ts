import { readFileSync } from "fs";
import { exit } from "process";
import solutions from "./solutions";
import { Solution } from "./types";

function getInputFile(day: number): string {
  const file: string = day.toString().padStart(2, "0");
  const path: string = `inputs/day${file}.txt`;
  return readFileSync(path, { encoding: "utf8", flag: "r" });
}

// Get day as input from user, default to one
const day: number = parseInt(process.argv[2]) || 1;

if (day > solutions.length) {
  console.log("Solution not found, exiting.");
  exit(1);
}

const input: string = getInputFile(day);
const solution: Solution = new solutions[day - 1](input);
console.log("Part 1:", solution.solvePartOne());
console.log("Part 2:", solution.solvePartTwo());
