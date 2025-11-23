import { renderHook, waitFor } from "@testing-library/react";
import { useAIAutoComplete } from "../useAIAutoComplete.js";
import { describe, it, expect } from "vitest";

describe("useAIAutoComplete", () => {
  it("should return initial state", () => {
    const { result } = renderHook(() => useAIAutoComplete(""));
    expect(result.current.suggestions).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("should return suggestions after debounce and loading", async () => {
    const { result } = renderHook(() => useAIAutoComplete("react", 100));

    // Initial state
    expect(result.current.loading).toBe(false);

    await waitFor(
      () => {
        expect(result.current.suggestions).toHaveLength(5);
        expect(result.current.suggestions[0]).toContain("react");
        expect(result.current.loading).toBe(false);
      },
      { timeout: 5000 }
    );
  });
});
