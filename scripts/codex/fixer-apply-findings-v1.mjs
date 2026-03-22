import { existsSync, readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

const lintWriteCommand =
  'node ./node_modules/prettier/bin/prettier.cjs --write "package.json" "README.md" ".github/workflows/perf-foundation.yml" ".github/workflows/perf-enforced.yml" ".github/workflows/verify-ci.yml" "scripts/perf/compare-metric.mjs" "scripts/perf/measure-build-time.mjs" "scripts/perf/bootstrap-baseline.mjs" "src/config/defaultSettings.ts" "tests/unit/**/*.ts" "vitest.config.ts" "PM/**/*.md"';

const run = (command) => {
  const result = spawnSync("bash", ["-lc", command], {
    encoding: "utf8",
    stdio: "inherit",
  });
  return result.status ?? 1;
};

if (!existsSync(".codex/reports/reviewer-findings-v1.json")) {
  console.log("No reviewer report found. Running reviewer first.");
  process.exit(run("npm run reviewer-findings-v1"));
}

const report = JSON.parse(
  readFileSync(".codex/reports/reviewer-findings-v1.json", "utf8"),
);
const findings = Array.isArray(report.findings) ? report.findings : [];

if (findings.length === 0) {
  console.log("No findings to fix.");
  process.exit(0);
}

const hasLintFinding = findings.some((f) => f.id === "lint");
if (hasLintFinding) {
  console.log("Applying formatter fixes for lint findings.");
  const lintFixCode = run(lintWriteCommand);
  if (lintFixCode !== 0) {
    console.error("Formatter fix step failed.");
    process.exit(lintFixCode);
  }
}

console.log("Re-running reviewer after fix attempts.");
process.exit(run("npm run reviewer-findings-v1"));
