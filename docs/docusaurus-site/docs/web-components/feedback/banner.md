# Banner

Full-width message area for important announcements and system status.

## Overview

Banners communicate page-level or system-wide information that affects the user's current workflow or understanding of the system state.

## Usage Guidelines

- Use for system-wide announcements
- Place at top of page or relevant section
- Include clear action if user response needed
- Dismiss functionality when appropriate

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `status` | `info` \| `success` \| `warning` \| `error` | `info` | Banner importance level |
| `dismissible` | `boolean` | `false` | Allow user to close banner |
| `onDismiss` | `function` | - | Dismiss handler function |

## Accessibility

- Appropriate ARIA roles for announcements
- Keyboard navigation for actions
- Sufficient color contrast
- Screen reader compatible messaging

## Examples

### System Announcement
```jsx
<Banner status="info">
  Maintenance scheduled for Sunday 2AM-4AM EST. Some features may be unavailable.
</Banner>
```

### Error Alert
```jsx
<Banner status="error" dismissible onDismiss={handleDismiss}>
  Connection lost. Changes may not be saved.
</Banner>
```