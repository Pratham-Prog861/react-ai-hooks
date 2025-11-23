import { useState, useEffect } from 'react';
import { AISummaryResult } from '../types/index.js';

/**
 * Hook to generate a summary using AI.
 * 
 * @param text - The text to summarize.
 * @returns An object containing the summary, loading state, and error state.
 */
export function useAISummary(text: string): AISummaryResult {
  const [summary, setSummary] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!text.trim()) {
      setSummary('');
      return;
    }

    setLoading(true);
    setError(null);

    // Simulate API call
    const timer = setTimeout(() => {
      try {
        // Mocked summary logic
        const mockSummary = text.length > 50 
          ? `Summary: ${text.substring(0, 50)}... (AI generated)` 
          : `Summary: ${text} (AI generated)`;
        
        setSummary(mockSummary);
        setLoading(false);
      } catch (err) {
        setError('Failed to generate summary');
        setLoading(false);
      }
    }, 1500); // Simulate longer processing time for summary

    return () => clearTimeout(timer);
  }, [text]);

  return { summary, loading, error };
}
