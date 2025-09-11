# Card

Flexible container for grouping related information with consistent styling and spacing.

## Overview

Cards organize content into digestible sections with clear boundaries. They provide a consistent format for displaying information while maintaining visual hierarchy.

## Usage Guidelines

- Group related content together
- Use consistent card layouts within collections
- Include clear headings or titles
- Provide appropriate actions when needed

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | `string` | - | Card header title |
| `subtitle` | `string` | - | Secondary header text |
| `actions` | `Action[]` | - | Card action buttons |
| `sectioned` | `boolean` | `false` | Add internal sections |
| `subdued` | `boolean` | `false` | Reduced visual prominence |

## Accessibility

- Proper heading hierarchy within cards
- Keyboard navigation for interactive elements
- Screen reader navigation landmarks
- Focus management for card actions

## Examples

### Basic Card
```jsx
<Card title="Customer Details">
  <p>Customer information content...</p>
</Card>
```

### Card with Actions
```jsx
<Card 
  title="Order #1234"
  actions={[
    { content: "View", onClick: handleView },
    { content: "Edit", onClick: handleEdit }
  ]}
>
  <p>Order details...</p>
</Card>
```