# Modal

Full-screen overlay component for focused interactions and important content display.

## Overview

Modal provides a focused interface layer that blocks background interaction, perfect for critical actions, forms, or detailed content that requires user attention.

## Usage Guidelines

- **Focus management**: Trap focus within modal content and return focus when dismissed
- **Clear dismissal**: Provide obvious close buttons and support swipe-to-dismiss gestures
- **Content hierarchy**: Use modals for important content that requires immediate attention
- **Background handling**: Dim or blur background content to emphasize modal importance

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `visible` | `boolean` | `false` | Modal visibility state |
| `onRequestClose` | `function` | - | Called when modal should close |
| `animationType` | `slide` \| `fade` \| `none` | `slide` | Animation style for modal |
| `transparent` | `boolean` | `false` | Whether background is transparent |

## Accessibility

- **Focus trapping**: Screen readers stay within modal content when open
- **Announce opening**: Modal opening communicated to assistive technology  
- **Close alternatives**: Multiple ways to close modal for different accessibility needs
- **Content hierarchy**: Modal content properly structured with headings and labels

## Examples

### Basic Modal
```jsx
import { Modal, View, Text, TouchableOpacity } from 'react-native';

const BasicModal = ({ visible, onClose, children }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity 
            style={styles.closeButton}
            onPress={onClose}
            accessibilityLabel="Close modal"
            accessibilityRole="button"
          >
            <Icon name="close" size={24} />
          </TouchableOpacity>
          {children}
        </View>
      </View>
    </Modal>
  );
};
```

### Confirmation Modal
```jsx
import { Modal, View, Text, TouchableOpacity } from 'react-native';

const ConfirmationModal = ({ visible, title, message, onConfirm, onCancel }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.confirmationOverlay}>
        <View style={styles.confirmationModal}>
          <Text style={styles.confirmationTitle}>{title}</Text>
          <Text style={styles.confirmationMessage}>{message}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.cancelButton}
              onPress={onCancel}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.confirmButton}
              onPress={onConfirm}
            >
              <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
```