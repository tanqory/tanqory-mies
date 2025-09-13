# Quick Start Code

Get up and running with Tanqory Mies components in minutes with these practical code examples.

## Web Setup

### Installation
```bash
npm install @tanqory/mies-core-web @tanqory/mies-tailwind @tanqory/mies-tokens
```

### Basic Configuration
```javascript
// tailwind.config.js
module.exports = require('@tanqory/mies-tailwind');
```

```css
/* app.css */
@import '@tanqory/mies-tokens/tokens.css';
```

### Your First Component
```jsx
import { Button, Card } from '@tanqory/mies-core-web';

export function ProductCard({ product }) {
  return (
    <Card padding="base" bordered>
      <h3 className="text-lg font-medium text-black">
        {product.name}
      </h3>
      <p className="text-base text-black">
        {product.price}
      </p>
      <Button variant="primary">
        Add to Cart
      </Button>
    </Card>
  );
}
```

## Mobile Setup

### React Native Installation
```bash
npm install @tanqory/mies-core-native @tanqory/mies-tokens
```

### Basic Component
```jsx
import { Button, Card } from '@tanqory/mies-core-native';

export function ProductCard({ product }) {
  return (
    <Card padding="base" bordered>
      <Text style={styles.title}>
        {product.name}
      </Text>
      <Text style={styles.price}>
        {product.price}
      </Text>
      <Button variant="primary" onPress={() => addToCart(product)}>
        Add to Cart
      </Button>
    </Card>
  );
}
```

## Essential Patterns

### Layout Components
```jsx
import { Stack, Grid, Container } from '@tanqory/mies-core-web';

// Vertical layout
<Stack spacing="base">
  <h1>Welcome</h1>
  <p>Get started with Mies</p>
  <Button variant="primary">Begin</Button>
</Stack>

// Grid layout
<Grid columns={3} gap="base">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>

// Container wrapper
<Container maxWidth="lg">
  <Stack spacing="lg">
    <Header />
    <MainContent />
    <Footer />
  </Stack>
</Container>
```

### Form Components
```jsx
import { TextField, Select, Checkbox, Button } from '@tanqory/mies-core-web';

<form onSubmit={handleSubmit}>
  <Stack spacing="base">
    <TextField
      label="Email"
      type="email"
      required
    />
    
    <TextField
      label="Full Name"
      required
    />
    
    <Select
      label="Country"
      options={[
        { label: 'Singapore', value: 'SG' },
        { label: 'United States', value: 'US' },
      ]}
    />
    
    <Checkbox
      label="Subscribe to newsletter"
    />
    
    <Button type="submit" variant="primary">
      Create Account
    </Button>
  </Stack>
</form>
```

## Common Use Cases

### Shopping Cart
```jsx
import { Card, Button, Stack } from '@tanqory/mies-core-web';

export function ShoppingCart({ items, onRemove, onCheckout }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <Card padding="lg">
      <Stack spacing="base">
        <h2 className="text-xl font-medium text-black">
          Shopping Cart
        </h2>
        
        {items.map(item => (
          <div key={item.id} className="flex justify-between items-center p-base border-b border-black">
            <div>
              <h4 className="font-medium text-black">{item.name}</h4>
              <p className="text-black">${item.price}</p>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => onRemove(item.id)}
            >
              Remove
            </Button>
          </div>
        ))}
        
        <div className="flex justify-between items-center pt-base border-t border-black">
          <span className="text-lg font-medium text-black">
            Total: ${total}
          </span>
          <Button variant="primary" onClick={onCheckout}>
            Checkout
          </Button>
        </div>
      </Stack>
    </Card>
  );
}
```

### Navigation Header
```jsx
import { Container, Stack, Button } from '@tanqory/mies-core-web';

export function Header({ user, onSignOut }) {
  return (
    <header className="border-b border-black bg-white">
      <Container>
        <Stack 
          direction="row" 
          justify="between" 
          align="center" 
          className="py-base"
        >
          <h1 className="text-xl font-medium text-black">
            My Store
          </h1>
          
          <nav>
            <Stack direction="row" spacing="base">
              <a href="/products" className="text-black hover:text-brand">
                Products
              </a>
              <a href="/about" className="text-black hover:text-brand">
                About
              </a>
              {user ? (
                <Button variant="outline" size="sm" onClick={onSignOut}>
                  Sign Out
                </Button>
              ) : (
                <Button variant="primary" size="sm">
                  Sign In
                </Button>
              )}
            </Stack>
          </nav>
        </Stack>
      </Container>
    </header>
  );
}
```

## Styling Guidelines

### Using Design Tokens
```jsx
// Colors - only use these three
<div className="bg-white text-black border-brand">
  Content with proper Mies colors
</div>

// Spacing - use 4px increments
<div className="p-base m-lg gap-sm">
  Proper spacing using tokens
</div>

// Typography - limited font sizes
<h1 className="text-2xl font-medium">Large heading</h1>
<p className="text-base">Body text</p>
<small className="text-sm">Small text</small>
```

### Mies Constraints
```jsx
// ✅ Correct - no rounded corners
<Card className="border border-black bg-white">
  Sharp corners following Mies principles
</Card>

// ❌ Incorrect - no rounded corners allowed
<Card className="rounded-lg border border-black bg-white">
  Violates Mies constraints
</Card>

// ✅ Correct - no shadows
<Card className="border border-black bg-white">
  Clean, flat design
</Card>

// ❌ Incorrect - no shadows allowed
<Card className="shadow-lg border border-black bg-white">
  Violates Mies constraints
</Card>
```

## Next Steps

Ready to dive deeper? Continue with:
- [Design Principles](/docs/getting-started/design-principles) - Understand Mies philosophy
- [Architecture Overview](/docs/getting-started/architecture-overview) - Learn system structure
- [Component Lifecycle](/docs/getting-started/component-lifecycle) - Component development process