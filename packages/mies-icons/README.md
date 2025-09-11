# @tanqory/mies-icons

Curated e-commerce icon library for the Tanqory Mies design system. Cross-platform icons for Web and React Native based on Lucide with normalized styling.

## Installation

```bash
npm install @tanqory/mies-icons
# or
pnpm add @tanqory/mies-icons

# For React Native, also install react-native-svg
npm install react-native-svg
```

## Quick Start

### Web (Next.js / React)

```tsx
// Individual imports (recommended for tree-shaking)
import { CartIcon, SearchIcon, UserIcon } from '@tanqory/mies-icons/web';

// Or use main export
import { CartIcon, SearchIcon, UserIcon } from '@tanqory/mies-icons';

export default function Header() {
  return (
    <header className="flex items-center gap-4 p-4">
      <SearchIcon size={20} className="text-gray-600" />
      <CartIcon size={20} className="text-gray-600" />
      <UserIcon size={20} className="text-gray-600" />
    </header>
  );
}
```

### React Native

```tsx
// Individual imports
import { CartIcon, SearchIcon, UserIcon } from '@tanqory/mies-icons/native';

export default function TabBar() {
  return (
    <View style={{ flexDirection: 'row', gap: 16, padding: 16 }}>
      <SearchIcon size={24} color="#666" />
      <CartIcon size={24} color="#666" />
      <UserIcon size={24} color="#666" />
    </View>
  );
}
```

## Available Icons

All icons are designed for e-commerce applications with normalized styling:

### 🛒 Shopping & Commerce
- **CartIcon** - Shopping cart
- **BoxIcon** - Package/product box
- **TruckIcon** - Delivery/shipping
- **CreditCardIcon** - Payment/checkout
- **TagIcon** - Price tag/discount

### 📊 Business & Analytics  
- **ChartIcon** - Analytics/reporting
- **UserIcon** - Customer/profile

### 🔍 Interface & Navigation
- **SearchIcon** - Search functionality

## Icon Specifications

All icons follow consistent design standards:

- **Size**: 16×16 viewBox (scalable)
- **Stroke**: `currentColor` with 2px width
- **Fill**: `none` (outline style)
- **Style**: Clean, minimal, e-commerce focused
- **Based on**: Lucide icons (MIT License)

## Usage Examples

### Web Components

#### Basic Usage
```tsx
import { CartIcon, BoxIcon, TruckIcon } from '@tanqory/mies-icons/web';

export default function ShippingStatus() {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center gap-2">
        <BoxIcon size={16} className="text-blue-600" />
        <span>Packed</span>
      </div>
      
      <div className="flex items-center gap-2">
        <TruckIcon size={16} className="text-green-600" />
        <span>Shipped</span>
      </div>
    </div>
  );
}
```

#### With Tailwind CSS Classes
```tsx
import { SearchIcon, UserIcon } from '@tanqory/mies-icons/web';

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <SearchIcon 
          size={18} 
          className="text-gray-500 hover:text-gray-700 cursor-pointer" 
        />
        <input 
          type="text" 
          placeholder="Search products..."
          className="ml-2 p-2 border rounded"
        />
      </div>
      
      <UserIcon 
        size={20} 
        className="text-gray-600 hover:text-brand cursor-pointer" 
      />
    </nav>
  );
}
```

#### Button Integration
```tsx
import { CartIcon, CreditCardIcon } from '@tanqory/mies-icons/web';

export default function ProductActions() {
  return (
    <div className="flex gap-2">
      <button className="flex items-center gap-2 bg-brand text-black px-4 py-2 border border-black">
        <CartIcon size={16} />
        Add to Cart
      </button>
      
      <button className="flex items-center gap-2 bg-black text-white px-4 py-2">
        <CreditCardIcon size={16} />
        Buy Now
      </button>
    </div>
  );
}
```

### React Native Components

#### Tab Navigation
```tsx
import { CartIcon, SearchIcon, UserIcon, ChartIcon } from '@tanqory/mies-icons/native';

export default function BottomTabs({ activeTab }: { activeTab: string }) {
  const iconColor = (tab: string) => activeTab === tab ? '#E1FF00' : '#666666';
  
  return (
    <View style={{ 
      flexDirection: 'row', 
      justifyContent: 'space-around',
      paddingVertical: 12,
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderTopColor: '#000'
    }}>
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <SearchIcon size={24} color={iconColor('search')} />
        <Text style={{ fontSize: 12, marginTop: 4 }}>Search</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <CartIcon size={24} color={iconColor('cart')} />
        <Text style={{ fontSize: 12, marginTop: 4 }}>Cart</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <ChartIcon size={24} color={iconColor('analytics')} />
        <Text style={{ fontSize: 12, marginTop: 4 }}>Analytics</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <UserIcon size={24} color={iconColor('profile')} />
        <Text style={{ fontSize: 12, marginTop: 4 }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
```

