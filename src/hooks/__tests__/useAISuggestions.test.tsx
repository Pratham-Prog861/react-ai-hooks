import { renderHook, waitFor } from "@testing-library/react";
import { useAISuggestions } from "../useAISuggestions.js";
import { describe, it, expect } from "vitest";

describe("useAISuggestions", () => {
  it("should return initial state", () => {
    const { result } = renderHook(() => useAISuggestions(""));
    expect(result.current.suggestions).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("should return suggestions", async () => {
    const { result } = renderHook(() => useAISuggestions("form-input"));

    await waitFor(
      () => {
        expect(result.current.suggestions).toHaveLength(4);
        expect(result.current.suggestions[0]).toContain("form-input");
        expect(result.current.loading).toBe(false);
      },
      { timeout: 5000 }
    );
  });
});
