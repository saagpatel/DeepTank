# DeepTank Operator Runbook

- Last updated: 2026-03-01
- Owner: Engineering
- Service area: Desktop simulation app (Tauri + React)

## System Overview (2-4 lines)

DeepTank is a local-first desktop simulation with a React UI and Rust simulation/runtime.
Operational health is primarily verified via deterministic local/CI command gates.
Critical operator actions are startup, health verification, and controlled rollback to last known good release.

## Access And Permissions

- Required systems: GitHub repo access, release pipeline access, signing/notarization tooling (when enabled)
- Required role(s): Maintainer or Release owner with CI/workflow permission

## Standard Operations

| Task         | Command or action                               | Expected result                        | Fallback                                                     |
| ------------ | ----------------------------------------------- | -------------------------------------- | ------------------------------------------------------------ |
| Startup      | `npm run bootstrap` then `npm run tauri -- dev` | App boots and simulation frames render | Run `npm run clean:local` then re-bootstrap                  |
| Health check | `npm run verify`                                | All verify contract commands pass      | Run failing command directly and open triage issue with logs |
| Shutdown     | Stop Tauri dev process                          | All app processes exit cleanly         | If hung, terminate process and run `npm run clean:heavy`     |

## Alert Response

| Alert                          | First response                                         | Escalate after | Escalation owner   |
| ------------------------------ | ------------------------------------------------------ | -------------- | ------------------ |
| Verify failure on PR           | Re-run failed step locally and attach output           | 30 minutes     | Engineering lead   |
| Perf-enforced regression       | Confirm baseline vs new metric and inspect build delta | 60 minutes     | Release owner      |
| Release job credential failure | Validate secret scope and key expiration               | Immediate      | PM + Release owner |

## Incident Triage

1. Confirm impact scope.
2. Stabilize service.
3. Communicate status to support owner.
4. Decide rollback or forward fix.

## Rollback Steps

- Trigger: Release candidate fails smoke tests or production incidents exceed threshold.
- Steps:
  1. Stop rollout to further channels.
  2. Re-deploy previous signed artifact.
  3. Post incident update with root-cause hypothesis and owner.
- Validation: Run install/launch smoke test and `npm run verify` on rollback branch/tag.

## Known Failure Modes

| Symptom                                | Likely cause                           | Immediate action                             | Long-term fix owner |
| -------------------------------------- | -------------------------------------- | -------------------------------------------- | ------------------- |
| `npm ci` fails                         | Lockfile/package mismatch              | Run `npm install` and commit lockfile        | Engineering         |
| `verify` fails on perf compare locally | Machine variance or cold cache         | Use CI enforced perf gate as source of truth | Engineering         |
| CI verify fails at Rust stage          | Missing toolchain or environment issue | Ensure rust toolchain setup step is active   | Engineering         |
