# Text Area

Multi-line text input component for longer content entry with auto-resize capabilities.

## Overview

Text Area provides expansive text input for comments, descriptions, and long-form content with mobile-optimized typing experience and automatic height adjustment.

## Usage Guidelines

- **Dynamic sizing**: Auto-expand height as user types to show all content
- **Character limits**: Display character counts for fields with restrictions
- **Keyboard handling**: Manage keyboard appearance and scrolling behavior
- **Touch scrolling**: Enable content scrolling when text exceeds visible area

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | - | Current text content |
| `onChangeText` | `function` | - | Text change handler |
| `placeholder` | `string` | - | Hint text when empty |
| `maxLength` | `number` | - | Maximum character limit |

## Accessibility

- **Character count**: Announce remaining characters to screen readers
- **Field labels**: Clear description of text area purpose
- **Scrollable content**: Indicates when content can be scrolled
- **Text selection**: Supports text selection and editing gestures

## Examples

### Basic Text Area
```jsx
import { TextInput, View, Text } from 'react-native';

<View style={styles.textAreaContainer}>
  <Text style={styles.label}>Description</Text>
  <TextInput
    style={styles.textArea}
    value={description}
    onChangeText={setDescription}
    placeholder="Enter detailed description..."
    multiline={true}
    numberOfLines={4}
    textAlignVertical="top"
    accessibilityLabel="Description text area"
  />
</View>
```

### Text Area with Character Count
```jsx
import { TextInput, View, Text } from 'react-native';

<View style={styles.textAreaContainer}>
  <Text style={styles.label}>Comment</Text>
  <TextInput
    style={styles.textArea}
    value={comment}
    onChangeText={setComment}
    placeholder="Share your thoughts..."
    multiline={true}
    maxLength={280}
    accessibilityLabel="Comment text area"
  />
  <Text style={styles.characterCount}>
    {comment.length}/280 characters
  </Text>
</View>
```