# Text

Base text component for consistent typography throughout the interface.

## Overview

Text components provide consistent typography styling with built-in responsiveness, accessibility features, and design system integration. They handle various text types and formatting needs.

**When to use:**
- Body text and paragraphs
- Labels and descriptions
- UI text content
- Consistent text styling

**When not to use:**
- Headings (use Heading instead)
- Code content (use Code or Code Block instead)
- Interactive text (use Link or Button instead)

## Usage Guidelines

- **Appropriate sizing**: Use sizes appropriate for content hierarchy
- **Line height**: Ensure readable line spacing
- **Color contrast**: Maintain sufficient contrast ratios
- **Responsive scaling**: Consider text scaling across devices

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | `small` \| `medium` \| `large` \| `xlarge` | `medium` | Text size variant |
| `weight` | `normal` \| `medium` \| `semibold` \| `bold` | `normal` | Font weight |
| `color` | `default` \| `muted` \| `accent` \| `error` | `default` | Text color variant |
| `align` | `left` \| `center` \| `right` \| `justify` | `left` | Text alignment |

## Accessibility

- **Screen readers**: Text content read naturally
- **Color independence**: Information conveyed beyond color alone
- **Font scaling**: Respects user font size preferences
- **High contrast**: Sufficient contrast for all color variants

## Examples

### Basic Text
```jsx
<Text size="medium" weight="normal">
  This is regular body text with standard formatting.
</Text>
```

### Emphasized Text
```jsx
<Text 
  size="large" 
  weight="semibold" 
  color="accent"
>
  Important information that stands out.
</Text>
```