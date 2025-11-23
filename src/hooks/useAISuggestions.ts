import { useState, useEffect } from 'react';
import { AISuggestionsResult } from '../types/index.js';

/**
 * Hook to get intelligent suggestions based on context.
 * 
 * @param context - The context string (e.g., form value, UI state).
 * @returns An object containing suggestions, loading state, and error state.
 */
export function useAISuggestions(context: string): AISuggestionsResult {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!context.trim()) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    setError(null);

    // Simulate API call
    const timer = setTimeout(() => {
      try {
        // Mocked suggestions based on context
        const mockSuggestions = [
          `Improve ${context}`,
          `Optimize ${context}`,
          `Refactor ${context}`,
          `Debug ${context}`
        ];
        setSuggestions(mockSuggestions);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch suggestions');
        setLoading(false);
      }
    }, 1200); // Simulate network latency

    return () => clearTimeout(timer);
  }, [context]);

  return { suggestions, loading, error };
}
