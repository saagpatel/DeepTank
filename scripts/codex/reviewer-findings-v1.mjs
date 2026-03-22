import { mkdirSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

const checks = [
  { id: "lint", command: "npm run lint", priority: "P1" },
  { id: "typecheck", command: "npm run typecheck", priority: "P1" },
  { id: "test-js", command: "npm run test", priority: "P1" },
  { id: "test-rust", command: "npm run test:rust", priority: "P1" },
];

const findings = [];

const runCommand = (command) => {
  const result = spawnSync("bash", ["-lc", command], {
    encoding: "utf8",
    maxBuffer: 10 * 1024 * 1024,
  });

  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);

  return result.status ?? 1;
};

for (const check of checks) {
  const code = runCommand(check.command);
  if (code !== 0) {
    findings.push({
      id: check.id,
      priority: check.priority,
      command: check.command,
      summary: `Command failed with exit code ${code}`,
    });
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  findings,
};

mkdirSync(".codex/reports", { recursive: true });
writeFileSync(
  ".codex/reports/reviewer-findings-v1.json",
  `${JSON.stringify(report, null, 2)}\n`,
);

if (findings.length > 0) {
  console.error(
    `reviewer-findings-v1 found ${findings.length} P0/P1 candidate issue(s).`,
  );
  process.exit(1);
}

console.log("reviewer-findings-v1 found no P0/P1 issues.");
