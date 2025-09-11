# Snackbar

Brief message component that slides up from the bottom with optional action button for temporary feedback.

## Overview

Snackbar provides lightweight, non-intrusive feedback for user actions with automatic dismissal and optional interactive elements, positioned to avoid interfering with navigation.

## Usage Guidelines

- **Brief messages**: Keep text concise and actionable for quick user comprehension
- **Auto-dismiss timing**: Use appropriate duration based on message importance and length
- **Single instance**: Show only one snackbar at a time to avoid interface clutter
- **Action integration**: Include undo or retry actions when contextually appropriate

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `message` | `string` | - | Text content to display |
| `duration` | `number` | `4000` | Auto-dismiss duration in milliseconds |
| `action` | `ActionConfig` | - | Optional action button configuration |
| `onDismiss` | `function` | - | Called when snackbar is dismissed |

## Accessibility

- **Message announcement**: Screen readers automatically announce snackbar content
- **Action accessibility**: Action buttons have clear labels and touch targets
- **Focus management**: Focus moves to snackbar action when present
- **Dismissal methods**: Support swipe, tap, and timeout dismissal patterns

## Examples

### Basic Information Snackbar
```jsx
import Snackbar from 'react-native-snackbar';

const showSuccessMessage = () => {
  Snackbar.show({
    text: 'Settings saved successfully',
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: '#4CAF50',
    textColor: '#FFFFFF',
  });
};
```

### Snackbar with Action
```jsx
import Snackbar from 'react-native-snackbar';

const showUndoSnackbar = () => {
  Snackbar.show({
    text: 'Message deleted',
    duration: Snackbar.LENGTH_LONG,
    action: {
      text: 'UNDO',
      textColor: '#FFEB3B',
      onPress: () => {
        undoDeleteMessage();
      },
    },
  });
};
```