#### List Items with Icons
```tsx
import { BoxIcon, TruckIcon, TagIcon } from '@tanqory/mies-icons/native';

const orderStatuses = [
  { id: 1, status: 'Packaged', icon: BoxIcon, color: '#E1FF00' },
  { id: 2, status: 'In Transit', icon: TruckIcon, color: '#666' },
  { id: 3, status: 'Delivered', icon: TagIcon, color: '#00AA00' },
];

export default function OrderStatusList() {
  return (
    <View>
      {orderStatuses.map((item) => {
        const IconComponent = item.icon;
        return (
          <View key={item.id} style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#000'
          }}>
            <IconComponent size={20} color={item.color} />
            <Text style={{ marginLeft: 12, fontSize: 16 }}>
              {item.status}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
```

#### Button with Icons
```tsx
import { CreditCardIcon, CartIcon } from '@tanqory/mies-icons/native';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CheckoutButtons() {
  return (
    <View style={{ gap: 12, padding: 16 }}>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#E1FF00' }]}>
        <CartIcon size={18} color="#000" />
        <Text style={[styles.buttonText, { color: '#000' }]}>
          Add to Cart
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button, { backgroundColor: '#000' }]}>
        <CreditCardIcon size={18} color="#fff" />
        <Text style={[styles.buttonText, { color: '#fff' }]}>
          Checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: '#000',
    gap: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
```

## Props API

### Web Components

All web icon components accept these props:

```tsx
interface IconProps {
  size?: number;          // Icon size (default: 16)
  className?: string;     // CSS classes
  style?: React.CSSProperties;  // Inline styles
}
```

### React Native Components

All React Native icon components accept these props:

```tsx
interface IconProps extends SvgProps {
  size?: number;          // Icon size (default: 16)
  color?: string;         // Icon color (default: 'currentColor')
}
```

## Design System Integration

Icons automatically inherit colors and work seamlessly with the Mies design system:

### With Web Components
```tsx
// Icons inherit text color via currentColor
<div className="text-brand">
  <CartIcon size={20} />  {/* Will be brand color (#E1FF00) */}
</div>

<div className="text-black hover:text-brand">
  <SearchIcon size={18} />  {/* Changes color on hover */}
</div>
```

### With React Native
```tsx
// Pass colors explicitly in React Native
import tokens from '@tanqory/mies-tokens/tokens.json';

<CartIcon size={24} color={tokens.colors.brand} />
<UserIcon size={20} color={tokens.colors.black} />
```

## TypeScript Support

All components are fully typed with proper interfaces:

```tsx
import type { CartIconProps, SearchIconProps } from '@tanqory/mies-icons/web';
import type { CartIconProps as CartIconPropsNative } from '@tanqory/mies-icons/native';

// Extend icon props for custom components
interface CustomIconButtonProps extends CartIconProps {
  label: string;
  onClick: () => void;
}
```

## Tree Shaking

Import only the icons you need for optimal bundle size:

```tsx
// ✅ Good - only imports CartIcon
import { CartIcon } from '@tanqory/mies-icons/web';

// ❌ Avoid - imports all icons
import * from '@tanqory/mies-icons';
```

## Platform Support

### Web
- **React**: 18.0+
- **Next.js**: All versions
- **RSC Safe**: All web components work in React Server Components
- **Bundlers**: Webpack, Vite, Rollup

### React Native  
- **React Native**: 0.75.0+
- **iOS**: 12.0+
- **Android**: API Level 21+
- **Expo**: SDK 50+
- **Dependencies**: `react-native-svg` required

## Performance

- **Lightweight**: Minimal SVG markup
- **Tree-shakable**: Import only what you use
- **SSR/RSC**: Web components work server-side
- **Native optimized**: Uses react-native-svg for performance

## Migration from Other Icon Libraries

### From Lucide React

```tsx
// Before (Lucide)
import { ShoppingCart, Package, Truck } from 'lucide-react';

// After (Mies Icons)
import { CartIcon, BoxIcon, TruckIcon } from '@tanqory/mies-icons/web';
```

### From React Native Vector Icons

```tsx
// Before (Vector Icons)
import Icon from 'react-native-vector-icons/Feather';

// After (Mies Icons)
import { CartIcon } from '@tanqory/mies-icons/native';
```

## Contributing

To request new icons or report issues:

1. Check if the icon fits e-commerce use cases
2. Ensure it's available in Lucide's icon set
3. Open an issue with use case description
4. Follow the normalized style guidelines

## Credits

This icon library is based on [Lucide](https://lucide.dev/) icons, which are available under the MIT License.

**Original Work**: Lucide Contributors  
**License**: MIT  
**Modifications**: Normalized to 16×16 viewBox, curated for e-commerce, adapted for cross-platform use

### Lucide MIT License

```
MIT License

Copyright (c) 2022 Lucide Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## License

MIT License - See LICENSE file for details.