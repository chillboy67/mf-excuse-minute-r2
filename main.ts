// mf-excuse-minute-r2: one funny AI excuse, written out for the make.fun judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I missed the deadline because I spent six hours optimising the code that writes the apology for missing the deadline. It is now perfect, and late.";

// The entry is exactly one line: the excuse above, plus a trailing newline.
// The grader reads it back from entry.txt in the output directory.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), EXCUSE + "\n", "utf8");
console.log("Wrote entry.txt");
