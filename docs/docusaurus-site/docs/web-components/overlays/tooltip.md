# Tooltip

Brief informational overlay that appears on hover or focus.

## Overview

Tooltips provide concise, contextual information about interface elements without cluttering the design. They appear on hover or focus and disappear when the trigger loses attention.

**When to use:**
- Brief explanations of UI elements
- Icon or button clarification
- Abbreviated content expansion
- Accessibility enhancements

**When not to use:**
- Essential information (make it visible instead)
- Complex or lengthy content
- Interactive elements within tooltip

## Usage Guidelines

- **Concise content**: Keep text brief and immediately useful
- **Clear positioning**: Position logically relative to trigger
- **Appropriate timing**: Show/hide with reasonable delays
- **Touch consideration**: Provide alternative access on touch devices

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `content` | `string \| ReactNode` | - | Tooltip content |
| `placement` | `top` \| `bottom` \| `left` \| `right` | `top` | Tooltip position |
| `delay` | `number` | `500` | Show delay in milliseconds |
| `disabled` | `boolean` | `false` | Disables tooltip display |

## Accessibility

- **Screen readers**: Content announced when trigger is focused
- **Keyboard access**: Tooltip shows on focus for keyboard users
- **ARIA attributes**: Uses proper labeling and description roles
- **High contrast**: Sufficient contrast for visibility

## Examples

### Basic Tooltip
```jsx
<Tooltip content="Save your current work">
  <Button icon={<SaveIcon />} />
</Tooltip>
```

### Rich Content
```jsx
<Tooltip 
  placement="right"
  content={
    <div>
      <strong>Pro Tip:</strong>
      <p>Use Cmd+S to save quickly</p>
    </div>
  }
>
  <InfoIcon />
</Tooltip>
```