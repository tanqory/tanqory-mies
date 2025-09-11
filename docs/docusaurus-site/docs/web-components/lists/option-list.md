# Option List

Interactive list of selectable options with keyboard navigation support.

## Overview

Option lists provide selectable items in a vertical list format with keyboard navigation and selection states. They're ideal for dropdown menus, autocomplete suggestions, and choice selection interfaces.

**When to use:**
- Dropdown menu options
- Autocomplete or search suggestions
- Multi-select interfaces
- Command palettes or quick actions

**When not to use:**
- Static content display (use List instead)
- Complex data relationships (use Data Table instead)
- Key-value information (use Description List instead)

## Usage Guidelines

- **Clear selection states**: Highlight selected and focused options distinctly
- **Keyboard navigation**: Support arrow keys, Enter, and Escape
- **Visual grouping**: Group related options with dividers or headers
- **Appropriate sizing**: Ensure options are easily clickable

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `options` | `Array<Option>` | `[]` | Selectable option items |
| `value` | `string \| string[]` | - | Selected value(s) |
| `multiple` | `boolean` | `false` | Allows multiple selections |
| `searchable` | `boolean` | `false` | Enables option filtering |

## Accessibility

- **ARIA attributes**: Uses listbox role with proper option states
- **Keyboard navigation**: Arrow keys navigate, Enter/Space selects
- **Screen readers**: Selection state and option count announced
- **Focus management**: Maintains focus position during interactions

## Examples

### Basic Option List
```jsx
<OptionList 
  options={[
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" }
  ]}
  value={selectedOption}
  onChange={setSelectedOption}
/>
```

### Multi-Select
```jsx
<OptionList 
  multiple
  options={availableFilters}
  value={selectedFilters}
  onChange={setSelectedFilters}
  searchable
/>
```