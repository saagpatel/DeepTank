# DeepTank Execution Control Plane

- Last updated: 2026-03-01
- Owner: Engineering

## Purpose

Define deterministic defaults for agent execution before feature mutation.

## Canonical Execution Profile

- Approval policy: `on-request`
- Sandbox mode: `workspace-write`
- Web search mode: `cached`
- Multi-agent: disabled by default on critical-path work

Configuration source: `.codex/config.toml`

## Instruction Hierarchy

1. Global user policy (`~/.codex/AGENTS.override.md` / `AGENTS.md`)
2. Repository root `AGENTS.md`
3. Nested overrides when present

Project fallback filenames and max bytes are configured in `.codex/config.toml`.

## Command Governance

- Rules file: `.codex/rules/repo.rules`
- Validation command: `npm run codex:rules:check`
- Policy: allow canonical project scripts, prompt on push, forbid destructive commands.

## Worktree and Local Environment Standard

- Default mutation mode: worktree.
- Setup script: `npm ci && npm run typecheck`.
- One mutation stream per worktree.

## Plan-To-Build Artifacts

Use these templates for each substantial change:

- `PM/templates/spec.md`
- `PM/templates/plan.md`
- `PM/templates/tasks.md`
- `PM/templates/verification.md`

## Required Gate Before Merge

Run `npm run verify` and record results in a verification artifact.
