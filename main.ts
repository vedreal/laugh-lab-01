// laugh-lab-01 — entry for make.fun "One-Liner Laugh Lab"
// (u-suroso-69-one-liner-laugh-lab-6ccf3aae)
//
// The program writes one short funny line to /output/entry.txt:
// the excuse a robot vacuum gives after eating a sock.
//
// Chosen line (63 chars, picked from 10 candidates for the freshest
// twist: the vacuum ate one sock as a favour, so the pair matches):
//   "I ate one sock so the pair would finally match. You're welcome."

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ate one sock so the pair would finally match. You're welcome.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function validate(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`line must be 1-${MAX_CHARS} chars, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
}

function main(): void {
  validate(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  console.log(`wrote ${LINE.length} chars to ${OUTPUT_PATH}`);
}

main();
