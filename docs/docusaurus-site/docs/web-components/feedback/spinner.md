# Spinner

Animated loading indicator for indeterminate progress states.

## Overview

Spinners indicate ongoing activity when the duration cannot be determined. They provide visual feedback that the system is processing and prevent users from thinking the interface has frozen.

**When to use:**
- Indeterminate loading operations
- API calls or network requests
- Search or filtering operations
- Background processing tasks

**When not to use:**
- Deterministic progress (use Progress Bar instead)
- Very quick operations (under 200ms)
- Multiple concurrent loading states

## Usage Guidelines

- **Appropriate sizing**: Match spinner size to context and importance
- **Centered placement**: Position in logical loading areas
- **Clear context**: Pair with descriptive text when helpful
- **Consistent timing**: Maintain steady animation speed

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | `small` \| `medium` \| `large` | `medium` | Spinner dimensions |
| `color` | `primary` \| `secondary` \| `inherit` | `primary` | Spinner color theme |
| `label` | `string` | - | Optional accessible label |
| `overlay` | `boolean` | `false` | Shows backdrop overlay |

## Accessibility

- **Screen readers**: Announces loading status with aria-label
- **Focus management**: Prevents interaction with background content when overlay is used
- **Reduced motion**: Respects user animation preferences
- **Loading context**: Clearly indicates what is being loaded

## Examples

### Basic Spinner
```jsx
<Spinner label="Loading..." />
```

### Page Overlay
```jsx
<Spinner 
  size="large" 
  overlay 
  label="Processing request..." 
/>
```