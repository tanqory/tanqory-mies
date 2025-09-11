# Collapsible

Expandable container for showing and hiding content sections.

## Overview

Collapsible components allow users to expand and collapse content sections, helping organize information hierarchically and reduce visual clutter while maintaining content accessibility.

**When to use:**
- FAQ sections or help content
- Settings or configuration panels
- Content organization with optional details
- Space-constrained layouts

**When not to use:**
- Critical information that must always be visible
- Simple show/hide toggles (use Toggle instead)
- Navigation menus (use appropriate navigation components)

## Usage Guidelines

- **Clear trigger labels**: Make expand/collapse triggers obvious
- **Smooth animations**: Use appropriate timing for expand/collapse
- **Content preservation**: Maintain content state during transitions
- **Keyboard accessibility**: Ensure full keyboard operation support

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `open` | `boolean` | `false` | Controls expanded state |
| `trigger` | `ReactNode` | - | Clickable trigger element |
| `onToggle` | `function` | - | Toggle event handler |
| `disabled` | `boolean` | `false` | Disables expand/collapse functionality |

## Accessibility

- **Keyboard navigation**: Space/Enter keys toggle expansion
- **Screen readers**: State changes announced clearly
- **ARIA attributes**: Uses button role and expanded state
- **Focus management**: Maintains logical focus during state changes

## Examples

### Basic Collapsible
```jsx
<Collapsible 
  trigger="Show Details"
  open={isOpen}
  onToggle={setIsOpen}
>
  <p>Hidden content that can be expanded.</p>
</Collapsible>
```

### FAQ Item
```jsx
<Collapsible 
  trigger="How do I reset my password?"
  open={faqOpen}
  onToggle={setFaqOpen}
>
  <p>You can reset your password by clicking the "Forgot Password" link on the login page.</p>
</Collapsible>
```