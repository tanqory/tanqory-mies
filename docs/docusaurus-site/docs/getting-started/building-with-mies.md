# Building with Mies

A practical guide to building production-ready applications with the Tanqory Mies design system.

## Project Setup

### Web Application Setup

#### 1. Create Next.js Project

```bash
# Create new Next.js project with TypeScript
npx create-next-app@latest my-store --typescript --app --tailwind

# Navigate to project
cd my-store
```

#### 2. Install Tanqory Mies

```bash
# Install core packages
npm install @tanqory/mies-core-web @tanqory/mies-tailwind @tanqory/mies-tokens @tanqory/mies-icons

# Install development dependencies
npm install --save-dev eslint-plugin-tanqory-mies
```

#### 3. Configure Tailwind CSS

```javascript
// tailwind.config.js
module.exports = require('@tanqory/mies-tailwind');
```

#### 4. Setup Base Styles

```tsx
// app/layout.tsx
import '@tanqory/mies-tokens/tokens.css';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-black">
        {children}
      </body>
    </html>
  );
}
```

#### 5. Configure ESLint

```javascript
// .eslintrc.js
module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:tanqory-mies/recommended',
  ],
  rules: {
    'tanqory-mies/no-rounded': 'error',
    'tanqory-mies/no-shadow': 'error',
    'tanqory-mies/no-gradient': 'error',
    'tanqory-mies/enforce-design-tokens': 'warn',
  },
};
```

### React Native Setup

#### 1. Create Expo Project

```bash
# Create new Expo project
npx create-expo-app MyStoreApp --template blank-typescript

# Navigate to project
cd MyStoreApp
```

#### 2. Install Dependencies

```bash
# Install Mies packages
npm install @tanqory/mies-core-native @tanqory/mies-tokens @tanqory/mies-icons

# Install required peer dependencies
npm install react-native-svg
```

#### 3. Configure Metro

```javascript
// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add svg extension
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
config.resolver.sourceExts.push('svg');

module.exports = config;
```

## Building Your First Components

### E-commerce Product Card

```tsx
// components/ProductCard.tsx
import { Card, CardHeader, CardContent } from '@tanqory/mies-core-web/card';
import { Button } from '@tanqory/mies-core-web/button';
import { Stack } from '@tanqory/mies-core-web/layout';
import { CartIcon } from '@tanqory/mies-icons/web';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card padding="base" bordered className="h-full">
      <CardContent>
        <Stack spacing="base">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full aspect-square object-cover border border-black"
          />
          
          <div>
            <h3 className="text-lg font-medium text-black">
              {product.name}
            </h3>
            <p className="text-base text-black opacity-70 mt-4">
              {product.description}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xl font-medium text-black">
              {product.price}
            </span>
            <Button 
              variant="primary" 
              onClick={() => onAddToCart(product.id)}
            >
              <CartIcon size={16} />
              Add to Cart
            </Button>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
```

### Navigation Header

```tsx
// components/Header.tsx
import { Container, Stack } from '@tanqory/mies-core-web/layout';
import { Button } from '@tanqory/mies-core-web/button';
import { SearchIcon, CartIcon, UserIcon } from '@tanqory/mies-icons/web';
import Link from 'next/link';

interface HeaderProps {
  cartCount: number;
}

export function Header({ cartCount }: HeaderProps) {
  return (
    <header className="border-b border-black bg-white sticky top-0 z-50">
      <Container>
        <Stack 
          direction="row" 
          spacing="lg" 
          align="center" 
          justify="between"
          className="py-16"
        >
          {/* Logo */}
          <Link href="/" className="text-2xl font-medium text-black">
            My Store
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex">
            <Stack direction="row" spacing="lg">
              <Link href="/products" className="text-base text-black hover:text-brand">
                Products
              </Link>
              <Link href="/categories" className="text-base text-black hover:text-brand">
                Categories
              </Link>
              <Link href="/about" className="text-base text-black hover:text-brand">
                About
              </Link>
            </Stack>
          </nav>
          
          {/* Actions */}
          <Stack direction="row" spacing="base" align="center">
            <Button variant="ghost" size="sm">
              <SearchIcon size={20} />
            </Button>
            
            <Button variant="ghost" size="sm" className="relative">
              <CartIcon size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            
            <Button variant="ghost" size="sm">
              <UserIcon size={20} />
            </Button>
          </Stack>
        </Stack>
      </Container>
    </header>
  );
}
```

