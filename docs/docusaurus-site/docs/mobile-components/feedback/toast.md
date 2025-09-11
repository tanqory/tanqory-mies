# Toast

Temporary overlay message component that appears above content for status updates and alerts.

## Overview

Toast delivers brief status messages and alerts without interrupting user workflow, automatically dismissing after a set duration with smooth animation transitions.

## Usage Guidelines

- **Status communication**: Use for success, error, warning, and informational messages
- **Non-blocking**: Messages overlay content without preventing user interaction
- **Appropriate duration**: Match display time to message importance and reading time
- **Visual hierarchy**: Use color and icons to reinforce message type quickly

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `type` | `success` \| `error` \| `warning` \| `info` | `info` | Message type and styling |
| `message` | `string` | - | Toast message content |
| `duration` | `number` | `3000` | Display duration in milliseconds |
| `position` | `top` \| `bottom` \| `center` | `top` | Screen position for toast |

## Accessibility

- **Automatic announcement**: Screen readers announce toast messages immediately
- **Focus preservation**: Focus remains on current element during toast display
- **High contrast**: Toast colors meet accessibility contrast requirements
- **Gesture dismissal**: Support swipe dismissal for motor accessibility

## Examples

### Success Toast
```jsx
import Toast from 'react-native-toast-message';

const showSuccess = () => {
  Toast.show({
    type: 'success',
    text1: 'Success',
    text2: 'Your profile has been updated',
    position: 'top',
    visibilityTime: 3000,
  });
};
```

### Error Toast
```jsx
import Toast from 'react-native-toast-message';

const showError = () => {
  Toast.show({
    type: 'error',
    text1: 'Error',
    text2: 'Unable to connect to server',
    position: 'top',
    autoHide: false,
  });
};
```