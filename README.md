# react-ai-hooks

A collection of React hooks for AI-powered features.

## Installation

```bash
npm install react-ai-hooks
```

## Usage

### useAIAutoComplete

Provides auto-complete suggestions based on user input.

```tsx
import { useState } from "react";
import { useAIAutoComplete } from "react-ai-hooks";

function AutoCompleteComponent() {
  const [input, setInput] = useState("");
  const { suggestions, loading, error } = useAIAutoComplete(input);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
}
```

### useAISummary

Generates a summary of the provided text.

```tsx
import { useState } from "react";
import { useAISummary } from "react-ai-hooks";

function SummaryComponent() {
  const [text, setText] = useState("");
  const { summary, loading, error } = useAISummary(text);

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to summarize..."
      />
      {loading && <p>Generating summary...</p>}
      {error && <p>Error: {error}</p>}
      {summary && (
        <div>
          <h3>Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}
```

### useAISuggestions

Provides intelligent suggestions based on context.

```tsx
import { useAISuggestions } from "react-ai-hooks";

function SuggestionsComponent({ context }: { context: string }) {
  const { suggestions, loading, error } = useAISuggestions(context);

  if (loading) return <p>Loading suggestions...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>Suggestions for "{context}":</h3>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
}
```

## API

### `useAIAutoComplete(input: string, debounceTime?: number)`

- `input`: The current input string.
- `debounceTime`: Optional debounce time in milliseconds (default: 500ms).
- Returns: `{ suggestions: string[], loading: boolean, error: string | null }`

### `useAISummary(text: string)`

- `text`: The text to summarize.
- Returns: `{ summary: string, loading: boolean, error: string | null }`

### `useAISuggestions(context: string)`

- `context`: The context string (e.g., form value, UI state).
- Returns: `{ suggestions: string[], loading: boolean, error: string | null }`
