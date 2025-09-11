# Split Button

Combined button with primary action and dropdown menu for secondary options.

## Overview

Split button provides quick access to a primary action while offering related secondary actions through a dropdown menu. Saves space while maintaining discoverability.

## Usage Guidelines

- Use when there's one primary action with related alternatives
- Place most common action as the main button
- Limit dropdown options to 3-6 items
- Ensure alternatives are logically related

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `primaryAction` | `Action` | - | Main button action |
| `secondaryActions` | `Action[]` | - | Dropdown menu options |
| `disabled` | `boolean` | `false` | Disable all actions |
| `loading` | `boolean` | `false` | Show loading state |

## Accessibility

- Primary button focusable with Tab
- Dropdown trigger has appropriate ARIA attributes
- Keyboard navigation through dropdown options
- Screen reader announces available actions

## Examples

### Save Options
```jsx
<SplitButton
  primaryAction={{ label: "Save", onClick: handleSave }}
  secondaryActions={[
    { label: "Save as Draft", onClick: handleSaveDraft },
    { label: "Save and Exit", onClick: handleSaveExit }
  ]}
/>
```