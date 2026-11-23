import { mkdirSync, writeFileSync } from "node:fs";

// The line below must stay byte-for-byte: a single line, no newline, no extra text.
const LINE = "I didn't miss that spot — I was conducting a thorough dust inspection, and the dust failed to cooperate.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
