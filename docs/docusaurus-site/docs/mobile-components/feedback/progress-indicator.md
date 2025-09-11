# Progress Indicator

Visual component showing completion status of ongoing tasks with determinate or indeterminate progress.

## Overview

Progress Indicator communicates task completion status through visual progression, helping users understand wait times and providing feedback during lengthy operations.

## Usage Guidelines

- **Clear context**: Accompany with descriptive text explaining what is progressing
- **Appropriate type**: Use determinate for known durations, indeterminate for unknown
- **Smooth animation**: Provide fluid visual updates that feel responsive
- **Cancellation support**: Allow users to cancel long-running operations when appropriate

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `progress` | `number` | `0` | Completion percentage (0-1) |
| `indeterminate` | `boolean` | `false` | Whether progress is unknown |
| `color` | `string` | `#007AFF` | Progress bar color |
| `trackColor` | `string` | `#E5E5E5` | Background track color |

## Accessibility

- **Progress announcements**: Screen readers communicate progress updates
- **Status description**: Clear labeling of what task is progressing  
- **Time estimates**: Provide estimated completion time when available
- **Alternative indicators**: Audio or haptic feedback for progress updates

## Examples

### File Upload Progress
```jsx
import { View, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';

<View style={styles.uploadContainer}>
  <Text style={styles.progressLabel}>
    Uploading... {Math.round(uploadProgress * 100)}%
  </Text>
  <ProgressBar 
    progress={uploadProgress}
    color="#4CAF50"
    style={styles.progressBar}
  />
  <Text style={styles.progressDetails}>
    {uploadedSize} / {totalSize} MB
  </Text>
</View>
```

### Loading Spinner
```jsx
import { View, Text, ActivityIndicator } from 'react-native';

<View style={styles.loadingContainer}>
  <ActivityIndicator 
    size="large" 
    color="#007AFF"
    accessibilityLabel="Loading content" 
  />
  <Text style={styles.loadingText}>Loading your data...</Text>
</View>
```