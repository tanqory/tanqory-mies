# Form Layout

A specialized layout component that organizes form elements with optimal spacing, alignment, and responsive behavior.

## Overview

Form Layout provides structured organization for form elements, ensuring consistent spacing and logical flow. It handles responsive behavior automatically and maintains accessibility standards for form navigation.

## Usage Guidelines

**When to use:**
- For any form with multiple input fields
- Creating consistent form layouts across your application
- Building complex forms with sections and groups

**Best practices:**
- Group related fields together
- Use clear section headings
- Provide adequate spacing for touch interfaces
- Consider responsive layout on smaller screens

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `columns` | number/object | 1 | Number of columns (responsive object supported) |
| `spacing` | string | 'medium' | Space between form elements |
| `alignment` | string | 'start' | Field alignment within columns |

## Accessibility

- Maintains proper form field relationships
- Preserves logical tab order
- Supports fieldset grouping for related elements
- Works with screen reader form navigation

## Examples

### Basic Form
```jsx
<FormLayout>
  <TextField label="First Name" required />
  <TextField label="Last Name" required />
  <TextField label="Email" type="email" />
  <ButtonGroup>
    <Button variant="primary">Submit</Button>
    <Button variant="secondary">Cancel</Button>
  </ButtonGroup>
</FormLayout>
```

### Two Column Layout
```jsx
<FormLayout columns={2}>
  <TextField label="First Name" />
  <TextField label="Last Name" />
  <TextField label="Email" columnSpan={2} />
  <Select label="Country" />
  <TextField label="Postal Code" />
</FormLayout>
```

### Responsive Columns
```jsx
<FormLayout 
  columns={{
    mobile: 1,
    tablet: 2,
    desktop: 3
  }}
>
  <TextField label="Field 1" />
  <TextField label="Field 2" />
  <TextField label="Field 3" />
</FormLayout>
```