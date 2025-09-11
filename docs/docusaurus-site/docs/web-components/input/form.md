# Form

Container component for organizing form fields with validation and submission.

## Overview

Forms provide structure and context for related input fields, handling validation, submission, and state management. They ensure consistent spacing, labeling, and error handling across form elements.

**When to use:**
- Multi-field data collection
- User registration or login
- Settings or configuration panels
- Survey or feedback interfaces

**When not to use:**
- Single input interactions
- Search interfaces
- Filter controls

## Usage Guidelines

- **Logical grouping**: Group related fields together
- **Clear validation**: Show validation errors clearly and immediately
- **Progress indication**: Show completion progress for long forms
- **Consistent spacing**: Maintain consistent field spacing and alignment

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `onSubmit` | `function` | - | Form submission handler |
| `validation` | `object` | `{}` | Validation rules and messages |
| `disabled` | `boolean` | `false` | Disables entire form |
| `autoSave` | `boolean` | `false` | Automatically saves form data |

## Accessibility

- **Form structure**: Proper form semantics with fieldsets and legends
- **Label association**: All inputs properly labeled
- **Error handling**: Validation errors announced to screen readers
- **Keyboard navigation**: Logical tab order through form fields

## Examples

### Basic Form
```jsx
<Form onSubmit={handleSubmit}>
  <TextField label="Name" required />
  <TextField label="Email" type="email" required />
  <Button type="submit">Submit</Button>
</Form>
```

### Form with Validation
```jsx
<Form 
  validation={validationRules}
  onSubmit={handleSubmit}
  onError={handleError}
>
  <TextField label="Username" validation="required" />
  <TextField label="Password" type="password" validation="required" />
  <Button type="submit">Create Account</Button>
</Form>
```