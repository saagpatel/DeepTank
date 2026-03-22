# DeepTank Product Status

- Last updated: 2026-03-01
- Owner: Engineering
- Release target: Pending credential handoff window
- Health: Yellow

## Snapshot (3 bullets max)

- Scope: Execution control plane, deterministic verification, CI modernization, and core test scaffolding are complete.
- Schedule: On track for release readiness; blocked only on external credential/provisioning inputs.
- Quality: `npm run verify` passes locally; CI perf enforcement is strict in production profile workflows.

## Changes Since Last Update

- Standardized command contract on npm and added full verify flow.
- Added command governance (`rules` + execpolicy validation).
- Added unit tests for default settings, audio volume normalization, and simulation constants.
- Added CI verify workflow and updated perf workflows to npm.
- Added PM templates and runbooks for plan/spec/tasks/verification and operations.

## Decisions Needed

| Decision                             | Owner              | Due date           | Options                                         | Recommendation                              |
| ------------------------------------ | ------------------ | ------------------ | ----------------------------------------------- | ------------------------------------------- |
| Signing/notarization credential path | PM + Release owner | Before release cut | Local keychain, CI secret store, managed signer | CI secret store with least-privilege access |
| Final distribution target            | PM + Product owner | Before release cut | Direct download, store channel, staged rollout  | Staged rollout with rollback gate           |
| Production telemetry destination     | PM + Ops owner     | Before release cut | No telemetry, self-hosted, managed service      | Managed service with minimal PII footprint  |

## Risks

| Risk                                                                        | Severity | Mitigation owner   | Mitigation due     | Status                                          |
| --------------------------------------------------------------------------- | -------- | ------------------ | ------------------ | ----------------------------------------------- |
| Release blocked by missing credentials                                      | High     | PM + Release owner | Before release cut | Open                                            |
| Perf variance on developer machines causes noisy local compare              | Medium   | Engineering        | Completed          | Mitigated (strict compare moved to enforced CI) |
| CI workflow behavior not yet observed on remote runners after modernization | Medium   | Engineering        | 2026-03-03         | Open                                            |

## Next 7 Days

- Finalize release credential decisions and secret provisioning.
- Run first full CI cycle with new workflows on a PR.
- Prepare release candidate notes and operator/support signoff drafts.
- Validate staged rollout + rollback dry run once credentials are available.

## PM Attention Needed (Only If Exception Triggered)

- Credential and distribution decisions are required to exit Yellow state.
