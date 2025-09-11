# Bottom Sheet

Modal container that slides up from the bottom edge, providing contextual content and actions.

## Overview

Bottom Sheet offers an intuitive way to present secondary content, forms, or action menus that can be easily dismissed with downward swipe gestures or by tapping outside the content area.

## Usage Guidelines

- **Contextual content**: Use for content that relates to current screen but isn't primary
- **Easy dismissal**: Support swipe-down gesture and backdrop tap for closing
- **Variable height**: Allow content-driven height with optional full-screen expansion
- **Keyboard handling**: Automatically adjust height when keyboard appears

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `snapPoints` | `string[]` | `['25%', '50%', '90%']` | Height positions for sheet |
| `index` | `number` | `0` | Initial snap point index |
| `enablePanDownToClose` | `boolean` | `true` | Allow swipe to dismiss |
| `backdropComponent` | `ReactNode` | - | Custom backdrop component |

## Accessibility

- **Focus trapping**: Keeps focus within sheet when open
- **Announce opening**: Screen readers notify when sheet appears
- **Escape key**: Supports keyboard dismissal for external keyboards
- **Touch targets**: Adequate spacing for interactive elements within sheet

## Examples

### Action Sheet Menu
```jsx
import { View, Text, TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

<BottomSheet
  ref={bottomSheetRef}
  index={-1}
  snapPoints={snapPoints}
  enablePanDownToClose={true}
>
  <View style={styles.contentContainer}>
    <Text style={styles.sheetTitle}>Choose Action</Text>
    <TouchableOpacity 
      style={styles.actionItem}
      onPress={handleEdit}
    >
      <Text style={styles.actionText}>Edit</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={styles.actionItem}
      onPress={handleShare}
    >
      <Text style={styles.actionText}>Share</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={[styles.actionItem, styles.destructive]}
      onPress={handleDelete}
    >
      <Text style={[styles.actionText, styles.destructiveText]}>Delete</Text>
    </TouchableOpacity>
  </View>
</BottomSheet>
```

### Form Bottom Sheet
```jsx
import BottomSheet, { BottomSheetTextInput } from '@gorhom/bottom-sheet';

<BottomSheet
  ref={formSheetRef}
  snapPoints={['60%', '90%']}
  keyboardBehavior="extend"
>
  <View style={styles.formContainer}>
    <Text style={styles.formTitle}>Add Comment</Text>
    <BottomSheetTextInput
      style={styles.textInput}
      placeholder="Write your comment..."
      multiline
      value={comment}
      onChangeText={setComment}
    />
    <TouchableOpacity 
      style={styles.submitButton}
      onPress={handleSubmit}
    >
      <Text style={styles.submitButtonText}>Post Comment</Text>
    </TouchableOpacity>
  </View>
</BottomSheet>
```