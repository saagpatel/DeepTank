import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";

const npmExecPath = process.env.npm_execpath;
if (!npmExecPath) {
  console.error(
    "npm_execpath is not set; run this script through npm scripts.",
  );
  process.exit(1);
}

const warmupRuns = Number.parseInt(process.env.PERF_BUILD_WARMUP ?? "1", 10);
const measuredRuns = Number.parseInt(process.env.PERF_BUILD_RUNS ?? "3", 10);

if (!Number.isInteger(warmupRuns) || warmupRuns < 0) {
  console.error("PERF_BUILD_WARMUP must be an integer >= 0");
  process.exit(2);
}

if (!Number.isInteger(measuredRuns) || measuredRuns < 1) {
  console.error("PERF_BUILD_RUNS must be an integer >= 1");
  process.exit(2);
}

const runBuild = () => {
  const start = Date.now();
  const result = spawnSync(process.execPath, [npmExecPath, "run", "build"], {
    stdio: "inherit",
  });
  const end = Date.now();
  return { status: result.status ?? 1, ms: end - start };
};

for (let i = 0; i < warmupRuns; i += 1) {
  const warmup = runBuild();
  if (warmup.status !== 0) {
    process.exit(warmup.status);
  }
}

const runs = [];
for (let i = 0; i < measuredRuns; i += 1) {
  const measured = runBuild();
  if (measured.status !== 0) {
    process.exit(measured.status);
  }
  runs.push(measured.ms);
}

const sorted = [...runs].sort((a, b) => a - b);
const median = sorted[Math.floor(sorted.length / 2)];

mkdirSync(".perf-results", { recursive: true });
writeFileSync(
  ".perf-results/build-time.json",
  JSON.stringify(
    {
      buildMs: median,
      buildRuns: runs,
      warmupRuns,
      measuredRuns,
      capturedAt: new Date().toISOString(),
      command: "npm_execpath run build",
    },
    null,
    2,
  ),
);
