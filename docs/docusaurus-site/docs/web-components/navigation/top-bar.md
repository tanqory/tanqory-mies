# Top Bar

Primary navigation header with branding and main navigation links.

## Overview

Top bars provide persistent navigation at the top of applications with branding, main navigation links, and user actions. They establish site hierarchy and maintain consistent navigation.

**When to use:**
- Application header navigation
- Site branding and identity
- Primary navigation menus
- User account controls

**When not to use:**
- Content-specific navigation
- Temporary navigation overlays
- Footer navigation

## Usage Guidelines

- **Brand prominence**: Display branding clearly and consistently
- **Logical organization**: Group related navigation items
- **Responsive design**: Adapt to different screen sizes appropriately
- **User context**: Show relevant user information and actions

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `brand` | `ReactNode` | - | Brand logo or text content |
| `navigation` | `Array<NavigationItem>` | `[]` | Main navigation items |
| `actions` | `Array<ActionItem>` | `[]` | User action buttons |
| `fixed` | `boolean` | `false` | Fixes position at top of viewport |

## Accessibility

- **Landmark navigation**: Uses navigation role for screen readers
- **Keyboard navigation**: Full keyboard support for all controls
- **Skip links**: Provides shortcuts to main content
- **Focus management**: Maintains logical focus order

## Examples

### Basic Top Bar
```jsx
<TopBar 
  brand={<Logo />}
  navigation={[
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Projects', href: '/projects' },
    { label: 'Settings', href: '/settings' }
  ]}
  actions={[
    { label: 'Search', icon: <SearchIcon /> },
    { label: 'Profile', component: <UserMenu /> }
  ]}
/>
```

### Mobile-Responsive
```jsx
<TopBar 
  brand={<AppLogo />}
  navigation={mainNavigation}
  actions={userActions}
  mobileMenu={<MobileMenu items={mainNavigation} />}
  fixed
/>
```