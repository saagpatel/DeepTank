# Codex Local Environment Defaults (DeepTank)

## Thread Mode Defaults

- Use `Worktree` mode for implementation and verification tasks.
- Use `Local` mode only for quick read-only exploration or one-off checks.
- Keep one mutation task per worktree branch to avoid cross-task collisions.

## Setup Script (worktree)

Run this setup script for each new worktree:

```bash
npm ci
npm run typecheck
```

## Recommended Actions

- `Verify`: `npm run verify`
- `Rust tests`: `npm run test:rust`
- `Perf summary`: `npm run perf:summary`

## Trust and Policy

- Project config lives in `.codex/config.toml`.
- Command rules live in `.codex/rules/repo.rules`.
- Validate rules with `npm run codex:rules:check`.
