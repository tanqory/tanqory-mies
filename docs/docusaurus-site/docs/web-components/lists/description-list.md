# Description List

Structured list displaying term-description pairs with clear hierarchy.

## Overview

Description lists present key-value pairs in a structured format, making them ideal for displaying metadata, definitions, or attribute-value relationships with clear visual hierarchy.

**When to use:**
- Metadata or property displays
- Definition lists or glossaries
- Profile or detail information
- Configuration or settings lists

**When not to use:**
- Simple bullet-point lists (use List instead)
- Interactive selection lists (use Option List instead)
- Tabular data (use Data Table instead)

## Usage Guidelines

- **Clear hierarchy**: Distinguish terms from descriptions visually
- **Consistent formatting**: Maintain uniform spacing and alignment
- **Scannable layout**: Make terms easy to locate quickly
- **Logical grouping**: Group related term-description pairs

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | `Array<DescriptionItem>` | `[]` | Term-description pairs |
| `layout` | `vertical` \| `horizontal` | `vertical` | Layout orientation |
| `compact` | `boolean` | `false` | Reduces spacing between items |
| `dividers` | `boolean` | `false` | Shows divider lines |

## Accessibility

- **Semantic markup**: Uses proper HTML description list elements
- **Screen readers**: Terms and descriptions properly associated
- **Keyboard navigation**: Logical focus flow through interactive elements
- **Clear structure**: Hierarchy communicated to assistive technology

## Examples

### Basic Description List
```jsx
<DescriptionList 
  items={[
    { term: "Name", description: "John Smith" },
    { term: "Email", description: "john@example.com" },
    { term: "Location", description: "San Francisco, CA" }
  ]}
/>
```

### Horizontal Layout
```jsx
<DescriptionList 
  layout="horizontal"
  items={profileData}
  dividers
/>
```