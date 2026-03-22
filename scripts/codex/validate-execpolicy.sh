#!/usr/bin/env bash
set -euo pipefail

RULES_FILE=".codex/rules/repo.rules"

if [[ ! -f "$RULES_FILE" ]]; then
  echo "Missing rules file: $RULES_FILE"
  exit 1
fi

if ! command -v codex >/dev/null 2>&1; then
  echo "codex CLI is not installed; skipping execpolicy validation."
  exit 0
fi

check_decision() {
  local expected="$1"
  shift

  local json
  json="$(codex execpolicy check --rules "$RULES_FILE" -- "$@")"

  local decision
  decision="$(node -e 'const fs = require("node:fs"); const input = fs.readFileSync(0, "utf8"); const data = JSON.parse(input); process.stdout.write(String(data.decision || ""));' <<<"$json")"

  if [[ "$decision" != "$expected" ]]; then
    echo "Expected decision '$expected' for: $*"
    echo "Got: $decision"
    echo "$json"
    exit 1
  fi

  echo "[execpolicy] $* -> $decision"
}

check_decision "allow" npm run build
check_decision "allow" node scripts/perf/summarize.mjs
check_decision "allow" cargo test --manifest-path src-tauri/Cargo.toml
check_decision "prompt" git push origin feature/verify-check
check_decision "forbidden" git push origin main
check_decision "forbidden" git reset --hard HEAD
check_decision "forbidden" sudo ls

echo "execpolicy validation passed."
