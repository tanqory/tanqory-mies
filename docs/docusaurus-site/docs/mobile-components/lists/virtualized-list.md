# Virtualized List

Ultra-high performance list component for extremely large datasets with advanced virtualization and memory optimization.

## Overview

Virtualized List extends standard list performance through advanced windowing techniques, rendering only visible items while maintaining smooth interaction with massive datasets.

## Usage Guidelines

- **Massive datasets**: Use for lists with thousands or tens of thousands of items
- **Fixed item heights**: Works best with consistent item dimensions for optimal performance  
- **Memory constraints**: Essential for memory-limited mobile devices with large data
- **Scroll optimization**: Implement buffer zones to prevent blank spaces during fast scrolling

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | `Array` | - | Large array of data items |
| `itemHeight` | `number` | - | Fixed height of each list item |
| `renderItem` | `function` | - | Item rendering function |
| `windowSize` | `number` | `10` | Number of items to render outside visible area |

## Accessibility

- **Virtual boundaries**: Screen readers understand list boundaries despite virtualization  
- **Item context**: Current position and total count communicated effectively
- **Smooth navigation**: VoiceOver and TalkBack work seamlessly with virtual scrolling
- **Performance balance**: Accessibility features maintained without sacrificing performance

## Examples

### Large Dataset List
```jsx
import { VirtualizedList, View, Text } from 'react-native';

const LargeDataList = ({ items }) => {
  const getItem = (data, index) => data[index];
  
  const renderItem = ({ item, index }) => (
    <View style={styles.listItem}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemIndex}>#{index + 1}</Text>
    </View>
  );

  return (
    <VirtualizedList
      data={items}
      initialNumToRender={20}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      getItemCount={(data) => data.length}
      getItem={getItem}
      maxToRenderPerBatch={50}
      updateCellsBatchingPeriod={100}
    />
  );
};
```

### Optimized Performance List
```jsx
import { VirtualizedList, View } from 'react-native';

<VirtualizedList
  data={hugeDataset}
  renderItem={({ item }) => <OptimizedItem item={item} />}
  keyExtractor={(item) => item.id}
  getItemCount={() => hugeDataset.length}
  getItem={(data, index) => data[index]}
  windowSize={5}
  removeClippedSubviews={true}
/>
```