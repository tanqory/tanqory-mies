# Components

Tanqory Mies provides a comprehensive set of components built for e-commerce interfaces.

## Web Components

### Installation

```bash
npm install @tanqory/mies-core-web
```

### Usage

```jsx
import { Button, Card } from '@tanqory/mies-core-web';

function ProductCard() {
  return (
    <Card>
      <h2>Product Title</h2>
      <Button>Add to Cart</Button>
    </Card>
  );
}
```

## React Native Components

### Installation

```bash
npm install @tanqory/mies-core-native
```

### Usage

```jsx
import { Button, Card } from '@tanqory/mies-core-native';

function ProductCard() {
  return (
    <Card>
      <Text>Product Title</Text>
      <Button title="Add to Cart" />
    </Card>
  );
}
```

## Available Components

- **Button** - Primary, secondary, and outline variants
- **Card** - Container for product information
- **Form** - Input fields, labels, and validation
- **Layout** - Headers, containers, and grid systems
- **Table** - Data display for web interfaces
- **List** - Vertical data display for mobile interfaces