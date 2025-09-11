# Data Table

Structured data display component with sorting, filtering, and row selection optimized for mobile screens.

## Overview

Data Table presents tabular data with mobile-responsive design, horizontal scrolling support, and touch-friendly interactions for managing structured information.

## Usage Guidelines

- **Mobile optimization**: Use horizontal scrolling for tables wider than screen
- **Essential columns**: Prioritize most important columns for narrow screens
- **Touch interactions**: Adequate spacing for touch selection and sorting
- **Performance considerations**: Virtualize large tables to maintain smooth scrolling

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | `Array` | - | Array of row data objects |
| `columns` | `Column[]` | - | Column configuration array |
| `sortable` | `boolean` | `false` | Enable column sorting |
| `selectable` | `boolean` | `false` | Enable row selection |

## Accessibility

- **Table structure**: Screen readers understand table headers and data relationships
- **Column headers**: Clear column descriptions and sorting state announcements
- **Row selection**: Selection state clearly communicated to assistive technology
- **Navigation support**: Table navigation with VoiceOver and TalkBack gestures

## Examples

### Basic Data Table
```jsx
import { ScrollView, View, Text } from 'react-native';

const DataTable = ({ data, columns }) => {
  return (
    <ScrollView horizontal style={styles.tableContainer}>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          {columns.map((column) => (
            <Text key={column.key} style={styles.headerCell}>
              {column.title}
            </Text>
          ))}
        </View>
        {data.map((row, index) => (
          <View key={index} style={styles.tableRow}>
            {columns.map((column) => (
              <Text key={column.key} style={styles.dataCell}>
                {row[column.key]}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
```

### Sortable Table
```jsx
import { FlatList, TouchableOpacity, Text, View } from 'react-native';

const SortableTable = ({ data, columns, onSort }) => {
  const renderHeader = () => (
    <View style={styles.headerRow}>
      {columns.map((column) => (
        <TouchableOpacity
          key={column.key}
          style={styles.headerCell}
          onPress={() => onSort(column.key)}
          accessibilityRole="button"
          accessibilityLabel={`Sort by ${column.title}`}
        >
          <Text style={styles.headerText}>{column.title}</Text>
          <Icon name="arrow-drop-down" size={16} />
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <FlatList
      data={data}
      ListHeaderComponent={renderHeader}
      renderItem={({ item }) => (
        <View style={styles.dataRow}>
          {columns.map((column) => (
            <Text key={column.key} style={styles.dataCell}>
              {item[column.key]}
            </Text>
          ))}
        </View>
      )}
      stickyHeaderIndices={[0]}
    />
  );
};
```