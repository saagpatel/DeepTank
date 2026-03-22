#!/usr/bin/env bash
set -euo pipefail

# codex-os-managed
# Local development should enforce full branch/atomic protections.
# CI runs on merge branches and main, so skip branch-specific checks there.

if [[ "${CI:-}" == "true" || "${GITHUB_ACTIONS:-}" == "true" ]]; then
  echo "CI context detected; skipping branch, atomic, and local secret guards."
  npm run git:guard:generated
  npm run git:guard:large-files
  exit 0
fi

npm run git:guard:all
