# Tag

Compact label for categorization, selection, or metadata display.

## Overview

Tags provide a compact way to display categories, attributes, or metadata. They can be static labels or interactive elements that allow addition, removal, or selection actions.

**When to use:**
- Content categorization and labeling
- Filter or selection indicators
- Skill or attribute lists
- Status or state indicators

**When not to use:**
- Primary navigation elements
- Long text content
- Complex interactive controls

## Usage Guidelines

- **Concise labeling**: Keep tag text short and descriptive
- **Consistent styling**: Maintain visual consistency across tag types
- **Clear actions**: Make interactive behaviors obvious
- **Logical grouping**: Group related tags together when possible

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | - | Tag display text |
| `variant` | `default` \| `primary` \| `success` \| `warning` \| `error` | `default` | Visual style |
| `removable` | `boolean` | `false` | Shows remove button |
| `onClick` | `function` | - | Click handler |

## Accessibility

- **Keyboard interaction**: Focusable and keyboard accessible
- **Screen readers**: Tag purpose and state clearly announced
- **Color independence**: Meaning conveyed beyond color alone
- **Focus indication**: Clear focus states for interactive tags

## Examples

### Basic Tags
```jsx
<TagGroup>
  <Tag label="JavaScript" />
  <Tag label="React" />
  <Tag label="TypeScript" />
</TagGroup>
```

### Removable Tags
```jsx
<TagGroup>
  <Tag 
    label="Design" 
    removable 
    onRemove={() => removeTag('design')} 
  />
  <Tag 
    label="Development" 
    removable 
    onRemove={() => removeTag('development')} 
  />
</TagGroup>
```