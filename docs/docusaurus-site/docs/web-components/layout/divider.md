# Divider

A subtle visual element that creates separation between content sections while maintaining clean, minimal aesthetics.

## Overview

Divider provides visual separation between content areas without creating heavy visual barriers. It helps organize information into digestible sections while maintaining the clean, minimal aesthetic of Tanqory Mies. Use dividers to create logical content groupings and improve readability.

## Usage Guidelines

**When to use:**
- Separating different sections of content
- Creating visual breaks in long forms
- Organizing menu items or lists
- Dividing dashboard sections

**Best practices:**
- Use consistently throughout your interface
- Avoid overuse that creates visual clutter
- Consider spacing around dividers
- Match divider style to content hierarchy

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `orientation` | string | 'horizontal' | Direction (horizontal, vertical) |
| `spacing` | string | 'medium' | Space around divider (small, medium, large) |
| `variant` | string | 'default' | Visual style (default, subtle, strong) |

## Accessibility

- Uses proper ARIA separator role
- Does not interfere with screen reader navigation
- Maintains content flow and relationships

## Examples

### Section Separator
```jsx
<BlockStack spacing="large">
  <Box>
    <Text variant="heading">User Information</Text>
    <Text>Personal details and account settings.</Text>
  </Box>
  
  <Divider />
  
  <Box>
    <Text variant="heading">Preferences</Text>
    <Text>Notification and privacy settings.</Text>
  </Box>
</BlockStack>
```

### Vertical Menu Divider
```jsx
<InlineStack spacing="medium">
  <Link>Dashboard</Link>
  <Divider orientation="vertical" />
  <Link>Projects</Link>
  <Divider orientation="vertical" />
  <Link>Settings</Link>
</InlineStack>
```