# Accessibility

Tanqory Mies is built with accessibility at its core, ensuring that our design system creates inclusive experiences for all users.

## Principles

### Universal Design
Our components follow universal design principles, making them usable by people with the widest range of abilities.

### WCAG Compliance
All Tanqory Mies components are designed to meet WCAG 2.1 AA standards, ensuring:
- Perceivable interfaces with proper contrast ratios
- Operable components that work with keyboard navigation
- Understandable content and functionality
- Robust code that works with assistive technologies

## Implementation

### Color Contrast
All color combinations in our design tokens meet or exceed WCAG contrast requirements:
- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text**: Minimum 3:1 contrast ratio
- **Interactive elements**: Clear focus indicators

### Keyboard Navigation
Every interactive component supports keyboard navigation:
- Tab order follows logical content flow
- Focus indicators are clearly visible
- Custom keyboard shortcuts are documented

### Screen Reader Support
Components include appropriate ARIA labels and roles:
- Semantic HTML structure
- Descriptive alt text for images
- Proper heading hierarchy
- Live regions for dynamic content

## Testing

We recommend testing with:
- Screen readers (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation
- Color contrast analyzers
- Automated accessibility tools

## Resources

- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [Inclusive Design Principles](https://inclusivedesignprinciples.org/)