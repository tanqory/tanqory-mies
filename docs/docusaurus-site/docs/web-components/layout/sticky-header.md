# Sticky Header

A header component that remains fixed at the top of the viewport during scroll, providing persistent access to navigation and key actions.

## Overview

Sticky Header maintains important navigation and actions at the top of the screen as users scroll through content. It provides consistent access to key functionality while preserving screen space through smart show/hide behavior.

## Usage Guidelines

**When to use:**
- For primary navigation that should always be accessible
- When header contains critical actions or search
- On long pages where navigation context is important
- For application headers with key functionality

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior` | string | 'sticky' | Scroll behavior (sticky, auto-hide, always-visible) |
| `threshold` | number | 50 | Scroll threshold for auto-hide |
| `shadow` | boolean | true | Show shadow when scrolled |
| `background` | string | 'default' | Background treatment |

## Examples

### Navigation Header
```jsx
<StickyHeader behavior="auto-hide">
  <InlineStack distribution="space-between">
    <Logo />
    <Navigation>
      <Link>Dashboard</Link>
      <Link>Projects</Link>
      <Link>Settings</Link>
    </Navigation>
    <AccountLink />
  </InlineStack>
</StickyHeader>
```