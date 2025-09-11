# Section List

Organized list component with section headers for grouped data display and navigation.

## Overview

Section List extends flat list functionality with section headers, enabling organized display of grouped data with efficient virtualization and section-specific styling.

## Usage Guidelines

- **Logical grouping**: Organize data into meaningful sections with clear headers
- **Consistent headers**: Use consistent styling across section headers for visual hierarchy  
- **Sticky headers**: Enable sticky section headers for better navigation context
- **Performance considerations**: Optimize section rendering for smooth scrolling

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `sections` | `Section[]` | - | Array of section objects with data |
| `renderItem` | `function` | - | Function to render each item |
| `renderSectionHeader` | `function` | - | Function to render section headers |
| `stickySectionHeadersEnabled` | `boolean` | `true` | Keep headers visible while scrolling |

## Accessibility

- **Section context**: Screen readers announce section titles and item counts
- **Header navigation**: Section headers are navigable landmarks for assistive technology
- **Grouped content**: Clear relationship between headers and their content items
- **Position awareness**: Users understand their position within sections

## Examples

### Contact List with Sections
```jsx
import { SectionList, Text, View } from 'react-native';

const ContactSectionList = ({ contacts }) => {
  const sections = groupContactsByLetter(contacts);
  
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.contactItem}>
          <Text style={styles.contactName}>{item.name}</Text>
          <Text style={styles.contactPhone}>{item.phone}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{title}</Text>
        </View>
      )}
      stickySectionHeadersEnabled={true}
    />
  );
};
```

### Settings Menu Sections
```jsx
import { SectionList, TouchableOpacity, Text } from 'react-native';

<SectionList
  sections={settingsSections}
  renderItem={({ item }) => (
    <TouchableOpacity 
      style={styles.settingItem}
      onPress={() => handleSettingPress(item)}
    >
      <Text style={styles.settingTitle}>{item.title}</Text>
      <Text style={styles.settingDescription}>{item.description}</Text>
    </TouchableOpacity>
  )}
  renderSectionHeader={({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  )}
/>
```