# Map View

Interactive map component with location services, markers, and custom overlays for geographic data visualization.

## Overview

Map View integrates native mapping capabilities with custom markers, geolocation services, and interactive overlays optimized for mobile touch interactions.

## Usage Guidelines

- **Location permissions**: Handle location access permissions gracefully with clear explanations
- **Performance optimization**: Use clustering for large numbers of markers
- **User interaction**: Support pinch-to-zoom, pan, and marker tap gestures
- **Offline support**: Provide fallback when map services are unavailable

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `region` | `Region` | - | Initial map region to display |
| `markers` | `Marker[]` | `[]` | Array of map markers |
| `showsUserLocation` | `boolean` | `false` | Display user's current location |
| `onRegionChange` | `function` | - | Called when map region changes |

## Accessibility

- **Location context**: Screen readers announce current map location and zoom level
- **Marker information**: Map markers provide descriptive labels and details
- **Navigation support**: Alternative location information for screen reader users
- **Gesture alternatives**: Zoom and pan controls accessible via screen reader gestures

## Examples

### Basic Map Display
```jsx
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';

<View style={styles.mapContainer}>
  <MapView
    style={styles.map}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    showsUserLocation={true}
    showsMyLocationButton={true}
  >
    <Marker
      coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
      title="San Francisco"
      description="Beautiful city by the bay"
    />
  </MapView>
</View>
```

### Custom Marker Map
```jsx
import MapView, { Marker } from 'react-native-maps';

<MapView style={styles.map} region={currentRegion}>
  {locations.map((location) => (
    <Marker
      key={location.id}
      coordinate={location.coordinate}
      title={location.title}
      onPress={() => handleMarkerPress(location)}
    >
      <View style={styles.customMarker}>
        <Text style={styles.markerText}>{location.price}</Text>
      </View>
    </Marker>
  ))}
</MapView>
```