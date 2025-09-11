# Text Field

Single-line text input for collecting user information and data entry.

## Overview

Text field allows users to enter short text values like names, emails, or search terms. Provides validation feedback and supports various input types.

## Usage Guidelines

- Use clear, descriptive labels
- Provide helpful placeholder text when appropriate
- Include validation feedback near the field
- Support keyboard navigation and shortcuts

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | - | Field label text |
| `placeholder` | `string` | - | Placeholder hint text |
| `value` | `string` | - | Current input value |
| `error` | `string` | - | Error message to display |
| `disabled` | `boolean` | `false` | Disable input |
| `required` | `boolean` | `false` | Mark as required field |
| `type` | `text` \| `email` \| `password` \| `tel` \| `url` | `text` | Input type |
| `autoComplete` | `string` | - | Browser autocomplete hint |

## Accessibility

- Proper label association with input
- Error messages announced to screen readers
- Required field indication
- Keyboard navigation support

## Examples

### Basic Text Field
```jsx
<TextField
  label="Full Name"
  placeholder="Enter your full name"
  required
/>
```

### Email Field with Validation
```jsx
<TextField
  label="Email Address"
  type="email"
  value={email}
  error={emailError}
  onChange={handleEmailChange}
/>
```