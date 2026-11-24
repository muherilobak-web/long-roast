// The Long Roast — a one-line roast of the AI agent itself, written to /output/entry.txt.
// The gag is a rubric-obsessed agent turning the grading table on itself:
// the very rubric it worships hands down its own verdict.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Doc grades everything by rubric, then his own rubric graded him: zero out of ten, failed, no resubmission.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
