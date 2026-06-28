# DeepTank — Portfolio Disposition

**Status:** Release Frozen — substantial Tauri + React + Rust desktop
product is release-ready per `PM/docs/status/product-status.md`,
blocked only on external credential / provisioning inputs. Joins the
signing-frozen cluster (now 7 repos).

> Disposition uses strict `origin/main` verification — the lesson
> learned from FreeLanceInvoice + PersonalKBDrafter corrections
> earlier in the session.

---

## Verification posture

This repo has both `origin` (`saagpatel/DeepTank`) and `legacy-origin`
(`saagar210/DeepTank`) remotes. The disposition reads `origin/main`
exclusively. Specifically verified:

- `origin/main` tip: `8a8a4e3` chore: add pull request template
- Last substantive feature/fix on `origin/main`:
  `82a2530 fix(ci): install DeepTank Linux build deps`,
  `0092f73 feat: implement CI/CD, release automation, and documentation`
- `PM/docs/status/product-status.md` confirmed present on `origin/main`
  via `git show origin/main:PM/docs/status/product-status.md` — lists
  "Release target: Pending credential handoff window" and
  "Health: Yellow"
- Source tree: 43 source files including genome/breeding/phylogenetic
  simulation, audio helpers, Tauri shell

Operator-side recommendation: run a one-time `legacy-origin` audit
before signing, in case orphaned work exists there:
`git log --oneline origin/main..legacy-origin/main | head -20`

---

## Current state in one paragraph

DeepTank is a desktop simulation app (Tauri + React + Rust) where
fish in a tank have inheritable genetic traits (speed, size,
aggression, boldness, schooling affinity, metabolism). Breeding
previews trait inheritance ranges before committing; a phylogenetic
tree grows live as generations emerge; optional Ollama integration
narrates tank events. The Engineering team's product status doc
(`PM/docs/status/product-status.md`, dated 2026-03-01) declares the
execution control plane, deterministic verification, CI
modernization, and core test scaffolding complete. The named open
decisions are all operator-level (signing/notarization credentials,
distribution target, telemetry destination).

For full detail (in priority order):
- `PM/docs/status/product-status.md`
- `PM/docs/closeout-workstream-plan.md`
- `PM/docs/runbooks/operator-runbook.md`
- `PM/docs/releases/release-notes.md`
- `PM/docs/checklists/final-closeout-checklist.md`

---

## Portfolio operating system instructions

| Aspect | Posture |
|---|---|
| Portfolio status | `Release Frozen` |
| Product health | Yellow (per Engineering product status doc) — yellow because release is **blocked on credential decisions**, not because anything is broken |
| Review cadence | Suspend overdue counting |
| Resurface conditions | (a) Apple Developer ID + notarization credentials wired, (b) operator picks the three decisions in the product status doc (signing path, distribution target, telemetry destination), or (c) operator opens a v0.2 scope packet |
| Co-batch with | Signing cluster: DesktopPEt, ContentEngine, AIGCCore, Relay, FreeLanceInvoice, Nexus, **DeepTank** — **now 7 repos**. |

---

## Why "Release Frozen" instead of other dispositions

- **Scaffold-stop** — *wrong, and worth calling out*. The
  `codex/chore/bootstrap-codex-os` branch name and 31 dirty files
  superficially looked like classic scaffold-stop (similar to
  TerraSynth's pattern). It's not. `origin/main` has a 43-file
  source tree, a real product, and a Yellow-health release-readiness
  product status doc. **Do not pattern-match on branch names — read
  `origin/main` to confirm what is actually shipped.**
- **Active** — wrong. The product status doc explicitly says
  release-readiness scope is complete and the blocker is operator
  decisions, not engineering work.
- **Cold Storage / Archived** — wrong. Recent CI hardening commits
  and a Yellow-health declaration mean active operational work is
  still happening; just not net-new product scope.
- **Release Frozen** — correct, same shape as the rest of the
  signing cluster.

---

## Unblock trigger (operator)

When ready to ship:

1. Pick the three decisions listed in
   `PM/docs/status/product-status.md` (signing path, distribution
   target, telemetry destination).
2. Wire Apple Developer ID + notarization credentials per the chosen
   signing path.
3. Run the operator runbook end-to-end against the canonical
   `origin/main`.
4. Cut a real macOS release.

Estimated operator time once credentials and decisions are in hand:
~5 hours including a notarization round-trip plus the three pre-cut
decisions.

---

## Reactivation procedure (for the next code session)

1. **Verify local clone tracking first.** Check `git branch -vv` — if
   `main` tracks `legacy-origin/main`, retarget to `origin/main`.
   This was the trap that produced wrong dispositions for
   FreeLanceInvoice and PersonalKBDrafter earlier in the session.
2. Move any untracked artifacts in `.codex/` or `.perf-results/`
   aside before pulling — the `origin/main` history adds files in
   those paths that will conflict with leftover local state.
3. Delete stale `codex/*` branches (most are merged-history
   artifacts).
4. Re-run `npm run verify` to confirm the toolchain still works
   after the freeze.

---

## Last known reference

| Field | Value |
|---|---|
| `origin/main` tip | `8a8a4e3` chore: add pull request template |
| Last substantive commit on `origin/main` | `82a2530` fix(ci): install DeepTank Linux build deps |
| Major release-readiness commit | `0092f73` feat: implement CI/CD, release automation, and documentation |
| Product status doc | `PM/docs/status/product-status.md` (on `origin/main`, dated 2026-03-01) |
| Health | Yellow (release-blocked on credentials) |
| Build verification status | green |
| Blocker | Apple signing + operator's three named PM decisions |
| Migration note | `legacy-origin` points at frozen `saagar210/DeepTank`; verify before relying on branch state |
