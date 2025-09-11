# Notification Center

Centralized hub for displaying system notifications and user messages.

## Overview

Notification center manages and displays multiple notifications in a structured interface, allowing users to review and act on system messages.

## Usage Guidelines

- Group notifications by priority or type
- Show most recent notifications first
- Provide clear action buttons when needed
- Support dismissal and batch operations

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `notifications` | `array` | `[]` | List of notification objects |
| `maxVisible` | `number` | `10` | Maximum visible notifications |
| `onDismiss` | `function` | - | Notification dismiss handler |
| `groupBy` | `string` | - | Grouping criteria (type, priority) |

## Accessibility

- ARIA live region for new notifications
- Keyboard navigation through items
- Screen reader announcements
- Focus management for actions

## Examples

### Basic Notification Center
```jsx
<NotificationCenter 
  notifications={[
    { id: 1, type: 'info', message: 'System update completed' },
    { id: 2, type: 'warning', message: 'Maintenance scheduled' }
  ]}
  onDismiss={handleDismiss}
/>
```

### Grouped Notifications
```jsx
<NotificationCenter 
  notifications={notifications}
  groupBy="type"
  maxVisible={5}
/>
```