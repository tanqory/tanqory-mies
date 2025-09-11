# Account Link

Navigation component for user account management and profile access.

## Overview

Account link provides quick access to user-specific features like profile settings, preferences, and account management. Typically displays user name or avatar with dropdown menu.

## Usage Guidelines

- Place in header or navigation area
- Show user identification (name, avatar, or both)
- Provide access to account-related functions
- Support sign out functionality

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `user` | `User` | - | User information object |
| `avatar` | `string` | - | User avatar image URL |
| `showName` | `boolean` | `true` | Display user name |
| `menuItems` | `MenuItem[]` | - | Account menu options |

## Accessibility

- Proper ARIA labels for screen readers
- Keyboard navigation support
- Focus management for dropdown menu
- Clear indication of current user

## Examples

### Basic Account Link
```jsx
<AccountLink 
  user={currentUser}
  avatar="/path/to/avatar.jpg"
/>
```