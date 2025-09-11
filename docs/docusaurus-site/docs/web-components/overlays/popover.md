# Popover

Contextual overlay positioned relative to trigger elements.

## Overview

Popovers display contextual information or actions positioned near their trigger elements. They provide additional functionality without navigating away from the current context.

**When to use:**
- Contextual help or information
- Additional action menus
- Form field assistance
- Secondary content display

**When not to use:**
- Critical information requiring immediate attention
- Primary navigation elements
- Large content blocks

## Usage Guidelines

- **Strategic positioning**: Position near trigger element logically
- **Clear association**: Make trigger relationship obvious
- **Dismissal options**: Provide multiple ways to close
- **Content brevity**: Keep content focused and concise

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `open` | `boolean` | `false` | Controls popover visibility |
| `anchor` | `Element` | - | Element to position relative to |
| `placement` | `top` \| `bottom` \| `left` \| `right` | `bottom` | Popover position |
| `onClose` | `function` | - | Close event handler |

## Accessibility

- **Keyboard navigation**: Escape key closes popover
- **Focus management**: Returns focus to trigger on close
- **Screen readers**: Content announced when opened
- **ARIA attributes**: Uses proper labeling and relationships

## Examples

### Info Popover
```jsx
<Popover 
  open={showInfo}
  anchor={buttonRef.current}
  placement="top"
  onClose={() => setShowInfo(false)}
>
  <p>Additional information about this feature.</p>
</Popover>
```

### Action Menu
```jsx
<Popover 
  open={showMenu}
  anchor={menuTrigger}
  placement="bottom-start"
  onClose={closeMenu}
>
  <MenuList>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Duplicate</MenuItem>
    <MenuItem>Delete</MenuItem>
  </MenuList>
</Popover>
```