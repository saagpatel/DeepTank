import { describe, expect, it } from "vitest";
import { defaultSettings } from "../../src/config/defaultSettings";

describe("defaultSettings", () => {
  it("keeps core boid and ecosystem values in safe ranges", () => {
    expect(defaultSettings.separation_weight).toBeGreaterThan(0);
    expect(defaultSettings.alignment_weight).toBeGreaterThan(0);
    expect(defaultSettings.cohesion_weight).toBeGreaterThan(0);
    expect(defaultSettings.hunger_rate).toBeGreaterThan(0);
    expect(defaultSettings.hunger_rate).toBeLessThan(0.01);
    expect(defaultSettings.species_threshold).toBeGreaterThan(0.5);
  });

  it("defines valid auto-feeder defaults", () => {
    expect(defaultSettings.auto_feed_interval).toBeGreaterThan(0);
    expect(defaultSettings.auto_feed_amount).toBeGreaterThan(0);
  });

  it("pins a valid audio and disease baseline", () => {
    expect(defaultSettings.master_volume).toBeGreaterThanOrEqual(0);
    expect(defaultSettings.master_volume).toBeLessThanOrEqual(1);
    expect(defaultSettings.disease_duration).toBeGreaterThan(0);
    expect(defaultSettings.disease_damage).toBeGreaterThan(0);
  });

  it("keeps optional local AI integrations opt-in by default", () => {
    expect(defaultSettings.ollama_enabled).toBe(false);
    expect(defaultSettings.ollama_url).toContain("localhost");
  });
});
