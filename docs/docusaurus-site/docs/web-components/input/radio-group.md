# Radio Group

Set of mutually exclusive radio button options for single selection.

## Overview

Radio groups present multiple options where only one can be selected at a time. They provide clear visual indication of the current selection and make the relationship between options explicit.

**When to use:**
- Single selection from 2-5 options
- Mutually exclusive choices
- Options that need to be visible simultaneously
- Form fields requiring one selection

**When not to use:**
- Multiple selections (use Checkbox Group instead)
- Large number of options (use Select instead)
- Boolean true/false choices (use Toggle or Checkbox)

## Usage Guidelines

- **Clear grouping**: Visually group related radio buttons
- **Descriptive labels**: Use clear, concise option labels
- **Default selection**: Consider providing a sensible default
- **Logical ordering**: Arrange options in meaningful order

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `options` | `Array<Option>` | `[]` | Radio button options |
| `value` | `string` | - | Currently selected value |
| `name` | `string` | - | Form field name |
| `disabled` | `boolean` | `false` | Disables entire group |

## Accessibility

- **Keyboard navigation**: Arrow keys navigate between options
- **Screen readers**: Group purpose and selection state announced
- **Focus indication**: Clear focus ring on active option
- **Fieldset structure**: Proper grouping with fieldset and legend

## Examples

### Basic Radio Group
```jsx
<RadioGroup 
  name="notification-frequency"
  options={[
    { label: "Daily", value: "daily" },
    { label: "Weekly", value: "weekly" },
    { label: "Monthly", value: "monthly" }
  ]}
  value={frequency}
  onChange={setFrequency}
/>
```

### With Default Selection
```jsx
<RadioGroup 
  name="theme"
  options={[
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "System", value: "system" }
  ]}
  value="system"
  onChange={setTheme}
/>
```