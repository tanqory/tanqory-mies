# Scrollable

Container component for managing scrollable content areas with custom styling.

## Overview

Scrollable components provide controlled scrolling areas with consistent styling, scroll indicators, and smooth scrolling behavior. They handle overflow content elegantly while maintaining accessibility.

**When to use:**
- Fixed-height content areas
- Modal or drawer content
- Code displays or logs
- Data tables with many rows

**When not to use:**
- Full-page scrolling (use native scrolling)
- Simple overflow scenarios
- Very short content that doesn't need scrolling

## Usage Guidelines

- **Visible scroll indicators**: Make scrolling capability obvious
- **Smooth scrolling**: Provide smooth scroll behavior where appropriate
- **Keyboard support**: Enable keyboard scrolling functionality
- **Touch optimization**: Ensure smooth touch scrolling on mobile

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `height` | `string \| number` | `auto` | Fixed height for scrollable area |
| `direction` | `vertical` \| `horizontal` \| `both` | `vertical` | Scroll direction allowed |
| `shadow` | `boolean` | `false` | Shows scroll shadows |
| `onScroll` | `function` | - | Scroll event handler |

## Accessibility

- **Keyboard navigation**: Arrow keys and Page Up/Down for scrolling
- **Screen readers**: Scrollable regions properly announced
- **Focus management**: Maintains focus during scroll operations
- **Scroll indicators**: Provides information about scroll position

## Examples

### Fixed Height Area
```jsx
<Scrollable height={300} shadow>
  <div>
    {longContentList.map(item => (
      <p key={item.id}>{item.content}</p>
    ))}
  </div>
</Scrollable>
```

### Horizontal Scroll
```jsx
<Scrollable 
  direction="horizontal" 
  height={200}
  onScroll={handleScroll}
>
  <div style={{ width: '150%' }}>
    Wide content that scrolls horizontally
  </div>
</Scrollable>
```