# Date Time Picker

Native date and time selection component with platform-specific UI and localization support.

## Overview

Date Time Picker provides familiar date and time selection using native iOS and Android picker interfaces, ensuring consistent user experience across platforms.

## Usage Guidelines

- **Native experience**: Uses platform-specific picker UI (iOS wheels, Android dialogs)
- **Localization support**: Automatically adapts to user's locale and time format
- **Mode flexibility**: Support date-only, time-only, or combined datetime selection
- **Range constraints**: Set minimum and maximum selectable dates when appropriate

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `Date` | `new Date()` | Currently selected date/time |
| `onChange` | `function` | - | Date/time change handler |
| `mode` | `date` \| `time` \| `datetime` | `date` | Picker mode |
| `minimumDate` | `Date` | - | Earliest selectable date |

## Accessibility

- **Value announcements**: Screen readers communicate selected date and time
- **Navigation support**: Easy date/time adjustment with assistive technology
- **Format clarity**: Date formats respect user's accessibility preferences
- **Context information**: Clear labels for date/time picker purpose

## Examples

### Date Selection
```jsx
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, TouchableOpacity } from 'react-native';

<View style={styles.dateContainer}>
  <Text style={styles.label}>Select Date</Text>
  <TouchableOpacity 
    style={styles.dateButton}
    onPress={() => setShowDatePicker(true)}
  >
    <Text style={styles.dateText}>
      {selectedDate.toLocaleDateString()}
    </Text>
  </TouchableOpacity>
  {showDatePicker && (
    <DateTimePicker
      value={selectedDate}
      mode="date"
      display="default"
      onChange={handleDateChange}
      minimumDate={new Date()}
    />
  )}
</View>
```

### Time Picker
```jsx
import DateTimePicker from '@react-native-community/datetimepicker';

<View style={styles.timeContainer}>
  <Text style={styles.label}>Appointment Time</Text>
  <DateTimePicker
    value={appointmentTime}
    mode="time"
    is24Hour={false}
    display="spinner"
    onChange={setAppointmentTime}
    style={styles.timePicker}
  />
</View>
```