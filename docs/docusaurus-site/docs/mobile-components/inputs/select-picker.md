# Select Picker

Native dropdown selector optimized for mobile touch interaction with platform-specific styling.

## Overview

Select Picker provides native selection experience using iOS wheel picker and Android dropdown, ensuring familiarity for users on each platform while maintaining consistent API.

## Usage Guidelines

- **Platform optimization**: Uses native iOS UIPickerView and Android Spinner
- **Clear options**: Provide concise, descriptive option labels
- **Default selections**: Include helpful placeholder or default values
- **Scrollable lists**: Handle long option lists with smooth scrolling

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | `PickerItem[]` | - | Array of selectable options |
| `selectedValue` | `string` | - | Currently selected value |
| `onValueChange` | `function` | - | Selection change handler |
| `placeholder` | `string` | - | Placeholder text when nothing selected |

## Accessibility

- **Option announcements**: Screen readers announce all available options
- **Selection feedback**: Current selection clearly communicated
- **Navigation support**: Easy option navigation with assistive technology
- **Label association**: Clear relationship between picker and label

## Examples

### Country Selection
```jsx
import { Picker } from '@react-native-picker/picker';
import { View, Text } from 'react-native';

<View style={styles.pickerContainer}>
  <Text style={styles.label}>Country</Text>
  <Picker
    selectedValue={selectedCountry}
    style={styles.picker}
    onValueChange={(itemValue) => setSelectedCountry(itemValue)}
    accessibilityLabel="Country selection"
  >
    <Picker.Item label="Select country..." value="" />
    <Picker.Item label="United States" value="us" />
    <Picker.Item label="Canada" value="ca" />
    <Picker.Item label="United Kingdom" value="uk" />
  </Picker>
</View>
```

### Category Filter
```jsx
import { Picker } from '@react-native-picker/picker';

<Picker
  selectedValue={category}
  style={styles.categoryPicker}
  onValueChange={setCategory}
  mode="dropdown"
>
  <Picker.Item label="All Categories" value="all" />
  {categories.map((cat) => (
    <Picker.Item 
      key={cat.id} 
      label={cat.name} 
      value={cat.id} 
    />
  ))}
</Picker>
```