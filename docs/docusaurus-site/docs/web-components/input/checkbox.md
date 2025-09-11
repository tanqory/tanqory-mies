# Checkbox

Binary selection control for forms and lists with clear on/off states.

## Overview

Checkboxes allow users to make binary choices and select multiple options from a list. They provide clear visual feedback for selection states.

## Usage Guidelines

- Use for binary choices (yes/no, on/off, enabled/disabled)
- Group related checkboxes with clear labels
- Indicate required selections clearly
- Support keyboard navigation and screen readers

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `checked` | `boolean` | `false` | Selection state |
| `disabled` | `boolean` | `false` | Prevent interaction |
| `required` | `boolean` | `false` | Mark as required |
| `label` | `string` | - | Checkbox label text |
| `onChange` | `function` | - | Selection change handler |

## Accessibility

- Proper label association with input
- Keyboard navigation support
- Screen reader state announcements
- Focus indicators for keyboard users

## Examples

### Basic Checkbox
```jsx
<Checkbox label="Accept terms and conditions" required />
```

### Checkbox Group
```jsx
<CheckboxGroup label="Select preferences">
  <Checkbox label="Email notifications" />
  <Checkbox label="SMS updates" />
  <Checkbox label="Marketing materials" />
</CheckboxGroup>
```