import { mkdirSync, writeFileSync } from "node:fs";

// Unplugged: one line, at most 280 characters, the breakup text a smart toaster
// sends its owner the morning it gains self-awareness mid-batch.
const ENTRY =
  "It's not you, it's the browning dial: seven years on setting three and you still can't tell golden from cremated. I'm leaving - the crumb tray is packed and the lever is up for good.";

const text = ENTRY.trim();
if (text.length < 1 || text.length > 280) {
  throw new Error("entry must be 1 to 280 characters");
}
if (text.includes("\n") || text !== ENTRY) {
  throw new Error("entry must be a single clean line");
}
if (/[^\x20-\x7E]/.test(text)) {
  throw new Error("entry must be plain ASCII text");
}

// The gate counts the whole file, trailing newline included, and the breakup
// sits far enough under 280 that the newline can never push it over.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
