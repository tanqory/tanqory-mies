# Avatar

User profile image or initial-based representation with fallback options.

## Overview

Avatars provide visual identification for users through profile images or generated initials. They handle image loading states, fallbacks, and maintain consistent sizing across different contexts.

**When to use:**
- User profile representations
- Comment or message attribution
- Team member displays
- Contact lists or directories

**When not to use:**
- Decorative images (use Image instead)
- Product or content thumbnails
- Complex graphic displays

## Usage Guidelines

- **Consistent sizing**: Use appropriate sizes for different contexts
- **Fallback handling**: Provide initials or default images when photos fail
- **Accessibility**: Include meaningful alt text for screen readers
- **Loading states**: Handle image loading gracefully

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `src` | `string` | - | Profile image URL |
| `alt` | `string` | - | Alternative text for image |
| `size` | `small` \| `medium` \| `large` \| `xlarge` | `medium` | Avatar dimensions |
| `initials` | `string` | - | Fallback initials text |

## Accessibility

- **Alt text**: Descriptive alternative text for profile images
- **High contrast**: Sufficient contrast for initials and backgrounds
- **Screen readers**: User identification clearly announced
- **Keyboard focus**: Focusable when interactive

## Examples

### Basic Avatar
```jsx
<Avatar 
  src="/images/john-smith.jpg"
  alt="John Smith"
  size="large"
/>
```

### Initials Fallback
```jsx
<Avatar 
  initials="JS"
  alt="John Smith"
  size="medium"
  fallbackColor="blue"
/>
```