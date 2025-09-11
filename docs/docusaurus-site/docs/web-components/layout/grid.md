# Grid

A flexible layout system for creating responsive multi-column layouts with consistent spacing and alignment.

## Overview

Grid provides a robust system for creating responsive layouts with automatic column sizing and gap management. It adapts to different screen sizes while maintaining visual consistency and proper content flow.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `columns` | number/string/object | 'auto' | Column configuration |
| `gap` | string | 'medium' | Space between grid items |
| `alignItems` | string | 'stretch' | Vertical alignment of items |
| `justifyItems` | string | 'stretch' | Horizontal alignment of items |

## Examples

### Responsive Grid
```jsx
<Grid 
  columns={{
    mobile: 1,
    tablet: 2,
    desktop: 3
  }}
  gap="large"
>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
```