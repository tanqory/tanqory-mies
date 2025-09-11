# Sidebar

Collapsible navigation panel for primary application navigation.

## Overview

Sidebars provide persistent navigation that can expand or collapse based on screen size and user preference. They organize navigation items hierarchically and maintain state.

**When to use:**
- Primary application navigation
- Multi-level menu structures
- Admin or dashboard interfaces
- Document or content organization

**When not to use:**
- Simple linear navigation
- Temporary navigation overlays
- Single-level menu systems

## Usage Guidelines

- **Clear hierarchy**: Organize items in logical groups
- **Responsive behavior**: Adapt to different screen sizes
- **State persistence**: Remember collapsed/expanded state
- **Keyboard navigation**: Support full keyboard accessibility

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `collapsed` | `boolean` | `false` | Sidebar collapsed state |
| `items` | `Array<NavigationItem>` | `[]` | Navigation menu items |
| `onToggle` | `function` | - | Collapse toggle handler |
| `width` | `number` | `280` | Sidebar width in pixels |

## Accessibility

- **Keyboard navigation**: Full navigation via keyboard
- **Screen readers**: Navigation structure clearly announced
- **Focus management**: Maintains focus during state changes
- **Skip links**: Provides navigation shortcuts

## Examples

### Basic Sidebar
```jsx
<Sidebar 
  items={navigationItems}
  collapsed={isCollapsed}
  onToggle={toggleSidebar}
/>
```

### Responsive Sidebar
```jsx
<Sidebar 
  items={menuItems}
  collapsed={isMobile ? true : collapsed}
  overlay={isMobile}
  onToggle={handleToggle}
/>
```