### Shopping Cart Component

```tsx
// components/ShoppingCart.tsx
import { Card, CardHeader, CardContent } from '@tanqory/mies-core-web/card';
import { Button } from '@tanqory/mies-core-web/button';
import { Stack } from '@tanqory/mies-core-web/layout';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface ShoppingCartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export function ShoppingCart({ 
  items, 
  onUpdateQuantity, 
  onRemove, 
  onCheckout 
}: ShoppingCartProps) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Card padding="lg" bordered>
      <CardHeader>
        <h2 className="text-xl font-medium text-black">
          Shopping Cart ({items.length} items)
        </h2>
      </CardHeader>
      
      <CardContent>
        <Stack spacing="base">
          {/* Cart Items */}
          <div className="space-y-16">
            {items.map((item) => (
              <div key={item.id} className="flex gap-16 p-12 border border-black">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 object-cover border border-black"
                />
                
                <div className="flex-1">
                  <h4 className="text-base font-medium text-black">
                    {item.name}
                  </h4>
                  <p className="text-sm text-black opacity-70">
                    ${item.price.toFixed(2)} each
                  </p>
                </div>
                
                <div className="flex items-center gap-8">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center text-black">
                    {item.quantity}
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Total */}
          <div className="border-t border-black pt-16">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-black">
                Total: ${total.toFixed(2)}
              </span>
              <Button 
                variant="primary" 
                size="lg"
                onClick={onCheckout}
                disabled={items.length === 0}
              >
                Checkout
              </Button>
            </div>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
```

## State Management

### Context-based State

```tsx
// contexts/CartContext.tsx
import { createContext, useContext, useReducer, ReactNode } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          items: updatedItems,
          total: calculateTotal(updatedItems),
        };
      }
      
      const newItems = [...state.items, { ...action.payload, quantity: 1 }];
      return {
        items: newItems,
        total: calculateTotal(newItems),
      };
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      return {
        items: newItems,
        total: calculateTotal(newItems),
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      ).filter(item => item.quantity > 0);
      
      return {
        items: newItems,
        total: calculateTotal(newItems),
      };
    }
    
    case 'CLEAR_CART':
      return { items: [], total: 0 };
    
    default:
      return state;
  }
}

function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
```

## API Integration

### Data Fetching Hook

```tsx
// hooks/useProducts.ts
import { useState, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  category: string;
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}
```

### Server Actions (Next.js)

```tsx
// app/actions.ts
'use server'

import { revalidatePath } from 'next/cache';

export async function addToCart(productId: string) {
  try {
    // Add product to cart in database
    await fetch(`${process.env.API_URL}/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId }),
    });
    
    revalidatePath('/cart');
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to add to cart' };
  }
}

export async function removeFromCart(itemId: string) {
  try {
    await fetch(`${process.env.API_URL}/cart/${itemId}`, {
      method: 'DELETE',
    });
    
    revalidatePath('/cart');
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to remove from cart' };
  }
}
```

## Performance Optimization

### Image Optimization

```tsx
// components/OptimizedImage.tsx
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false 
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className="object-cover border border-black"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
```

### Code Splitting

```tsx
// Dynamic imports for large components
import dynamic from 'next/dynamic';

const CheckoutForm = dynamic(() => import('./CheckoutForm'), {
  loading: () => <div>Loading checkout...</div>,
});

const ProductReviews = dynamic(() => import('./ProductReviews'), {
  ssr: false, // Client-side only
});
```

### Memoization

```tsx
// Memoized product grid
import { memo } from 'react';

