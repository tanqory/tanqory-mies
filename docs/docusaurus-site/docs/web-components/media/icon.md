# Icon

Scalable vector graphics for visual communication and interface enhancement.

## Overview

Icons provide visual cues and enhance usability through familiar symbols. They support accessibility requirements and adapt to different themes and sizes.

## Usage Guidelines

- Choose universally recognized symbols
- Use consistent icon style throughout application
- Provide alternative text for accessibility
- Match icon size to context and importance

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | `string` | - | Icon identifier |
| `size` | `small` \| `medium` \| `large` \| `xlarge` | `medium` | Icon dimensions |
| `color` | `string` | - | Icon color override |
| `accessibilityLabel` | `string` | - | Screen reader description |

## Accessibility

- Alternative text for screen readers
- Sufficient color contrast
- Scalable for users with vision needs
- Keyboard navigation when interactive

## Examples

### Basic Icon
```jsx
<Icon name="user" accessibilityLabel="User profile" />
```

### Large Warning Icon
```jsx
<Icon 
  name="warning" 
  size="large" 
  color="warning"
  accessibilityLabel="Warning message"
/>
```