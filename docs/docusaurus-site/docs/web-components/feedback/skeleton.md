# Skeleton

Placeholder component that mimics content structure during loading states.

## Overview

Skeleton loaders provide visual placeholders that match the shape and size of content being loaded. They reduce perceived loading time and prevent layout shifts.

**When to use:**
- Loading content with predictable structure
- Image or media loading states
- Data table or list loading
- Profile or card loading

**When not to use:**
- Unpredictable content layouts
- Very fast loading (under 300ms)
- Simple text-only loading

## Usage Guidelines

- **Match content shape**: Mirror the structure of actual content
- **Consistent animation**: Use subtle pulse or shimmer effects
- **Appropriate sizing**: Match final content dimensions
- **Semantic grouping**: Group related skeleton elements together

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `text` \| `rectangular` \| `circular` | `rectangular` | Shape of skeleton element |
| `width` | `string \| number` | `100%` | Element width |
| `height` | `string \| number` | `auto` | Element height |
| `animation` | `pulse` \| `wave` \| `none` | `pulse` | Animation style |

## Accessibility

- **Screen readers**: Hidden from assistive technology during loading
- **Loading announcement**: Paired with loading status announcements
- **Focus management**: No interactive elements until content loads
- **Reduced motion**: Respects user motion preferences

## Examples

### Text Content
```jsx
<Skeleton variant="text" width="60%" />
<Skeleton variant="text" width="80%" />
<Skeleton variant="text" width="40%" />
```

### Media Card
```jsx
<div>
  <Skeleton variant="rectangular" width="100%" height={200} />
  <Skeleton variant="text" width="75%" />
  <Skeleton variant="text" width="50%" />
</div>
```