import { renderHook, waitFor } from "@testing-library/react";
import { useAISummary } from "../useAISummary.js";
import { describe, it, expect } from "vitest";

describe("useAISummary", () => {
  it("should return initial state", () => {
    const { result } = renderHook(() => useAISummary(""));
    expect(result.current.summary).toBe("");
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("should generate summary", async () => {
    const { result } = renderHook(() =>
      useAISummary("This is a long text that needs summarization.")
    );

    await waitFor(
      () => {
        expect(result.current.summary).toContain("AI generated");
        expect(result.current.loading).toBe(false);
      },
      { timeout: 5000 }
    );
  });
});
