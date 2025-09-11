# Action List

Vertical list of clickable items with icons and optional descriptions.

## Overview

Action lists present a series of related actions or navigation options in a clean, scannable format with consistent interaction patterns.

## Usage Guidelines

- Group related actions together
- Use consistent iconography
- Keep action labels concise and clear
- Provide keyboard navigation support

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | `array` | `[]` | List of action items |
| `dividers` | `boolean` | `false` | Show dividers between items |
| `size` | `compact` \| `default` | `default` | Item spacing |

## Accessibility

- Proper list semantics (ul/li)
- Keyboard navigation support
- Focus indicators for all items
- Screen reader friendly labels

## Examples

### Basic Action List
```jsx
<ActionList items={[
  { label: 'Edit profile', icon: 'edit', onClick: editProfile },
  { label: 'Change password', icon: 'lock', onClick: changePassword },
  { label: 'Delete account', icon: 'trash', onClick: deleteAccount, destructive: true }
]} />
```

### Navigation Menu
```jsx
<ActionList 
  dividers
  items={[
    { label: 'Dashboard', icon: 'home', href: '/dashboard' },
    { label: 'Settings', icon: 'settings', href: '/settings' },
    { label: 'Help', icon: 'help', href: '/help' }
  ]} 
/>
```