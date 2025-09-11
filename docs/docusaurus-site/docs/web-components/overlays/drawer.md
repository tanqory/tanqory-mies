# Drawer

Sliding panel that appears from the edge of the screen for secondary content.

## Overview

Drawers provide temporary access to additional content or navigation without leaving the current context. They slide in from screen edges and can be dismissed easily.

**When to use:**
- Secondary navigation menus
- Filter or settings panels
- Shopping carts or notifications
- Mobile navigation alternatives

**When not to use:**
- Primary content display
- Critical user actions
- Long-form content reading

## Usage Guidelines

- **Clear purpose**: Make drawer content purpose obvious
- **Easy dismissal**: Provide multiple ways to close drawer
- **Backdrop interaction**: Handle clicks outside appropriately
- **Performance**: Animate smoothly without blocking

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `open` | `boolean` | `false` | Controls drawer visibility |
| `side` | `left` \| `right` \| `top` \| `bottom` | `left` | Side drawer appears from |
| `onClose` | `function` | - | Close event handler |
| `backdrop` | `boolean` | `true` | Shows backdrop overlay |

## Accessibility

- **Focus management**: Traps focus within drawer when open
- **Keyboard navigation**: Escape key closes drawer
- **Screen readers**: Drawer state changes announced
- **ARIA attributes**: Uses dialog role and labeling

## Examples

### Side Drawer
```jsx
<Drawer 
  open={isOpen}
  side="left"
  onClose={() => setIsOpen(false)}
>
  <Navigation items={navItems} />
</Drawer>
```

### Settings Panel
```jsx
<Drawer 
  open={showSettings}
  side="right"
  onClose={closeSettings}
  backdrop={false}
>
  <SettingsForm />
</Drawer>
```