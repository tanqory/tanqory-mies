# Autocomplete

Text input with intelligent suggestions based on user input.

## Overview

Autocomplete helps users complete inputs efficiently by providing relevant suggestions as they type, reducing errors and improving data consistency.

## Usage Guidelines

- Show suggestions after 2-3 characters typed
- Limit suggestions to most relevant results
- Support keyboard navigation through options
- Clear visual distinction between input and suggestions

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | `""` | Current input value |
| `suggestions` | `array` | `[]` | Available suggestion options |
| `onSelect` | `function` | - | Suggestion selection handler |
| `placeholder` | `string` | - | Input placeholder text |
| `minChars` | `number` | `2` | Minimum characters before suggestions |

## Accessibility

- Proper ARIA autocomplete attributes
- Screen reader announcements for suggestions
- Keyboard navigation (arrow keys, enter, escape)
- Focus management between input and suggestions

## Examples

### Basic Autocomplete
```jsx
<Autocomplete
  placeholder="Search cities..."
  suggestions={['New York', 'Los Angeles', 'Chicago']}
  onSelect={handleCitySelect}
/>
```

### User Search
```jsx
<Autocomplete
  value={searchTerm}
  suggestions={userSuggestions}
  onSelect={selectUser}
  placeholder="Find user..."
  minChars={3}
/>
```