# Box

A foundational layout component that provides spacing, padding, borders, and basic visual styling for containing other elements.

## Overview

Box is the fundamental building block for creating layouts in Tanqory Mies. It provides consistent spacing, visual styling, and responsive behavior. Use Box to create containers, apply spacing, add borders, or establish visual hierarchy through subtle styling variations.

Key features:
- Flexible padding and margin control
- Border and background styling options
- Responsive spacing behavior
- Semantic HTML output with proper accessibility

## Usage Guidelines

**When to use:**
- As a container for other components
- To add consistent spacing around content
- Creating visual separation between sections
- Building custom layout structures

**Best practices:**
- Use semantic HTML elements when appropriate (section, article, aside)
- Apply consistent spacing patterns from the design system
- Consider responsive behavior across screen sizes
- Layer boxes thoughtfully to create visual hierarchy

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `padding` | string/object | 'none' | Internal spacing (none, small, medium, large) |
| `margin` | string/object | 'none' | External spacing (none, small, medium, large) |
| `border` | string | 'none' | Border style (none, light, medium, heavy) |
| `background` | string | 'none' | Background treatment (none, subtle, card, accent) |
| `as` | string | 'div' | HTML element type (div, section, article, aside) |
| `maxWidth` | string | - | Maximum width constraint |

## Accessibility

- Uses semantic HTML elements when specified
- Maintains proper document structure
- Preserves focus order and keyboard navigation
- Supports screen reader navigation patterns

## Examples

### Content Container
```jsx
<Box 
  padding="large" 
  background="card"
  border="light"
>
  <Text variant="heading">Section Title</Text>
  <Text>Content goes here with proper spacing and visual containment.</Text>
</Box>
```

### Responsive Spacing
```jsx
<Box 
  padding={{
    mobile: 'medium',
    tablet: 'large',
    desktop: 'extra-large'
  }}
  margin="medium"
>
  <ComponentContent />
</Box>
```

### Semantic Layout
```jsx
<Box 
  as="section"
  padding="large"
  maxWidth="1200px"
  background="subtle"
>
  <Box as="header" margin={{ bottom: 'large' }}>
    <Text variant="display">Page Title</Text>
  </Box>
  <Box as="main">
    <MainContent />
  </Box>
</Box>
```