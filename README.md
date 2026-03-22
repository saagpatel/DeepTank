# DeepTank Development Guide

This project has two development modes:

- Normal dev: fastest repeat startup (keeps build artifacts on disk).
- Lean dev: lower disk growth (uses temporary build caches and auto-cleans on exit).

## Quick Start

```bash
npm run bootstrap
npm run verify
```

`npm run verify` executes the deterministic verification contract in `.codex/verify.commands`.

## Local Notes

- Ollama is optional and now starts disabled by default. Enable it from `Settings > AI` only when a local Ollama service is available.
- If your checkout path contains `:`, prefer the repo's npm/Tauri scripts over raw `cargo run` commands. The scripts keep `CARGO_TARGET_DIR` outside the repo, which avoids macOS dynamic-library path issues in colon-named folders.
- Use `PM/docs/checklists/local-smoke-checklist.md` for the current manual desktop smoke pass.

## Canonical Commands

Commands are defined in `package.json` scripts and Tauri build config:

- `npm run bootstrap`: install dependencies with the canonical package manager (`npm`).
- `npm run dev`: start frontend dev server (`vite`).
- `npm run tauri -- dev`: start full desktop app dev mode (frontend + Rust app).
- `npm run build`: build frontend for production.
- `npm run preview`: serve production frontend build.
- `npm run lint`: run formatting/lint checks.
- `npm run typecheck`: run TypeScript checks.
- `npm run test`: run JS/TS unit tests.
- `npm run test:rust`: run Rust unit tests.
- `npm run verify`: run full repo quality gate sequence.
- `npm run reviewer-findings-v1`: run reviewer gate and emit findings report.
- `npm run fixer-apply-findings-v1`: apply auto-fixable findings and re-run reviewer.
- `npm run dev:lean`: start full desktop app in lean mode.
- `npm run clean:heavy`: remove heavy build artifacts only.
- `npm run clean:local`: remove all reproducible local artifacts.

Tauri config source: `src-tauri/tauri.conf.json`

- `beforeDevCommand`: `npm run dev`
- `beforeBuildCommand`: `npm run build`

## Execution Control Plane

- Project Codex defaults: `.codex/config.toml`
- Command governance rules: `.codex/rules/repo.rules`
- Rules validation: `npm run codex:rules:check`
- Worktree/local environment defaults: `PM/docs/runbooks/codex-local-environment.md`
- Control-plane summary: `PM/docs/execution-control-plane.md`

## Plan-To-Build Templates

For substantial changes, create artifacts from:

- `PM/templates/spec.md`
- `PM/templates/plan.md`
- `PM/templates/tasks.md`
- `PM/templates/verification.md`

## Normal Dev

Use normal mode when startup speed matters more than disk use:

```bash
npm run tauri -- dev
```

Disk behavior:

- Keeps Rust build output under `${XDG_CACHE_HOME:-$HOME/.cache}/deeptank/cargo-target` (can be large).
- Keeps Vite cache under `node_modules/.vite`.

## Lean Dev

Use lean mode when you want to keep disk usage low during daily work:

```bash
npm run dev:lean
```

What lean mode does:

- Sets temporary `CARGO_TARGET_DIR` for Rust build output.
- Sets temporary `VITE_CACHE_DIR` for Vite cache output.
- Stores lean caches in `${TMPDIR:-/tmp}/deeptank-lean` (outside the repo).
- Deletes that temporary run directory automatically when the app exits.

Tradeoff:

- Lower persistent disk usage.
- Slower next startup because caches are not reused.

## Cleanup Commands

Targeted cleanup (heavy artifacts only):

```bash
npm run clean:heavy
```

Removes:

- `dist`
- `src-tauri/target`
- `node_modules/.vite`
- `.lean-tmp`
- `${TMPDIR:-/tmp}/deeptank-lean`
- `${XDG_CACHE_HOME:-$HOME/.cache}/deeptank/cargo-target`

Full reproducible local cleanup:

```bash
npm run clean:local
```

Removes:

- everything from `clean:heavy`
- `node_modules`

Use full cleanup when you need to reclaim maximum space and are fine reinstalling dependencies.
