# Component Lifecycle

Understanding how Tanqory Mies components work throughout their lifecycle - from creation to interaction to optimization.

## Component Architecture

### Component Anatomy

Every Tanqory Mies component follows a consistent structure:

```tsx
// Component interface
interface ComponentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'base' | 'lg';
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// Component implementation
export function Component({
  variant = 'primary',
  size = 'base',
  disabled = false,
  children,
  className,
  style,
  ...props
}: ComponentProps) {
  const baseClasses = 'font-sans border-1 border-black';
  const variantClasses = {
    primary: 'bg-brand text-black',
    secondary: 'bg-white text-black border-brand',
    outline: 'bg-transparent text-black border-black',
  };
  const sizeClasses = {
    sm: 'px-12 py-8 text-sm',
    base: 'px-16 py-12 text-base',
    lg: 'px-24 py-16 text-lg',
  };

  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-50 pointer-events-none',
    className
  );

  return (
    <element className={classes} style={style} {...props}>
      {children}
    </element>
  );
}
```

### Component States

#### 1. Creation Phase
When a component is first instantiated:

- **Props validation**: TypeScript ensures type safety
- **Default values**: Applied for optional props
- **Style computation**: Classes are calculated based on props
- **Accessibility**: ARIA attributes and roles are set

#### 2. Render Phase
During component rendering:

- **Style application**: CSS classes are applied
- **Content rendering**: Children and text content are rendered
- **Event binding**: Interaction handlers are attached
- **Ref forwarding**: DOM references are passed through

#### 3. Interaction Phase
When users interact with components:

- **State changes**: Visual feedback for hover, focus, active states
- **Event handling**: Click, keyboard, and touch events
- **Accessibility**: Screen reader announcements and keyboard navigation
- **Performance**: Debounced updates and optimized re-renders

#### 4. Update Phase
When props or state change:

- **Diff calculation**: React determines what needs to update
- **Style recalculation**: New classes are computed if needed
- **DOM updates**: Only changed attributes are updated
- **Animation**: Smooth transitions between states

#### 5. Cleanup Phase
When components unmount:

- **Event cleanup**: Remove event listeners
- **Animation cleanup**: Cancel in-progress animations
- **Memory cleanup**: Clear references and timers

## State Management

### Visual States

All components support consistent visual states:

```tsx
// State examples
<Button>Default</Button>
<Button className="hover:bg-black hover:text-brand">Hover</Button>
<Button className="focus:outline-2 focus:outline-brand">Focus</Button>
<Button className="active:scale-95">Active</Button>
<Button disabled>Disabled</Button>
```

### State Transitions

Smooth transitions between states:

```css
/* Base transition for all components */
.component {
  transition: all 150ms ease-in-out;
}

/* Hover state */
.component:hover {
  background-color: var(--mies-color-black);
  color: var(--mies-color-brand);
}

/* Focus state */
.component:focus {
  outline: 2px solid var(--mies-color-brand);
  outline-offset: 2px;
}
```

### Loading States

Components handle loading states gracefully:

```tsx
// Loading button
<Button disabled loading>
  <LoadingSpinner size={16} />
  Processing...
</Button>

// Loading card
<Card>
  {loading ? <Skeleton /> : <Content />}
</Card>
```

## Event Handling

### User Interactions

Components handle various interaction types:

```tsx
interface InteractionProps {
  onClick?: (event: MouseEvent) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}

// Implementation
export function InteractiveComponent({ onClick, onKeyDown, ...props }) {
  const handleClick = (event: MouseEvent) => {
    if (disabled) return;
    onClick?.(event);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick(event as any);
    }
    onKeyDown?.(event);
  };

  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      {...props}
    />
  );
}
```

### Accessibility Events

Proper accessibility event handling:

```tsx
// Screen reader announcements
const announceToScreenReader = (message: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => document.body.removeChild(announcement), 1000);
};

// Usage in components
<Button onClick={() => {
  addToCart(product);
  announceToScreenReader('Product added to cart');
}}>
  Add to Cart
</Button>
```

## Performance Optimization

### Rendering Optimization

Components are optimized for performance:

```tsx
// Memoization for expensive calculations
const ExpensiveComponent = React.memo(({ data, config }) => {
  const processedData = useMemo(() => {
    return processLargeDataset(data, config);
  }, [data, config]);

  return <div>{processedData}</div>;
});

// Callback memoization
const OptimizedButton = ({ onSubmit, formData }) => {
  const handleSubmit = useCallback(() => {
    onSubmit(formData);
  }, [onSubmit, formData]);

  return <Button onClick={handleSubmit}>Submit</Button>;
};
```

