# Toast

Brief notification messages that appear temporarily to provide feedback.

## Overview

Toasts communicate low-priority information that doesn't require user action. They appear briefly and disappear automatically, allowing users to continue their workflow without interruption.

**When to use:**
- Success confirmations after actions
- Non-critical error messages
- Status updates or notifications
- Undo action confirmations

**When not to use:**
- Critical errors requiring immediate attention
- Complex information requiring action
- Permanent status indicators

## Usage Guidelines

- **Brief duration**: Auto-dismiss after 4-6 seconds typically
- **Clear messaging**: Use concise, actionable language
- **Appropriate positioning**: Place consistently in corner or top of screen
- **Non-intrusive**: Don't block critical interface elements

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `info` \| `success` \| `warning` \| `error` | `info` | Message type and styling |
| `duration` | `number` | `5000` | Auto-dismiss time in milliseconds |
| `dismissible` | `boolean` | `true` | Shows close button |
| `action` | `ReactNode` | - | Optional action button |

## Accessibility

- **Screen readers**: Announced using live regions
- **Keyboard navigation**: Focusable when containing interactive elements
- **High contrast**: Sufficient color contrast for readability
- **Reduced motion**: Respects user animation preferences

## Examples

### Success Message
```jsx
<Toast variant="success">
  File uploaded successfully
</Toast>
```

### With Action
```jsx
<Toast variant="info" action={<Button size="small">Undo</Button>}>
  Item moved to trash
</Toast>
```