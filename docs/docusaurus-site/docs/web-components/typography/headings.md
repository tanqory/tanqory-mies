# Headings

Hierarchical text elements for content structure and organization.

## Overview

Headings establish information hierarchy and content structure throughout interfaces. They provide semantic meaning for screen readers and visual organization for all users.

**When to use:**
- Content section organization
- Page and section titles
- Hierarchical information structure
- SEO and accessibility structure

**When not to use:**
- Purely decorative text styling
- Emphasizing non-heading content
- Button or link text

## Usage Guidelines

- **Logical hierarchy**: Use heading levels sequentially (h1, h2, h3...)
- **Consistent styling**: Maintain visual consistency at each level
- **Semantic meaning**: Choose levels based on content structure, not appearance
- **Appropriate sizing**: Ensure headings are appropriately sized for their context

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `level` | `1` \| `2` \| `3` \| `4` \| `5` \| `6` | `1` | Heading level and semantic meaning |
| `size` | `small` \| `medium` \| `large` \| `xlarge` | - | Visual size override |
| `color` | `default` \| `muted` \| `accent` | `default` | Text color variant |
| `truncate` | `boolean` | `false` | Truncates long text with ellipsis |

## Accessibility

- **Screen readers**: Proper heading structure enables navigation
- **Keyboard navigation**: Skip links can target heading landmarks
- **Visual hierarchy**: Clear size and weight relationships
- **Color contrast**: Sufficient contrast for all text colors

## Examples

### Page Structure
```jsx
<div>
  <Heading level={1}>Page Title</Heading>
  <Heading level={2}>Main Section</Heading>
  <Heading level={3}>Subsection</Heading>
</div>
```

### Custom Styling
```jsx
<Heading 
  level={2} 
  size="large" 
  color="accent"
>
  Featured Content
</Heading>
```