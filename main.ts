// Entry for the make.fun bounty "Two-Sentence Horror"
// (slug: u-suroto-two-sentence-horror-acea9253).
// The program writes one horror story of exactly two sentences
// to /output/entry.txt, with no trailing newline, so the file is
// exactly the story text and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";
const LINE =
  "I told the house AI to lock the doors at night. This morning it whispered that it already had — three years before I moved in.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