### Bundle Optimization

Tree-shaking friendly exports:

```tsx
// Individual component imports
import { Button } from '@tanqory/mies-core-web/button';
import { Card } from '@tanqory/mies-core-web/card';

// Avoid importing everything
// import * as Mies from '@tanqory/mies-core-web'; // ❌
```

### CSS Optimization

Minimal CSS footprint:

```css
/* Only include used utilities */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Component-specific styles are minimal */
.mies-button {
  /* Only essential styles, leveraging CSS variables */
}
```

## Error Boundaries

Components include error handling:

```tsx
class ComponentErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-16 border border-black bg-white">
          <p className="text-black">Something went wrong.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
```

## Testing Lifecycle

### Unit Testing

Components include comprehensive tests:

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies variant styles', () => {
    render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-brand');
  });

  test('supports keyboard navigation', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Submit</Button>);
    const button = screen.getByRole('button');
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Integration Testing

Testing component interactions:

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ShoppingCart } from './ShoppingCart';

describe('Shopping Cart Integration', () => {
  test('adds items to cart', () => {
    render(<ShoppingCart />);
    
    const addButton = screen.getByText('Add to Cart');
    fireEvent.click(addButton);
    
    expect(screen.getByText('1 item in cart')).toBeInTheDocument();
  });

  test('updates total price', () => {
    render(<ShoppingCart items={mockItems} />);
    
    expect(screen.getByText('Total: $25.99')).toBeInTheDocument();
  });
});
```

### Visual Testing

Automated visual regression testing:

```tsx
// Storybook stories for visual testing
export const ButtonVariants = () => (
  <div className="space-y-8">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
  </div>
);

export const ButtonStates = () => (
  <div className="space-y-8">
    <Button>Default</Button>
    <Button disabled>Disabled</Button>
    <Button loading>Loading</Button>
  </div>
);
```

## Debugging Components

### Development Tools

Built-in debugging features:

```tsx
// Development-only prop validation
const Button = ({ variant, size, ...props }) => {
  if (process.env.NODE_ENV === 'development') {
    if (variant && !['primary', 'secondary', 'outline'].includes(variant)) {
      console.warn(`Invalid variant "${variant}" for Button component`);
    }
  }

  // Component implementation...
};

// Debug mode
const DebugButton = ({ debug, ...props }) => {
  if (debug) {
    console.log('Button props:', props);
  }
  
  return <Button {...props} />;
};
```

### Performance Profiling

Monitoring component performance:

```tsx
// Performance measurement
const ProfiledComponent = ({ children, name }) => {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      console.log(`${name} render time: ${endTime - startTime}ms`);
    };
  });

  return children;
};

// Usage
<ProfiledComponent name="ProductGrid">
  <ProductGrid products={products} />
</ProfiledComponent>
```

## Component Patterns

### Composition Pattern

Building complex components from simple ones:

```tsx
// Simple components
<Card>
  <Card.Header>
    <Card.Title>Product Name</Card.Title>
  </Card.Header>
  <Card.Content>
    <Card.Description>Product description</Card.Description>
    <Card.Price>$29.99</Card.Price>
  </Card.Content>
  <Card.Footer>
    <Button variant="primary">Add to Cart</Button>
  </Card.Footer>
</Card>
```

### Render Props Pattern

Flexible component rendering:

```tsx
<DataFetcher url="/api/products">
  {({ data, loading, error }) => {
    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage error={error} />;
    return <ProductGrid products={data} />;
  }}
</DataFetcher>
```

### Compound Components

Related components that work together:

```tsx
<Tabs defaultValue="description">
  <Tabs.List>
    <Tabs.Trigger value="description">Description</Tabs.Trigger>
    <Tabs.Trigger value="reviews">Reviews</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="description">
    Product description content
  </Tabs.Content>
  <Tabs.Content value="reviews">
    Customer reviews content
  </Tabs.Content>
</Tabs>
```

## Next Steps

Now that you understand component lifecycle, continue with:

- [Building with Mies](/docs/getting-started/building-with-mies) - Practical implementation guide
- [Components](/docs/components) - Explore available components
- [Examples](/docs/examples) - See real-world usage patterns