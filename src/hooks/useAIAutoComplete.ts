import { useState, useEffect } from 'react';
import { AIAutoCompleteResult } from '../types/index.js';

/**
 * Hook to get AI-powered auto-complete suggestions.
 * 
 * @param input - The current input string.
 * @param debounceTime - Debounce time in milliseconds (default: 500ms).
 * @returns An object containing suggestions, loading state, and error state.
 */
export function useAIAutoComplete(input: string, debounceTime: number = 500): AIAutoCompleteResult {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!input.trim()) {
      setSuggestions([]);
      return;
    }

    const handler = setTimeout(() => {
      setLoading(true);
      setError(null);

      // Simulate API call
      setTimeout(() => {
        try {
          // Mocked response based on input
          const mockSuggestions = [
            `${input} is great`,
            `${input} is awesome`,
            `${input} tutorial`,
            `${input} examples`,
            `how to use ${input}`
          ];
          setSuggestions(mockSuggestions);
          setLoading(false);
        } catch (err) {
          setError('Failed to fetch suggestions');
          setLoading(false);
        }
      }, 1000); // Simulate network latency
    }, debounceTime);

    return () => {
      clearTimeout(handler);
    };
  }, [input, debounceTime]);

  return { suggestions, loading, error };
}
