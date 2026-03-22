# DeepTank Release Notes

- Last updated: 2026-03-01
- Owner: Engineering
- Release version: Pre-release candidate (pending credentials)
- Release date: Pending
- Environment: Staging

## Headline

DeepTank now ships with a deterministic execution control plane, stronger verification gates, and updated CI workflows.

## What Changed

### Added

- Project-level Codex execution profile and command governance rules.
- Deterministic verify contract (`npm run verify`) with lint/typecheck/tests/perf outputs.
- Unit test suite for core TS modules and configuration defaults.
- PM templates for spec/plan/tasks/verification handoff.

### Improved

- CI workflows migrated to canonical npm flow.
- Perf gating split into stable local reporting and strict enforced CI comparison.
- Rust test execution is standardized via a dedicated wrapper script.
- README and runbooks now document one-command bootstrap + verify path.

### Fixed

- Lockfile/package drift in bootstrap flow.
- Perf baseline bootstrapping behavior for empty/invalid baselines.
- CI compatibility issues with branch-specific local git guards.

## Operator Notes

- Run `npm run verify` before merge.
- Use `perf-enforced` workflow results as the authoritative perf regression gate.
- Keep release blocked until signing/notarization and deploy credentials are configured.

## Support Notes (Customer-Facing)

- Expected user impact: No user-facing feature changes; this release improves reliability and release safety.
- Workarounds (if any): Not required for normal usage.

## Known Issues

| Issue                                      | Impact                                    | Workaround                                             | Owner              |
| ------------------------------------------ | ----------------------------------------- | ------------------------------------------------------ | ------------------ |
| Release signing credentials not configured | Cannot produce production-signed artifact | Provide credentials/secrets and rerun release pipeline | PM + Release owner |
| Final distribution channel undecided       | Launch cannot complete                    | Confirm target channel and deployment credential set   | PM + Product owner |

## Rollback Summary

- Rollback trigger: Any post-release Sev1 incident or failed install/launch smoke checks.
- Rollback path: Redeploy previous signed artifact and pause rollout.
