# Callout Card

A prominent card component designed to highlight important information, announcements, or calls-to-action that require user attention.

## Overview

Callout Cards draw attention to specific content through elevated styling and visual prominence. Use them to showcase key information, important updates, promotional content, or critical system messages that users should notice immediately.

Key features:
- Elevated visual design for prominence
- Multiple styling variants for different purposes
- Optional icons and actions
- Responsive layout behavior

## Usage Guidelines

**When to use:**
- For important announcements or updates
- Promotional content or featured items
- System notifications requiring attention
- Highlighting key features or benefits

**When not to use:**
- For regular content that doesn't need emphasis
- When you already have multiple prominent elements
- For error messages (use Banner instead)

**Best practices:**
- Use sparingly to maintain visual impact
- Include clear calls-to-action when appropriate
- Ensure content is concise and scannable
- Test readability across different themes

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | string | 'default' | Visual style (default, accent, success, warning, info) |
| `title` | string | - | Optional heading text |
| `icon` | string | - | Leading icon identifier |
| `dismissible` | boolean | false | Shows dismiss button |
| `actions` | array | [] | Array of action buttons |
| `onDismiss` | function | - | Callback when dismissed |

## Accessibility

- Uses proper heading hierarchy for titles
- Includes focus management for interactive elements
- Provides appropriate ARIA labels for screen readers
- Supports keyboard navigation for actions
- Maintains sufficient color contrast ratios

## Examples

### Feature Announcement
```jsx
<CalloutCard
  variant="accent"
  title="New Dashboard Available"
  icon="sparkle"
  actions={[
    { label: "Try it now", variant: "primary", onClick: handleTryNow },
    { label: "Learn more", variant: "secondary", href: "/dashboard-guide" }
  ]}
>
  Experience our redesigned dashboard with improved analytics 
  and streamlined navigation.
</CalloutCard>
```

### System Update Notice
```jsx
<CalloutCard
  variant="info"
  title="Scheduled Maintenance"
  icon="calendar"
  dismissible={true}
  onDismiss={handleDismiss}
>
  System maintenance is scheduled for Sunday, March 15th from 
  2:00 AM to 4:00 AM EST. Some features may be temporarily unavailable.
</CalloutCard>
```

### Success Message
```jsx
<CalloutCard
  variant="success"
  title="Setup Complete"
  icon="check-circle"
  actions={[
    { label: "Continue", variant: "primary", onClick: handleContinue }
  ]}
>
  Your account has been successfully configured. You're ready to start using all features.
</CalloutCard>
```