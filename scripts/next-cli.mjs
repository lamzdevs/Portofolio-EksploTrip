import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

// Ensures canonical drive-letter casing on Windows (e.g., D:\ instead of d:\)
// so Next.js static asset path validation always succeeds.
const canonicalCwd = fs.realpathSync.native
  ? fs.realpathSync.native(process.cwd())
  : fs.realpathSync(process.cwd());

const nextBin = path.join(
  canonicalCwd,
  "node_modules",
  "next",
  "dist",
  "bin",
  "next"
);

const child = spawn(process.execPath, [nextBin, ...process.argv.slice(2)], {
  cwd: canonicalCwd,
  stdio: "inherit",
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
