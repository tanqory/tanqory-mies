# List

Basic ordered or unordered list component for displaying simple content.

## Overview

Lists present multiple related items in a structured, scannable format. They support various styling options and can accommodate different content types while maintaining visual consistency.

**When to use:**
- Simple content enumeration
- Step-by-step instructions
- Feature or benefit listings
- Navigation menus or indexes

**When not to use:**
- Interactive selection (use Option List instead)
- Complex structured data (use Data Table instead)
- Key-value pairs (use Description List instead)

## Usage Guidelines

- **Consistent formatting**: Maintain uniform item styling and spacing
- **Logical ordering**: Use numbered lists for sequential content
- **Clear hierarchy**: Distinguish between list levels when nesting
- **Appropriate markers**: Choose bullet styles that match content purpose

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | `Array<string \| ReactNode>` | `[]` | List item content |
| `ordered` | `boolean` | `false` | Uses numbered list format |
| `marker` | `bullet` \| `dash` \| `none` | `bullet` | List item marker style |
| `spacing` | `compact` \| `comfortable` | `comfortable` | Item spacing |

## Accessibility

- **Semantic markup**: Uses proper HTML list elements (ul/ol)
- **Screen readers**: List structure and item count announced
- **Keyboard navigation**: Logical tab order through interactive items
- **Nested lists**: Proper nesting levels communicated

## Examples

### Basic List
```jsx
<List 
  items={[
    "First item content",
    "Second item content",
    "Third item content"
  ]}
/>
```

### Ordered List
```jsx
<List 
  ordered
  items={[
    "Complete user research",
    "Design wireframes",
    "Build prototype",
    "Test with users"
  ]}
  spacing="compact"
/>
```