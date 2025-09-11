# Design Tokens

Tanqory Mies uses design tokens to ensure consistency across platforms.

## Installation

```bash
npm install @tanqory/mies-tokens
```

## Colors

### Brand Colors
- **Brand**: `#E1FF00` (Lime green)
- **Black**: `#000000` 
- **White**: `#FFFFFF`

### Usage

#### CSS Variables
```css
:root {
  --mies-color-brand: #E1FF00;
  --mies-color-black: #000000;
  --mies-color-white: #FFFFFF;
}
```

#### JavaScript/TypeScript
```js
import { colors } from '@tanqory/mies-tokens';

const brandColor = colors.brand; // '#E1FF00'
```

#### React Native
```js
import tokens from '@tanqory/mies-tokens/tokens.json';

const styles = StyleSheet.create({
  container: {
    backgroundColor: tokens.colors.brand,
  },
});
```

## Spacing

Precise spacing scale: 4, 8, 12, 16, 24, 32 pixels

```js
import { spacing } from '@tanqory/mies-tokens';

// Available values
spacing.xs   // 4px
spacing.sm   // 8px
spacing.md   // 12px
spacing.base // 16px
spacing.lg   // 24px
spacing.xl   // 32px
```

## Typography

System fonts optimized for readability:

```js
import { typography } from '@tanqory/mies-tokens';

typography.fontFamily.sans // System font stack
typography.fontSize.sm     // 14px
typography.fontSize.base   // 16px
typography.fontSize.lg     // 18px
typography.fontSize.xl     // 24px
typography.fontSize.xxl    // 32px
```

## Borders

Sharp, precise borders with no rounded corners:

```js
import { border } from '@tanqory/mies-tokens';

border.width     // 1px
border.color     // #000000
border.radius    // 0 (always)
```