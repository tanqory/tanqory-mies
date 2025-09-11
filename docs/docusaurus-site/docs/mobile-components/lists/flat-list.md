# Flat List

High-performance scrollable list component optimized for large datasets with lazy loading and memory management.

## Overview

Flat List provides efficient rendering of large data collections through virtualization, loading only visible items while maintaining smooth scrolling performance on mobile devices.

## Usage Guidelines

- **Large datasets**: Use for lists with hundreds or thousands of items
- **Performance optimization**: Implement proper keyExtractor and avoid inline functions
- **Loading states**: Show loading indicators for initial and paginated content
- **Empty states**: Provide meaningful empty list messages and actions

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | `Array` | - | Array of data items to render |
| `renderItem` | `function` | - | Function to render each list item |
| `keyExtractor` | `function` | - | Function to extract unique key for each item |
| `onEndReached` | `function` | - | Called when list reaches end for pagination |

## Accessibility

- **List context**: Screen readers announce list size and current position
- **Item descriptions**: Each list item has descriptive accessibility labels
- **Navigation support**: VoiceOver and TalkBack can navigate through list items
- **Loading announcements**: Pagination and loading states communicated to users

## Examples

### Basic Product List
```jsx
import { FlatList, View, Text, Image } from 'react-native';

const ProductList = ({ products }) => {
  const renderProduct = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderProduct}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};
```

### List with Pagination
```jsx
import { FlatList, ActivityIndicator, View } from 'react-native';

<FlatList
  data={items}
  renderItem={({ item }) => <ItemComponent item={item} />}
  keyExtractor={(item) => item.id}
  onEndReached={loadMoreItems}
  onEndReachedThreshold={0.1}
  ListFooterComponent={
    loading ? (
      <View style={styles.loadingFooter}>
        <ActivityIndicator size="small" />
      </View>
    ) : null
  }
/>
```