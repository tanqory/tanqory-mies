# Button Group

Container for organizing related buttons with consistent spacing and alignment.

## Overview

Button group arranges multiple buttons together with proper spacing and visual hierarchy. Helps users understand relationships between related actions.

## Usage Guidelines

- Group related actions together
- Place primary action on the right
- Maintain consistent spacing between buttons
- Limit to 2-4 buttons per group

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `alignment` | `left` \| `center` \| `right` | `left` | Button alignment |
| `spacing` | `tight` \| `normal` \| `loose` | `normal` | Space between buttons |
| `fullWidth` | `boolean` | `false` | Expand buttons to fill width |

## Accessibility

- Maintains button focus order
- Proper keyboard navigation
- Screen reader announces button relationships

## Examples

### Basic Button Group
```jsx
<ButtonGroup>
  <Button variant="tertiary">Cancel</Button>
  <Button variant="primary">Save</Button>
</ButtonGroup>
```