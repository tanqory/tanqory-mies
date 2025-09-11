# Exception List

Structured display of validation errors, warnings, and informational messages.

## Overview

Exception lists present multiple related messages in an organized format, helping users understand and resolve issues systematically.

## Usage Guidelines

- Group related exceptions together
- Order by severity (errors, warnings, info)
- Provide clear actionable guidance
- Link to relevant form fields when possible

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `exceptions` | `array` | `[]` | List of exception objects |
| `severity` | `error` \| `warning` \| `info` | `error` | Overall list severity |
| `title` | `string` | - | Optional list heading |

## Accessibility

- Proper heading hierarchy
- Error announcements for screen readers
- Keyboard navigation to linked fields
- Clear visual hierarchy and grouping

## Examples

### Form Validation Errors
```jsx
<ExceptionList 
  title="Please fix the following errors:"
  exceptions={[
    { type: 'error', message: 'Email address is required', field: 'email' },
    { type: 'error', message: 'Password must be at least 8 characters', field: 'password' }
  ]} 
/>
```

### Mixed Messages
```jsx
<ExceptionList exceptions={[
  { type: 'error', message: 'File upload failed' },
  { type: 'warning', message: 'Some data may be outdated' },
  { type: 'info', message: 'Changes saved automatically' }
]} />
```