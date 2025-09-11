# Grid

Flexible layout component for arranging content in responsive columns and rows on mobile screens.

## Overview

Grid provides a consistent system for organizing content in columns that automatically adjust to screen size and orientation, ensuring optimal use of mobile screen real estate.

## Usage Guidelines

- **Responsive breakpoints**: Automatically adjusts columns based on screen width
- **Touch-friendly spacing**: Adequate gaps between grid items for fat finger navigation
- **Content prioritization**: Place important content in prominent grid positions
- **Performance optimization**: Use with FlatList for large datasets to maintain scroll performance

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `numColumns` | `number` | `2` | Number of columns to display |
| `spacing` | `number` | `16` | Gap between grid items |
| `data` | `Array` | - | Array of items to display |
| `renderItem` | `function` | - | Function to render each grid item |

## Accessibility

- **Focus order**: Maintains logical tab order across grid items
- **Screen reader navigation**: Clear item descriptions and position context
- **High contrast support**: Grid lines and spacing respect system settings
- **Touch targets**: Ensures minimum 44pt touch areas for interactive items

## Examples

### Photo Grid
```jsx
import { FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const numColumns = 2;
const itemSize = (screenWidth - 48) / numColumns; // Account for margins

<FlatList
  data={photos}
  numColumns={numColumns}
  keyExtractor={(item) => item.id}
  contentContainerStyle={styles.gridContainer}
  renderItem={({ item }) => (
    <TouchableOpacity 
      style={[styles.gridItem, { width: itemSize, height: itemSize }]}
      onPress={() => openPhoto(item)}
    >
      <Image 
        source={{ uri: item.thumbnail }} 
        style={styles.gridImage}
        accessibilityLabel={item.description}
      />
    </TouchableOpacity>
  )}
/>
```

### Product Catalog Grid
```jsx
import { FlatList, View, Text, Image } from 'react-native';

<FlatList
  data={products}
  numColumns={2}
  keyExtractor={(item) => item.id}
  columnWrapperStyle={styles.gridRow}
  renderItem={({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
    </View>
  )}
/>
```