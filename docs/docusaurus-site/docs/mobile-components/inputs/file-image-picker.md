# File Image Picker

Media selection component for choosing images and files from device storage or camera.

## Overview

File Image Picker provides access to device camera and photo library with permission handling, image optimization, and multiple selection support for media-rich mobile applications.

## Usage Guidelines

- **Permission management**: Handle camera and storage permissions gracefully
- **Multiple sources**: Offer both camera capture and library selection options
- **Image optimization**: Resize and compress images for optimal app performance
- **Error handling**: Provide clear feedback for permission denials or failures

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `mediaType` | `photo` \| `video` \| `mixed` | `photo` | Type of media to select |
| `allowsEditing` | `boolean` | `false` | Enable built-in cropping/editing |
| `quality` | `number` | `1` | Image compression quality (0-1) |
| `multiple` | `boolean` | `false` | Allow multiple selection |

## Accessibility

- **Action descriptions**: Clear labels for camera and library options
- **Selection feedback**: Confirm successful image/file selection
- **Error communication**: Accessible error messages for permission issues
- **Preview support**: Image previews work with screen readers

## Examples

### Basic Image Picker
```jsx
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { View, TouchableOpacity, Text, Image } from 'react-native';

const selectImage = () => {
  const options = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 2000,
    maxWidth: 2000,
  };

  launchImageLibrary(options, (response) => {
    if (response.assets) {
      setSelectedImage(response.assets[0]);
    }
  });
};

<View style={styles.pickerContainer}>
  <TouchableOpacity 
    style={styles.selectButton}
    onPress={selectImage}
    accessibilityLabel="Select image from library"
  >
    <Text style={styles.buttonText}>Choose Photo</Text>
  </TouchableOpacity>
  {selectedImage && (
    <Image 
      source={{ uri: selectedImage.uri }} 
      style={styles.imagePreview}
      accessibilityLabel="Selected image preview"
    />
  )}
</View>
```

### Camera and Library Options
```jsx
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import ActionSheet from 'react-native-action-sheet';

const showImagePicker = () => {
  const options = ['Take Photo', 'Choose from Library', 'Cancel'];
  
  ActionSheet.showActionSheetWithOptions({
    options,
    cancelButtonIndex: 2,
  }, (buttonIndex) => {
    if (buttonIndex === 0) {
      launchCamera({ mediaType: 'photo' }, handleImageResponse);
    } else if (buttonIndex === 1) {
      launchImageLibrary({ mediaType: 'photo' }, handleImageResponse);
    }
  });
};

<TouchableOpacity 
  style={styles.mediaButton}
  onPress={showImagePicker}
>
  <Text>Add Photo</Text>
</TouchableOpacity>
```