# Block Stack

A vertical layout component that arranges child elements in a single column with consistent spacing between items.

## Overview

Block Stack provides a simple, reliable way to create vertical layouts with uniform spacing. It eliminates the need for manual margin management and ensures consistent vertical rhythm throughout your interface. Use this component whenever you need to stack elements vertically with predictable spacing.

Key features:
- Consistent vertical spacing between elements
- Responsive spacing options
- Alignment control for child elements
- Support for different spacing scales

## Usage Guidelines

**When to use:**
- For forms with multiple fields stacked vertically
- Creating lists of content cards or items
- Building column layouts with consistent spacing
- Organizing dashboard widgets or panels

**Best practices:**
- Use consistent spacing values throughout your application
- Consider responsive spacing for different screen sizes
- Align child elements appropriately for content type
- Group related content within the stack

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `spacing` | string | 'medium' | Space between items (none, small, medium, large, extra-large) |
| `alignment` | string | 'start' | Horizontal alignment (start, center, end, stretch) |
| `responsive` | boolean | true | Enable responsive spacing adjustments |

## Accessibility

- Maintains proper document flow for screen readers
- Preserves semantic relationships between stacked elements
- Supports focus management through stacked items
- Does not interfere with keyboard navigation

## Examples

### Form Layout
```jsx
<BlockStack spacing="medium">
  <TextField label="First Name" />
  <TextField label="Last Name" />
  <TextField label="Email Address" />
  <ButtonGroup>
    <Button variant="primary">Submit</Button>
    <Button variant="secondary">Cancel</Button>
  </ButtonGroup>
</BlockStack>
```

### Content Cards
```jsx
<BlockStack spacing="large" alignment="stretch">
  <Card>
    <Text variant="heading">Recent Activity</Text>
    <Text>Your latest updates and notifications</Text>
  </Card>
  <Card>
    <Text variant="heading">Quick Actions</Text>
    <ButtonGroup>
      <Button>New Project</Button>
      <Button>Import Data</Button>
    </ButtonGroup>
  </Card>
</BlockStack>
```

### Centered Layout
```jsx
<BlockStack spacing="large" alignment="center">
  <Icon name="success" size="large" />
  <Text variant="heading">Success!</Text>
  <Text>Your changes have been saved successfully.</Text>
  <Button variant="primary">Continue</Button>
</BlockStack>
```