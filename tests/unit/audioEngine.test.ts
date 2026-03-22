import { describe, expect, it } from "vitest";
import { normalizeVolume } from "../../src/audio/audioEngine";

describe("normalizeVolume", () => {
  it("falls back to default when value is not finite", () => {
    expect(normalizeVolume(Number.NaN)).toBe(0.3);
    expect(normalizeVolume(Number.POSITIVE_INFINITY)).toBe(0.3);
  });

  it("clamps values into 0..1", () => {
    expect(normalizeVolume(-2)).toBe(0);
    expect(normalizeVolume(2)).toBe(1);
    expect(normalizeVolume(0.42)).toBe(0.42);
  });
});
