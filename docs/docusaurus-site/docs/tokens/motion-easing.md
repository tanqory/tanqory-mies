# Motion & Easing

Systematic easing curves create natural, purposeful motion that guides user attention and provides meaningful feedback. Tanqory Mies uses strategic easing functions that feel responsive and intentional.

## Purpose

Easing curves define how animations accelerate and decelerate, creating natural motion that mimics real-world physics. Systematic easing ensures consistent animation personality across all interactions while maintaining the "less is more" philosophy.

## Usage Guidelines

- Use linear easing for continuous animations like loading spinners and progress indicators
- Apply ease-out for elements entering the viewport and hover state transitions
- Implement ease-in-out for modal dialogs and page transitions that need smooth entrance and exit
- Reserve custom curves for specific interactions that require unique motion characteristics

## Token Examples

### Basic Easing Functions

```css
:root {
  --mies-easing-linear: linear;
  --mies-easing-ease: ease;
  --mies-easing-ease-in: ease-in;
  --mies-easing-ease-out: ease-out;
  --mies-easing-ease-in-out: ease-in-out;
}
```

### Custom Easing Curves

```css
:root {
  --mies-easing-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --mies-easing-sharp: cubic-bezier(0.4, 0, 0.6, 1);
  --mies-easing-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --mies-easing-back: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

### Interaction Easing

```css
:root {\n  --mies-easing-hover: var(--mies-easing-ease-out);\n  --mies-easing-focus: var(--mies-easing-smooth);\n  --mies-easing-press: var(--mies-easing-sharp);\n  --mies-easing-release: var(--mies-easing-ease-out);\n}\n```\n\n### Component Easing\n\n```css\n:root {\n  --mies-easing-modal: var(--mies-easing-smooth);\n  --mies-easing-tooltip: var(--mies-easing-ease-out);\n  --mies-easing-dropdown: var(--mies-easing-sharp);\n  --mies-easing-page: var(--mies-easing-ease-in-out);\n}\n```\n\n## Implementation\n\n### CSS Custom Properties\n\n```css\n.button {\n  transition: all var(--mies-duration-hover) var(--mies-easing-hover);\n}\n\n.button:active {\n  transition: transform var(--mies-duration-press) var(--mies-easing-press);\n}\n\n.modal {\n  transition: opacity var(--mies-duration-modal) var(--mies-easing-modal),\n              transform var(--mies-duration-modal) var(--mies-easing-modal);\n}\n\n.tooltip {\n  transition: opacity var(--mies-duration-tooltip) var(--mies-easing-tooltip);\n}\n\n.dropdown {\n  transition: all var(--mies-duration-dropdown) var(--mies-easing-dropdown);\n}\n```\n\n### JavaScript/TypeScript\n\n```js\nimport { easing, duration } from '@tanqory/mies-tokens';\n\nconst animations = {\n  button: {\n    transition: `all ${duration.hover} ${easing.hover}`,\n  },\n  modal: {\n    transition: `opacity ${duration.modal} ${easing.modal}, transform ${duration.modal} ${easing.modal}`,\n  },\n  smooth: {\n    transition: `all ${duration.base} ${easing.smooth}`,\n  },\n};\n\n// For Web Animations API\nconst animateElement = (element, keyframes, options = {}) => {\n  return element.animate(keyframes, {\n    duration: duration.base,\n    easing: easing.smooth,\n    ...options,\n  });\n};\n```\n\n### React Native\n\n```js\nimport { Animated, Easing } from 'react-native';\nimport tokens from '@tanqory/mies-tokens/native.json';\n\n// Convert CSS easing to React Native easing\nconst easingMap = {\n  linear: Easing.linear,\n  ease: Easing.ease,\n  easeIn: Easing.in(Easing.ease),\n  easeOut: Easing.out(Easing.ease),\n  easeInOut: Easing.inOut(Easing.ease),\n  smooth: Easing.bezier(0.4, 0, 0.2, 1),\n  sharp: Easing.bezier(0.4, 0, 0.6, 1),\n};\n\nconst fadeIn = (animatedValue) => {\n  Animated.timing(animatedValue, {\n    toValue: 1,\n    duration: tokens.duration.base,\n    easing: easingMap.smooth,\n    useNativeDriver: true,\n  }).start();\n};\n```\n\n## Cross-Platform Considerations\n\n### Reduced Motion Support\n\n```css\n.animated {\n  transition: all var(--mies-duration-base) var(--mies-easing-smooth);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .animated {\n    transition-timing-function: var(--mies-easing-linear);\n    transition-duration: var(--mies-duration-instant);\n  }\n}\n```\n\n### Performance Optimization\n\n```css\n.gpu-optimized {\n  will-change: transform, opacity;\n  transition: transform var(--mies-duration-base) var(--mies-easing-smooth),\n              opacity var(--mies-duration-base) var(--mies-easing-smooth);\n}\n```\n\n## Motion Patterns\n\n### Enter Animations\n\n```css\n.fade-enter {\n  opacity: 0;\n  transition: opacity var(--mies-duration-base) var(--mies-easing-ease-out);\n}\n\n.fade-enter-active {\n  opacity: 1;\n}\n\n.slide-enter {\n  transform: translateY(20px);\n  opacity: 0;\n  transition: transform var(--mies-duration-base) var(--mies-easing-smooth),\n              opacity var(--mies-duration-base) var(--mies-easing-smooth);\n}\n\n.slide-enter-active {\n  transform: translateY(0);\n  opacity: 1;\n}\n```\n\n### Exit Animations\n\n```css\n.fade-exit {\n  opacity: 1;\n  transition: opacity var(--mies-duration-base) var(--mies-easing-ease-in);\n}\n\n.fade-exit-active {\n  opacity: 0;\n}\n\n.slide-exit {\n  transform: translateY(0);\n  opacity: 1;\n  transition: transform var(--mies-duration-base) var(--mies-easing-sharp),\n              opacity var(--mies-duration-base) var(--mies-easing-sharp);\n}\n\n.slide-exit-active {\n  transform: translateY(-20px);\n  opacity: 0;\n}\n```\n\n### Micro-Interactions\n\n```css\n.interactive {\n  transform: scale(1);\n  transition: transform var(--mies-duration-press) var(--mies-easing-press);\n}\n\n.interactive:hover {\n  transform: scale(1.02);\n  transition-timing-function: var(--mies-easing-ease-out);\n}\n\n.interactive:active {\n  transform: scale(0.98);\n  transition-timing-function: var(--mies-easing-sharp);\n}\n```\n\n## Loading and Progress\n\n### Continuous Motion\n\n```css\n@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n\n.spinner {\n  animation: spin var(--mies-duration-spinner) var(--mies-easing-linear) infinite;\n}\n\n@keyframes progress {\n  0% { transform: translateX(-100%); }\n  100% { transform: translateX(100%); }\n}\n\n.progress-bar {\n  animation: progress 2s var(--mies-easing-ease-in-out) infinite;\n}\n```\n\n### Pulsing Effects\n\n```css\n@keyframes pulse {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.5; }\n}\n\n.pulse {\n  animation: pulse var(--mies-duration-pulse) var(--mies-easing-ease-in-out) infinite;\n}\n```\n\n## Custom Easing Applications\n\n### Modal Entrance\n\n```css\n.modal {\n  opacity: 0;\n  transform: scale(0.9) translateY(20px);\n  transition: opacity var(--mies-duration-modal) var(--mies-easing-smooth),\n              transform var(--mies-duration-modal) var(--mies-easing-smooth);\n}\n\n.modal.open {\n  opacity: 1;\n  transform: scale(1) translateY(0);\n}\n```\n\n### Elastic Button Press\n\n```css\n.elastic-button {\n  transition: transform var(--mies-duration-base) var(--mies-easing-back);\n}\n\n.elastic-button:active {\n  transform: scale(0.95);\n  transition-timing-function: var(--mies-easing-sharp);\n}\n```\n\n## Design Philosophy\n\n> \"Architecture starts when you carefully put two bricks together.\" — Ludwig Mies van der Rohe\n\nMotion is the mortar between interface elements. Systematic easing creates purposeful, natural movement that guides users without distraction. Every curve serves a function—providing feedback, communicating state, or directing attention through intentional acceleration and deceleration.