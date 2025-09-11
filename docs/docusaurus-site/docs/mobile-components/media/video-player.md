# Video Player

Full-featured video playback component with native controls and mobile-optimized streaming.

## Overview

Video Player provides native video playback with platform-specific controls, supporting various formats and streaming protocols optimized for mobile devices.

## Usage Guidelines

- **Native controls**: Use platform-specific video controls for familiar user experience
- **Bandwidth awareness**: Implement adaptive streaming for varying network conditions
- **Battery optimization**: Manage video playback to preserve device battery life
- **Orientation support**: Handle landscape mode transitions for fullscreen viewing

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `source` | `VideoSource` | - | Video source URI or local file |
| `controls` | `boolean` | `true` | Show native playback controls |
| `autoplay` | `boolean` | `false` | Start playback automatically |
| `muted` | `boolean` | `false` | Initial mute state |

## Accessibility

- **Control labels**: Video controls properly labeled for screen readers
- **Playback status**: Current playback state announced to assistive technology
- **Caption support**: Closed captions available when provided
- **Alternative access**: Keyboard controls for external keyboards

## Examples

### Basic Video Player
```jsx
import Video from 'react-native-video';
import { View } from 'react-native';

<View style={styles.videoContainer}>
  <Video
    source={{ uri: 'https://example.com/video.mp4' }}
    style={styles.video}
    controls={true}
    resizeMode="contain"
    onLoad={handleVideoLoad}
    onError={handleVideoError}
  />
</View>
```

### Custom Video Controls
```jsx
import Video from 'react-native-video';
import { View, TouchableOpacity, Text } from 'react-native';

const CustomVideoPlayer = ({ source }) => {
  const [paused, setPaused] = useState(true);
  
  return (
    <View style={styles.videoPlayer}>
      <Video
        source={source}
        style={styles.video}
        paused={paused}
        controls={false}
        resizeMode="cover"
      />
      <View style={styles.customControls}>
        <TouchableOpacity 
          onPress={() => setPaused(!paused)}
          accessibilityLabel={paused ? "Play video" : "Pause video"}
        >
          <Icon name={paused ? "play-arrow" : "pause"} size={48} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
```