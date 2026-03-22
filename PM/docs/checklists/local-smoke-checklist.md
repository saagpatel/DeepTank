# DeepTank Local Smoke Checklist

- Last updated: 2026-03-14
- Owner: Engineering
- Goal: Confirm local beta readiness on macOS before broader release work

## Preconditions

- Run `npm run bootstrap`
- Launch with `npm run tauri -- dev`
- Leave Ollama disabled unless you are explicitly validating the local AI path

## Must-Pass Smoke

- Launch baseline: app window opens, fish render, tick advances, and the simulation keeps running past tick 1500 without freezing
- Control loop: `Space` pauses/resumes, `.` steps while paused, `1/2/3/4` change speed, `M` toggles mute, `F` toggles feed mode
- Stability loop: no panic, blank window, or runaway console error spam during a 30-second idle run
- Data visibility: top bar metrics update and empty-population states do not crash the app

## Should-Pass Smoke

- Stats/history surfaces open without crashing
- Tank management can restore a usable tank when the current one is empty
- Decorations, scenarios, export, and import complete without corrupting the saved tank
- Re-launch preserves the expected simulation state

## Notes From 2026-03-14

- A freeze at tick ~1500 was fixed by moving background Ollama work onto `tauri::async_runtime`
- A direct `cargo run` from this repo path can fail on macOS because the folder name contains `:`
- The current saved tank can reach `Pop 0`; treat tank recovery/new-tank flow as an important follow-up smoke area
