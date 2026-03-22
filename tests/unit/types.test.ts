import { describe, expect, it } from "vitest";
import { BASE_LIFESPAN } from "../../src/types";

describe("simulation constants", () => {
  it("exposes a positive baseline lifespan used by frontend expectations", () => {
    expect(BASE_LIFESPAN).toBeGreaterThan(0);
    expect(BASE_LIFESPAN).toBe(20_000);
  });
});