export const ProductGrid = memo(function ProductGrid({ 
  products, 
  onAddToCart 
}: {
  products: Product[];
  onAddToCart: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
});
```

## Testing Strategy

### Component Testing

```tsx
// __tests__/ProductCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from '../components/ProductCard';

const mockProduct = {
  id: '1',
  name: 'Test Product',
  price: '$29.99',
  image: '/test-image.jpg',
  description: 'Test description',
};

describe('ProductCard', () => {
  test('renders product information', () => {
    const onAddToCart = jest.fn();
    
    render(<ProductCard product={mockProduct} onAddToCart={onAddToCart} />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$29.99')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  test('calls onAddToCart when button clicked', () => {
    const onAddToCart = jest.fn();
    
    render(<ProductCard product={mockProduct} onAddToCart={onAddToCart} />);
    
    fireEvent.click(screen.getByText('Add to Cart'));
    expect(onAddToCart).toHaveBeenCalledWith('1');
  });
});
```

### E2E Testing

```tsx
// e2e/shopping-flow.spec.ts
import { test, expect } from '@playwright/test';

test('complete shopping flow', async ({ page }) => {
  await page.goto('/');
  
  // Add product to cart
  await page.click('[data-testid="product-1"] button');
  await expect(page.locator('[data-testid="cart-count"]')).toHaveText('1');
  
  // Go to cart
  await page.click('[data-testid="cart-button"]');
  await expect(page.locator('h1')).toHaveText('Shopping Cart');
  
  // Proceed to checkout
  await page.click('button:has-text("Checkout")');
  await expect(page.locator('h1')).toHaveText('Checkout');
});
```

## Deployment

### Next.js Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
npx vercel deploy
```

### Environment Configuration

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.mystore.com
DATABASE_URL=postgresql://...
STRIPE_SECRET_KEY=sk_...
```

## Monitoring and Analytics

### Performance Monitoring

```tsx
// utils/analytics.ts
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined') {
    // Track with your analytics service
    gtag('event', eventName, properties);
  }
}

// Usage in components
<Button onClick={() => {
  addToCart(product.id);
  trackEvent('add_to_cart', { product_id: product.id });
}}>
  Add to Cart
</Button>
```

### Error Tracking

```tsx
// utils/errorTracking.ts
export function reportError(error: Error, context?: string) {
  if (process.env.NODE_ENV === 'production') {
    // Send to error tracking service
    Sentry.captureException(error, { tags: { context } });
  } else {
    console.error(error);
  }
}
```

## Best Practices

### Code Organization

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI elements
│   └── features/       # Feature-specific components
├── hooks/              # Custom React hooks
├── contexts/           # React contexts
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── app/                # Next.js app directory
    ├── api/            # API routes
    ├── (pages)/        # Page components
    └── globals.css     # Global styles
```

### TypeScript Best Practices

```tsx
// Strong typing for component props
interface StrictComponentProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'base' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
}

// Use discriminated unions for complex state
type LoadingState = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: Product[] }
  | { status: 'error'; error: string };
```

### Accessibility

```tsx
// Always include proper ARIA labels
<Button 
  aria-label={`Add ${product.name} to cart`}
  onClick={() => addToCart(product.id)}
>
  <CartIcon size={16} aria-hidden="true" />
  Add to Cart
</Button>

// Use semantic HTML
<main role="main">
  <section aria-labelledby="products-heading">
    <h2 id="products-heading">Featured Products</h2>
    <ProductGrid products={products} />
  </section>
</main>
```

## Next Steps

You're now ready to build production applications with Tanqory Mies! Continue exploring:

- [Components Reference](/docs/components) - Detailed component documentation
- [Design Tokens](/docs/design-tokens) - Advanced token usage
- [Examples](/docs/examples) - Real-world implementation examples
- [ESLint Plugin](/docs/eslint-plugin) - Enforce design system rules