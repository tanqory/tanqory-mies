# Gesture Handler Examples

Advanced touch gesture implementations for enhanced mobile user interactions and navigation patterns.

## Overview

Gesture Handler Examples showcase sophisticated touch interactions including pan, pinch, rotation, and swipe gestures that create intuitive mobile experiences beyond basic tap interactions.

## Usage Guidelines

- **Performance optimization**: Use native gesture handlers for smooth 60fps interactions
- **Gesture conflicts**: Carefully manage multiple simultaneous gestures to avoid conflicts
- **Feedback provision**: Provide immediate visual and haptic feedback for gesture recognition
- **Accessibility considerations**: Ensure gesture-based interactions have alternative access methods

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enabled` | `boolean` | `true` | Enable gesture recognition |
| `simultaneousHandlers` | `Handler[]` | - | Gestures that can run simultaneously |
| `onGestureEvent` | `function` | - | Gesture event handler |
| `onHandlerStateChange` | `function` | - | State change callback |

## Accessibility

- **Alternative interactions**: Provide button-based alternatives for gesture-only features
- **Gesture guidance**: Instructions or hints for complex gesture interactions
- **Reduced motion**: Respect system reduce motion preferences
- **Touch assistance**: Support for assistive touch and external input devices

## Examples

### Pan Gesture (Draggable Element)
```jsx
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const DraggableBox = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
      translateY.value = context.startY + event.translationY;
    },
  });
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });
  
  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </PanGestureHandler>
  );
};
```

### Pinch Gesture (Zoom)
```jsx
import { PinchGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const ZoomableImage = ({ source }) => {
  const scale = useSharedValue(1);
  
  const pinchHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      scale.value = Math.min(Math.max(event.scale, 0.5), 3);
    },
    onEnd: () => {
      if (scale.value < 1) {
        scale.value = 1;
      }
    },
  });
  
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  
  return (
    <PinchGestureHandler onGestureEvent={pinchHandler}>
      <Animated.Image 
        source={source} 
        style={[styles.image, animatedStyle]}
        accessibilityLabel="Pinch to zoom image"
      />
    </PinchGestureHandler>
  );
};
```