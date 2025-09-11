# Inline Error

Contextual error message display for form validation feedback.

## Overview

Inline errors provide immediate validation feedback positioned near the relevant form field. They help users understand and correct input errors quickly without losing context.

**When to use:**
- Form field validation errors
- Real-time input feedback
- Contextual error messaging
- Field-specific help text

**When not to use:**
- Global error messages
- Success confirmations
- General information messages

## Usage Guidelines

- **Immediate feedback**: Show errors as soon as validation fails
- **Clear messaging**: Use specific, actionable error descriptions
- **Visual association**: Position errors close to relevant fields
- **Consistent styling**: Maintain consistent error appearance

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `message` | `string` | - | Error message text |
| `variant` | `error` \| `warning` | `error` | Message severity |
| `visible` | `boolean` | `true` | Controls error visibility |
| `icon` | `boolean` | `true` | Shows error icon |

## Accessibility

- **Screen readers**: Error messages announced immediately
- **Color independence**: Errors indicated beyond color alone
- **Focus management**: Errors don't interfere with keyboard navigation
- **Clear language**: Simple, understandable error descriptions

## Examples

### Field Validation
```jsx
<TextField 
  label="Email" 
  value={email}
  onChange={setEmail}
  error={emailError}
/>
<InlineError 
  message="Please enter a valid email address" 
  visible={!!emailError} 
/>
```

### Warning Message
```jsx
<InlineError 
  variant="warning"
  message="This action cannot be undone"
  icon={false}
/>
```