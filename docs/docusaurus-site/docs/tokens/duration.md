# Duration

Systematic timing values create consistent animation speeds and micro-interactions. Tanqory Mies uses strategic duration tokens for transitions, animations, and loading states that feel natural and responsive.

## Purpose

Duration tokens ensure consistent timing across all animations and transitions. Systematic timing creates predictable user experiences, improves perceived performance, and provides appropriate feedback for all interactive elements.

## Usage Guidelines

- Use instant duration (0ms) for immediate state changes that shouldn't be perceived as motion
- Apply fast duration (150ms) for quick feedback like hover states and simple transitions
- Implement base duration (250ms) for standard animations like modals and page transitions
- Reserve slow duration (500ms) for complex animations that need to communicate significant changes

## Token Examples

### Duration Scale

```css
:root {
  --mies-duration-instant: 0ms;
  --mies-duration-fast: 150ms;
  --mies-duration-base: 250ms;
  --mies-duration-slow: 500ms;
  --mies-duration-slower: 750ms;
}
```

### Interaction Durations

```css
:root {
  --mies-duration-hover: var(--mies-duration-fast);
  --mies-duration-focus: var(--mies-duration-fast);
  --mies-duration-press: var(--mies-duration-fast);
  --mies-duration-release: var(--mies-duration-base);
}
```

### Component Durations

```css
:root {
  --mies-duration-tooltip: var(--mies-duration-fast);
  --mies-duration-dropdown: var(--mies-duration-base);
  --mies-duration-modal: var(--mies-duration-base);
  --mies-duration-page: var(--mies-duration-slow);
}
```

### Loading Durations

```css
:root {\n  --mies-duration-spinner: 1000ms;\n  --mies-duration-skeleton: 1500ms;\n  --mies-duration-pulse: 2000ms;\n  --mies-duration-fade: var(--mies-duration-base);\n}\n```\n\n## Implementation\n\n### CSS Custom Properties\n\n```css\n.button {\n  transition: all var(--mies-duration-hover) ease;\n}\n\n.button:hover {\n  transition-duration: var(--mies-duration-fast);\n}\n\n.modal {\n  transition: opacity var(--mies-duration-modal) ease,\n              transform var(--mies-duration-modal) ease;\n}\n\n.tooltip {\n  transition: opacity var(--mies-duration-tooltip) ease;\n}\n\n.dropdown {\n  transition: all var(--mies-duration-dropdown) ease;\n}\n\n.page-transition {\n  transition: transform var(--mies-duration-page) ease;\n}\n```\n\n### JavaScript/TypeScript\n\n```js\nimport { duration } from '@tanqory/mies-tokens';\n\nconst animations = {\n  hover: {\n    transition: `all ${duration.hover} ease`,\n  },\n  modal: {\n    transition: `opacity ${duration.modal} ease, transform ${duration.modal} ease`,\n  },\n  dropdown: {\n    transition: `all ${duration.dropdown} ease`,\n  },\n};\n\n// For JavaScript animations\nconst animateElement = (element, properties, options = {}) => {\n  element.animate(properties, {\n    duration: duration.base,\n    easing: 'ease',\n    ...options,\n  });\n};\n```\n\n### React Native\n\n```js\nimport { Animated } from 'react-native';\nimport tokens from '@tanqory/mies-tokens/native.json';\n\nconst fadeIn = (animatedValue) => {\n  Animated.timing(animatedValue, {\n    toValue: 1,\n    duration: tokens.duration.base,\n    useNativeDriver: true,\n  }).start();\n};\n\nconst slideIn = (animatedValue) => {\n  Animated.timing(animatedValue, {\n    toValue: 0,\n    duration: tokens.duration.modal,\n    useNativeDriver: true,\n  }).start();\n};\n```\n\n## Cross-Platform Considerations\n\n### Reduced Motion Support\n\nRespect user preferences for reduced motion:\n\n```css\n.animated {\n  transition: all var(--mies-duration-base) ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .animated {\n    transition-duration: var(--mies-duration-instant);\n  }\n}\n```\n\n### Performance Optimization\n\n```css\n.optimized-animation {\n  will-change: transform, opacity;\n  transition: transform var(--mies-duration-base) ease,\n              opacity var(--mies-duration-base) ease;\n}\n\n.optimized-animation.complete {\n  will-change: auto;\n}\n```\n\n### Mobile Optimization\n\nAdjust durations for mobile devices:\n\n```css\n@media (max-width: 768px) {\n  :root {\n    --mies-duration-base: 200ms;\n    --mies-duration-slow: 350ms;\n  }\n}\n```\n\n## Animation Patterns\n\n### Loading Animations\n\n```css\n@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n\n.spinner {\n  animation: spin var(--mies-duration-spinner) linear infinite;\n}\n\n@keyframes pulse {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.5; }\n}\n\n.pulse {\n  animation: pulse var(--mies-duration-pulse) ease-in-out infinite;\n}\n```\n\n### Micro-Interactions\n\n```css\n.button {\n  transform: scale(1);\n  transition: transform var(--mies-duration-press) ease;\n}\n\n.button:active {\n  transform: scale(0.98);\n  transition-duration: var(--mies-duration-fast);\n}\n\n.button:not(:active) {\n  transition-duration: var(--mies-duration-release);\n}\n```\n\n### State Transitions\n\n```css\n.modal {\n  opacity: 0;\n  transform: translateY(20px);\n  transition: opacity var(--mies-duration-modal) ease,\n              transform var(--mies-duration-modal) ease;\n}\n\n.modal.open {\n  opacity: 1;\n  transform: translateY(0);\n}\n```\n\n## Timing Functions Integration\n\nDurations work with easing functions:\n\n```css\n.smooth-transition {\n  transition: all var(--mies-duration-base) cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.bouncy-transition {\n  transition: all var(--mies-duration-slow) cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n```\n\n## Design Philosophy\n\n> \"Less is more\" — Ludwig Mies van der Rohe\n\nDuration tokens eliminate arbitrary timing decisions. Every animation serves a purpose—providing feedback, communicating state changes, or guiding attention. Systematic timing creates interfaces that feel responsive, predictable, and purposeful.