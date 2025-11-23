/**
 * Result object returned by the useAIAutoComplete hook.
 */
export interface AIAutoCompleteResult {
  /**
   * List of auto-complete suggestions.
   */
  suggestions: string[];
  /**
   * Indicates if the request is currently loading.
   */
  loading: boolean;
  /**
   * Error message if the request failed, otherwise null.
   */
  error: string | null;
}

/**
 * Result object returned by the useAISummary hook.
 */
export interface AISummaryResult {
  /**
   * The generated summary text.
   */
  summary: string;
  /**
   * Indicates if the request is currently loading.
   */
  loading: boolean;
  /**
   * Error message if the request failed, otherwise null.
   */
  error: string | null;
}

/**
 * Result object returned by the useAISuggestions hook.
 */
export interface AISuggestionsResult {
  /**
   * List of intelligent suggestions based on context.
   */
  suggestions: string[];
  /**
   * Indicates if the request is currently loading.
   */
  loading: boolean;
  /**
   * Error message if the request failed, otherwise null.
   */
  error: string | null;
}
