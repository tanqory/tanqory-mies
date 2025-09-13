# Design Tokens & Theming

**Design tokens** are the single source of truth for Tanqory's visual style.  
They store visual attributes—color, spacing, typography, and more—as platform-agnostic variables.  
This guarantees **consistency, flexibility, and easy theming** across web, mobile, and any future surface.

## What Are Design Tokens?
A design token is a named value (for example, `color.primary = #E1FF00`) that represents a design decision.  
Instead of hard-coding values, components reference tokens to keep UI elements synchronized.

**Types of tokens in Tanqory Mies**
- **Color**: brand, surface, text, accent, semantic (success, warning, error)  
- **Spacing**: margin, padding, grid gaps  
- **Typography**: font families, sizes, weights, line heights  
- **Border & Radius**: widths, radii (default 0 for Mies minimalism)  
- **Motion**: easing curves, duration, keyframes  
- **Z-index & Layers**: stacking context values  
- **Shadow**: none by default, but defined for rare use cases

## Why Tokens Matter
- **Consistency** – One update cascades everywhere.  
- **Cross-platform** – Works across Next.js, React Native, Figma, and any new platform.  
- **Theming** – Brands can swap token sets (light, dark, custom merchant themes) without rewriting components.

## Theming with Mies
Tanqory supports **dynamic theming** by swapping token sets at runtime or build time.

Example structure:

```javascript
// Base tokens
export const baseTokens = {
  color: {
    brand: '#E1FF00',
    surface: '#FFFFFF', 
    text: '#000000'
  },
  spacing: {
    xs: 4, sm: 8, base: 16, lg: 24, xl: 32
  }
};

// Dark theme override
export const darkTokens = {
  ...baseTokens,
  color: {
    ...baseTokens.color,
    surface: '#000000',
    text: '#FFFFFF'
  }
};
```

## Implementation

**CSS Variables**
```css
:root {
  --mies-color-brand: #E1FF00;
  --mies-color-surface: #FFFFFF;
  --mies-space-base: 16px;
}
```

**React Context**
```jsx
const ThemeProvider = ({ theme, children }) => {
  return (
    <div style={{ '--mies-color-brand': theme.color.brand }}>
      {children}
    </div>
  );
};
```

**React Native**  
```javascript
const theme = {
  colors: { brand: '#E1FF00' },
  spacing: { base: 16 }
};
```

Tokens are the foundation of scalable, maintainable design systems—enabling **consistency at scale** across every Tanqory experience.