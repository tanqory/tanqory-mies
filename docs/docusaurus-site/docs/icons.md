# Icons

Cross-platform icon library designed for e-commerce applications. Based on Lucide icons with normalized styling and consistent design constraints.

## Icon Catalog

All icons are designed with these specifications:

- **Size:** 16×16 viewBox (scalable)
- **Stroke:** currentColor with 2px width
- **Fill:** none (outline style)
- **Style:** Clean, minimal, e-commerce focused

### Available Icons

| Icon | Name | Description |
|------|------|-------------|
| 🛒 | `CartIcon` | Shopping cart for e-commerce |
| 📦 | `BoxIcon` | Product package or inventory |
| 🚚 | `TruckIcon` | Shipping and delivery |
| 💳 | `CreditCardIcon` | Payment and checkout |
| 📊 | `ChartIcon` | Analytics and reporting |
| 👤 | `UserIcon` | User profile and account |
| 🏷️ | `TagIcon` | Price tags and categories |
| 🔍 | `SearchIcon` | Search functionality |

## Installation

```bash
# For web projects
npm install @tanqory/mies-icons

# Icons are automatically included with core packages
npm install @tanqory/mies-core-web    # Web components
npm install @tanqory/mies-core-native # React Native components
```

## Usage Examples

### Web Components (React/Next.js)

```tsx
import { CartIcon, BoxIcon, UserIcon } from '@tanqory/mies-icons/web';

export default function Header() {
  return (
    <header className="flex items-center gap-16 p-24">
      <CartIcon size={24} className="text-brand" />
      <BoxIcon size={20} className="text-black hover:text-brand" />
      <UserIcon size={20} className="text-black" />
    </header>
  );
}
```

### React Native Components

```tsx
import { CartIcon, BoxIcon, UserIcon } from '@tanqory/mies-icons/native';
import tokens from '@tanqory/mies-tokens/tokens.json';

export default function TabBar() {
  return (
    <View style={{ flexDirection: 'row', gap: 16, padding: 16 }}>
      <CartIcon size={24} color={tokens.colors.brand} />
      <BoxIcon size={20} color={tokens.colors.black} />
      <UserIcon size={20} color={tokens.colors.black} />
    </View>
  );
}
```

## Props API

### Web Components

```tsx
interface IconProps {
  size?: number;              // Icon size (default: 16)
  className?: string;         // CSS classes
  style?: React.CSSProperties; // Inline styles
}
```

### React Native Components

```tsx
interface IconProps extends SvgProps {
  size?: number;    // Icon size (default: 16)
  color?: string;   // Icon color (default: 'currentColor')
}
```

## Design System Integration

Icons automatically work with the design system colors:

### Web with Tailwind CSS

```tsx
// Icons inherit text color via currentColor
<div className="text-brand">
  <CartIcon size={20} />  {/* Will be brand color (#E1FF00) */}
</div>

<div className="text-black hover:text-brand">
  <SearchIcon size={18} />  {/* Changes color on hover */}
</div>
```

### React Native with Tokens

```tsx
import tokens from '@tanqory/mies-tokens/tokens.json';

<CartIcon size={24} color={tokens.colors.brand} />
<UserIcon size={20} color={tokens.colors.black} />

// Dynamic color based on state
<BoxIcon 
  size={22} 
  color={isActive ? tokens.colors.brand : tokens.colors.black} 
/>
```

## Icon Sizes

Common sizes used in the design system:

| Size | Usage |
|------|-------|
| 16px | Small UI elements, inline with text |
| 20px | Standard navigation, buttons |
| 24px | Primary actions, featured elements |
| 32px | Large interactive areas, hero sections |

## Best Practices

1. **Use semantic names** - Choose icons based on function, not appearance
2. **Consistent sizing** - Stick to the recommended size scale
3. **Color inheritance** - Let icons inherit text color when possible
4. **Accessibility** - Provide alt text or aria-labels for standalone icons
5. **Performance** - Import only the icons you need

## Credits

This icon library is based on [Lucide](https://lucide.dev/) icons, which are available under the MIT License.

- **Original Work:** Lucide Contributors
- **License:** MIT
- **Modifications:** Normalized to 16×16 viewBox, curated for e-commerce, adapted for cross-platform use