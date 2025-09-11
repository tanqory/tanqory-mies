# Motion & Feedback

Tanqory Mies uses purposeful motion and immediate feedback to create responsive, delightful user experiences that guide and inform.

## Motion Philosophy

### Purposeful Animation
- **Functional motion**: Every animation serves a clear purpose
- **Natural movement**: Physics-based, believable animations
- **Performance first**: Smooth 60fps animations on all devices
- **Accessibility aware**: Respects reduced motion preferences

### Design Principles
- **Continuity**: Smooth transitions between states
- **Feedback**: Immediate response to user actions
- **Guidance**: Motion directs attention and flow
- **Personality**: Subtle character without distraction

## Animation System

### Duration Scale
```css
:root {
  /* Animation durations */
  --duration-instant: 0ms;
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 350ms;
  --duration-slower: 500ms;
}
```

### Easing Functions
```css
:root {
  /* Easing curves */
  --ease-out: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-in: cubic-bezier(0.42, 0, 1, 1);
  --ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

### Motion Tokens
```css
/* Standard transitions */
.transition-all {
  transition: all var(--duration-normal) var(--ease-out);
}

.transition-colors {
  transition: 
    color var(--duration-fast) var(--ease-out),
    background-color var(--duration-fast) var(--ease-out);
}

.transition-transform {
  transition: transform var(--duration-normal) var(--ease-out);
}
```

## Feedback Patterns

### Interaction Feedback
```css
/* Button hover/press */
.button {
  transition: 
    background-color var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out);
}

.button:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.button:active {
  transform: translateY(0);
  transition-duration: var(--duration-instant);
}
```

### Focus Indicators
```css
.focusable {
  outline: 0;
  box-shadow: 0 0 0 0 var(--color-focus);
  transition: box-shadow var(--duration-fast) var(--ease-out);
}

.focusable:focus {
  box-shadow: 0 0 0 3px var(--color-focus);
}
```

### Loading States
```css
/* Skeleton loading */
.skeleton {
  background: linear-gradient(
    90deg,
    var(--neutral-200) 25%,
    var(--neutral-100) 50%,
    var(--neutral-200) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

## Component Animations

### Modal Entrance
```css
.modal {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
  transition: 
    opacity var(--duration-normal) var(--ease-out),
    transform var(--duration-normal) var(--ease-out);
}

.modal.open {
  opacity: 1;
  transform: scale(1) translateY(0);
}
```

### Dropdown Animation
```css
.dropdown {
  opacity: 0;
  transform: translateY(-8px);
  transition: 
    opacity var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
}

.dropdown.open {
  opacity: 1;
  transform: translateY(0);
}
```

### Toast Notifications
```css
.toast {
  transform: translateX(100%);
  transition: transform var(--duration-normal) var(--ease-spring);
}

.toast.show {
  transform: translateX(0);
}

.toast.hide {
  transform: translateX(100%);
  transition-timing-function: var(--ease-in);
}
```

## Page Transitions

### Route Animations
```css
/* Page enter */
.page-enter {
  opacity: 0;
  transform: translateX(20px);
}

.page-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: 
    opacity var(--duration-normal) var(--ease-out),
    transform var(--duration-normal) var(--ease-out);
}

/* Page exit */
.page-exit {
  opacity: 1;
  transform: translateX(0);
}

.page-exit-active {
  opacity: 0;
  transform: translateX(-20px);
  transition: 
    opacity var(--duration-fast) var(--ease-in),
    transform var(--duration-fast) var(--ease-in);
}
```

### Shared Element Transitions
```typescript
// React implementation
const SharedElement = ({ children, id }) => {
  return (
    <motion.div
      layoutId={id}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      {children}
    </motion.div>
  );
};
```

## Micro-interactions

### Icon Animations
```css
/* Rotating icon */
.icon-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Bouncing icon */
.icon-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
  40%, 43% { transform: translateY(-10px); }
  70% { transform: translateY(-5px); }
  90% { transform: translateY(-2px); }
}
```

### Form Feedback
```css
/* Input validation */
.input-error {
  border-color: var(--error-500);
  animation: shake 0.3s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

/* Success checkmark */
.checkmark {
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  animation: checkmark 0.5s ease-out forwards;
}

@keyframes checkmark {
  to { stroke-dashoffset: 0; }
}
```

## Accessibility Considerations

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Focus Management
```typescript
// Focus management for modals
const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  
  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
    }
  }, [isOpen]);
  
  return (
    <div 
      ref={modalRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
    >
      {/* Modal content */}
    </div>
  );
};
```

## Performance Optimization

### GPU Acceleration
```css
/* Promote to compositor layer */
.animated {
  will-change: transform, opacity;
  transform: translateZ(0); /* Force GPU acceleration */
}

/* Remove after animation */
.animated.complete {
  will-change: auto;
}
```

### Efficient Animations
```css
/* Prefer transform over position changes */
.slide-in {
  transform: translateX(100%);
  transition: transform var(--duration-normal) var(--ease-out);
}

.slide-in.active {
  transform: translateX(0);
}
```

## React Native Motion

### Animated API
```typescript
import { Animated, Easing } from 'react-native';

const FadeInView = ({ children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  
  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
};
```

### Gesture Animations
```typescript
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { 
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const SwipeableCard = () => {
  const translateX = useSharedValue(0);
  
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: () => {
      translateX.value = withSpring(0);
    },
  });
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });
  
  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={animatedStyle}>
        {/* Card content */}
      </Animated.View>
    </PanGestureHandler>
  );
};
```

## Testing Motion

### Visual Regression Testing
```javascript
// Test animation states
describe('Button animations', () => {
  it('should animate on hover', async () => {
    await page.hover('.button');
    await page.waitForTimeout(200); // Wait for animation
    await expect(page).toHaveScreenshot('button-hover.png');
  });
});
```

### Performance Testing
```javascript
// Monitor frame rate
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    if (entry.duration > 16.67) { // > 60fps
      console.warn('Slow animation frame:', entry.duration);
    }
  });
});

observer.observe({ entryTypes: ['measure'] });
```

## Motion Guidelines

### Do's
- Use motion to guide user attention
- Provide immediate feedback for interactions
- Respect user accessibility preferences
- Keep animations subtle and purposeful
- Test performance on slower devices

### Don'ts
- Don't animate for animation's sake
- Avoid overly complex or distracting motion
- Don't ignore reduced motion preferences
- Avoid blocking user interactions during animations
- Don't use motion that could trigger vestibular disorders

Thoughtful motion and feedback create engaging, responsive experiences that feel alive and help users understand and navigate interfaces with confidence.