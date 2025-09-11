# Pull to Refresh

Gesture-triggered refresh mechanism allowing users to update content by pulling down from the top of scrollable areas.

## Overview

Pull to Refresh provides intuitive content refresh through natural touch gestures, with visual feedback and smooth animation that follows platform conventions.

## Usage Guidelines

- **Content updates**: Use for refreshing dynamic content like feeds, lists, or dashboards
- **Visual feedback**: Provide clear loading indicator and completion confirmation
- **Appropriate timing**: Implement reasonable refresh intervals to avoid server overload
- **Platform consistency**: Follow iOS and Android pull-to-refresh patterns

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `refreshing` | `boolean` | `false` | Current refresh state |
| `onRefresh` | `function` | - | Called when refresh is triggered |
| `colors` | `string[]` | `['#007AFF']` | Refresh indicator colors |
| `tintColor` | `string` | `#007AFF` | iOS refresh indicator color |

## Accessibility

- **Action announcement**: Screen readers communicate refresh action and status
- **Alternative access**: Provide button-based refresh option for accessibility
- **Progress indication**: Clear feedback about refresh progress and completion
- **Error handling**: Communicate refresh failures accessibly

## Examples

### Basic Pull to Refresh
```jsx
import { ScrollView, RefreshControl } from 'react-native';

<ScrollView
  contentContainerStyle={styles.scrollView}
  refreshControl={
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      colors={['#007AFF']}
      tintColor="#007AFF"
    />
  }
>
  {/* Content here */}
</ScrollView>
```

### FlatList with Pull to Refresh
```jsx
import { FlatList, RefreshControl } from 'react-native';

<FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  refreshControl={
    <RefreshControl
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      colors={['#4CAF50', '#2196F3']}
    />
  }
/>
```