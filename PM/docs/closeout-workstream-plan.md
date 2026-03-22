# DeepTank Closeout Workstream Plan

## Goal

Ship a lean closeout documentation system that keeps decisions clear while minimizing PM intervention.

## Definition Of Lean But Decision-Ready

- One page per document whenever possible.
- Decision and risk sections always appear near the top.
- No status prose without a decision, owner, or due date.
- PM reviews exception queue, not raw updates.

## Operating Model (Low PM Touch)

- PM owns:
  - final scope decisions
  - go/no-go signoff
  - unresolved cross-team conflicts
- Functional owners own all routine document updates.
- If no blockers exist, workstream proceeds without PM meetings.

## Workstream Tracks

| Track            | Primary owner    | Backup owner        | Output doc                                       | Update cadence                   | PM touchpoint                 |
| ---------------- | ---------------- | ------------------- | ------------------------------------------------ | -------------------------------- | ----------------------------- |
| Product status   | Engineering lead | Producer            | `PM/docs/status/product-status.md`               | 2x per week                      | Only if risk or scope changes |
| Operator runbook | Ops lead         | Senior engineer     | `PM/docs/runbooks/operator-runbook.md`           | Weekly or on change              | Only if resourcing gap        |
| Release notes    | Release owner    | Engineering lead    | `PM/docs/releases/release-notes.md`              | Per release candidate            | Required at go/no-go          |
| Onboarding       | Team lead        | People ops delegate | `PM/docs/onboarding/onboarding-guide.md`         | Per role or major process change | Optional review monthly       |
| Support docs     | Support lead     | QA lead             | `PM/docs/support/support-playbook.md`            | Weekly during launch window      | Only for policy decision      |
| Final closeout   | PM delegate      | Project owner       | `PM/docs/checklists/final-closeout-checklist.md` | Once at closeout                 | Final signoff required        |

## 3-Phase Execution Plan

### Phase 1: Baseline (Day 1-2)

- Confirm doc owners and backups.
- Fill current-state sections in all templates.
- Mark unknowns as explicit follow-ups with due dates.

Exit criteria:

- All six docs have an assigned owner and latest update date.

### Phase 2: Stabilize (Day 3-7)

- Run normal update cadence from the table above.
- Resolve red risks in product status or open explicit decision requests.
- Validate runbook and support steps against one dry-run scenario.

Exit criteria:

- No unknown owner fields.
- No undocumented severity-1 failure mode.
- Release notes and support docs align on known issues.

### Phase 3: Closeout (Final 48 hours)

- Complete final checklist.
- Record decisions, outcomes, and follow-up backlog.
- Archive docs with final status stamp.

Exit criteria:

- Checklist complete.
- PM signoff recorded.

## Exception Queue Rules (How PM Stays Out Of The Weeds)

- An item enters the queue only if one of these is true:
  - cross-team dependency cannot be resolved by owners
  - schedule slip exceeds 2 business days
  - risk is red and has no mitigation owner
  - customer-facing impact has no approved message
- Queue review target: 15 minutes, 2 times per week.

## Minimal Governance

- Every doc must include:
  - `Last updated`
  - `Owner`
  - `Decision needed` (if any)
- No other metadata is required.

## Success Metrics

- PM intervention is limited to exception queue and final signoff.
- Closeout docs are all current within 5 business days of release.
- New team member can self-serve onboarding without ad hoc PM walkthrough.
