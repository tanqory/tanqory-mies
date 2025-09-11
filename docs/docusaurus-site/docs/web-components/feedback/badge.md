# Badge

Small visual indicator for status, count, or categorical information.

## Overview

Badges display supplementary information like notifications count, status indicators, or labels. They provide quick visual scanning for important details.

## Usage Guidelines

- Use for supplementary information only
- Keep text brief (single word or short number)
- Choose appropriate color for semantic meaning
- Don't rely solely on color to convey information

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `status` | `info` \| `success` \| `warning` \| `error` | `info` | Badge color scheme |
| `size` | `small` \| `medium` | `medium` | Badge dimensions |
| `tone` | `positive` \| `negative` \| `warning` \| `info` | `info` | Semantic meaning |

## Accessibility

- Sufficient color contrast for readability
- Don't rely solely on color for meaning
- Screen reader accessible content
- Appropriate semantic markup

## Examples

### Status Badge
```jsx
<Badge status="success">Active</Badge>
```

### Notification Count
```jsx
<Badge status="error" tone="negative">3</Badge>
```