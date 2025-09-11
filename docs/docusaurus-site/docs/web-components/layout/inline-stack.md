# Inline Stack

A horizontal layout component that arranges elements in a single row with consistent spacing and alignment options.

## Overview

Inline Stack organizes elements horizontally with predictable spacing and alignment. It's ideal for creating navigation bars, button groups, and any horizontal arrangements of related elements.

## Usage Guidelines

**When to use:**
- For horizontal arrangements of buttons or links
- Creating navigation menus
- Organizing toolbar items
- Building breadcrumb navigation

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `spacing` | string | 'medium' | Space between items |
| `alignment` | string | 'start' | Vertical alignment |
| `distribution` | string | 'start' | Horizontal distribution |
| `wrap` | boolean | true | Allow items to wrap to new lines |

## Examples

### Navigation Menu
```jsx
<InlineStack spacing="large" alignment="center">
  <Link>Home</Link>
  <Link>Products</Link>
  <Link>About</Link>
  <Link>Contact</Link>
</InlineStack>
```

### Button Toolbar
```jsx
<InlineStack spacing="small" distribution="end">
  <Button variant="secondary">Cancel</Button>
  <Button variant="primary">Save</Button>
</InlineStack>
```