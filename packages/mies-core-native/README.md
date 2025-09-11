# @tanqory/mies-core-native

React Native components for the Tanqory Mies design system. Built with StyleSheet and design tokens for cross-platform consistency.

## Installation

```bash
npm install @tanqory/mies-core-native @tanqory/mies-tokens
# or
pnpm add @tanqory/mies-core-native @tanqory/mies-tokens
```

## Quick Start

### 1. Import Components

Import individual components for tree-shaking or use the main export:

```tsx
// Individual imports (recommended for tree-shaking)
import { Button } from '@tanqory/mies-core-native/button';
import { Card } from '@tanqory/mies-core-native/card';

// Main export
import { Button, Card } from '@tanqory/mies-core-native';

export default function MyScreen() {
  return (
    <Card>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}
```

### 2. Design Tokens Integration

All components automatically use design tokens from `@tanqory/mies-tokens/tokens.json`:

```tsx
import { Container, Header, Stack } from '@tanqory/mies-core-native/layout';
import { Button } from '@tanqory/mies-core-native/button';

export default function App() {
  return (
    <Container safe>
      <Header>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>My App</Text>
      </Header>
      
      <Stack direction="column" spacing="lg" style={{ flex: 1, padding: 24 }}>
        <Button variant="primary">Primary Action</Button>
        <Button variant="secondary">Secondary Action</Button>
        <Button variant="outline">Outline Action</Button>
      </Stack>
    </Container>
  );
}
```

## Components

### Button

Cross-platform button with design system variants:

```tsx
import { Button } from '@tanqory/mies-core-native/button';

export default function ButtonExample() {
  return (
    <View style={{ gap: 16 }}>
      <Button variant="primary" onPress={() => console.log('Primary')}>
        Primary Action
      </Button>
      <Button variant="secondary" size="lg">
        Large Secondary
      </Button>
      <Button variant="outline" disabled>
        Disabled Outline
      </Button>
    </View>
  );
}
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline'`
- `size`: `'sm' | 'base' | 'lg'`
- `disabled`: `boolean`
- All `TouchableOpacity` props

### Card

Container component with header, content, and footer sections:

```tsx
import { Card, CardHeader, CardContent, CardFooter } from '@tanqory/mies-core-native/card';
import { Button } from '@tanqory/mies-core-native/button';

export default function ProductCard() {
  return (
    <Card bordered>
      <CardHeader>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>Product Title</Text>
      </CardHeader>
      
      <CardContent>
        <Text>Product description and details go here.</Text>
      </CardContent>
      
      <CardFooter>
        <Button variant="primary" size="sm">
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
```

**Props:**
- `padding`: `'sm' | 'base' | 'lg'`
- `bordered`: `boolean` (default: `true`)

### Form Components

Native form components with consistent styling:

```tsx
import { 
  Form, 
  FormField, 
  Label, 
  Input, 
  Textarea, 
  FormActions 
} from '@tanqory/mies-core-native/form';
import { Button } from '@tanqory/mies-core-native/button';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Form>
      <FormField>
        <Label required>Name</Label>
        <Input 
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
      </FormField>
      
      <FormField>
        <Label>Message</Label>
        <Textarea
          value={message}
          onChangeText={setMessage}
          placeholder="Enter your message"
          rows={4}
        />
      </FormField>
      
      <FormActions direction="row" spacing="base">
        <Button variant="primary" style={{ flex: 1 }}>
          Send
        </Button>
        <Button variant="outline" style={{ flex: 1 }}>
          Cancel
        </Button>
      </FormActions>
    </Form>
  );
}
```

**Form Components:**
- `Form`: Container with configurable spacing
- `FormField`: Individual field wrapper
- `Label`: Field labels with optional required indicator
- `Input`: Single-line text input
- `Textarea`: Multi-line text input
- `ErrorMessage`: Error display component
- `FormActions`: Action buttons container

### List Components

Flexible list components for data display:

```tsx
import { 
  List, 
  ListItem, 
  ListItemText, 
  ListItemAction,
  ListSection 
} from '@tanqory/mies-core-native/list';
import { Button } from '@tanqory/mies-core-native/button';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

export default function UsersList() {
  return (
    <ListSection title="Users">
      <List
        data={users}
        spacing="sm"
        renderItem={({ item }) => (
          <ListItem 
            key={item.id}
            divider
            onPress={() => console.log('User selected:', item.name)}
          >
            <ListItemText 
              primary={item.name}
              secondary={item.email}
            />
            <ListItemAction>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </ListItemAction>
          </ListItem>
        )}
      />
    </ListSection>
  );
}
```

**List Components:**
- `List`: FlatList wrapper with design system spacing
- `ListItem`: Touchable list item container
- `ListItemText`: Primary/secondary text layout
- `ListItemAction`: Action area for buttons
- `ListSection`: Section with optional title header

### Layout Components

Screen layout and structure components:

```tsx
import { 
  Screen, 
  Container, 
  Header, 
  Section, 
  Stack, 
  Divider, 
  Spacer 
} from '@tanqory/mies-core-native/layout';
import { Button } from '@tanqory/mies-core-native/button';

export default function ProfileScreen() {
  return (
    <Screen safe scrollable>
      <Header bordered>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Profile</Text>
        <Button variant="outline" size="sm">
          Edit
        </Button>
      </Header>
      
      <Container padding="base">
        <Section spacing="lg">
          <Stack direction="column" spacing="base">
            <Text style={{ fontSize: 24, fontWeight: '700' }}>John Doe</Text>
            <Text style={{ fontSize: 16, opacity: 0.7 }}>Software Engineer</Text>
          </Stack>
          
          <Divider />
          
          <Stack direction="column" spacing="sm">
            <Text style={{ fontSize: 16, fontWeight: '600' }}>Contact</Text>
            <Text>john@example.com</Text>
            <Text>+1 (555) 123-4567</Text>
          </Stack>
          
          <Spacer size="lg" />
          
          <Stack direction="row" spacing="base">
            <Button variant="primary" style={{ flex: 1 }}>
              Message
            </Button>
            <Button variant="outline" style={{ flex: 1 }}>
              Call
            </Button>
          </Stack>
        </Section>
      </Container>
    </Screen>
  );
}
```

**Layout Components:**
- `Screen`: Full-screen container with safe area and scroll options
- `Container`: Content wrapper with padding options
- `Header`: App header with border and safe area
- `Section`: Content sections with vertical spacing
- `Stack`: Flexible layout (row/column) with gap control
- `Divider`: Horizontal/vertical separators
- `Spacer`: Fixed spacing elements

## Design System Integration

All components enforce the Mies design system constraints:

### Colors
- **Brand**: `#E1FF00` (lime green)
- **Black**: `#000000`
- **White**: `#FFFFFF`

### Typography
- **Font Family**: Inter (system fallback)
- **Sizes**: `xs`, `sm`, `base`, `lg`, `xl`, `2xl`
- **Line Heights**: Optimized for each size

### Spacing
- **Scale**: `4`, `8`, `12`, `16`, `24`, `32` (pixels)
- **Consistent gap/padding** across all components

### Design Constraints
- **No shadows**: Flat design system
- **No border radius**: Sharp, geometric edges
- **No gradients**: Solid color backgrounds only
- **1px borders**: Consistent border width

## Props API Consistency

Components maintain consistent props API with the web version:

```tsx
// Web version
<Button variant="primary" size="lg">Click me</Button>
<Card padding="base" bordered>Content</Card>

// Native version (same API)
<Button variant="primary" size="lg">Click me</Button>
<Card padding="base" bordered>Content</Card>
```

## TypeScript Support

Fully typed components with IntelliSense:

```typescript
import type { ButtonProps } from '@tanqory/mies-core-native/button';
import type { CardProps } from '@tanqory/mies-core-native/card';

const MyButton: React.FC<ButtonProps> = ({ variant, size, children }) => {
  return <Button variant={variant} size={size}>{children}</Button>;
};
```

## Performance

- **StyleSheet optimization**: All styles use `StyleSheet.create()`
- **Tree-shakable**: Import only the components you need
- **Token-based**: Consistent theming without runtime overhead
- **Native performance**: Built on React Native's optimized components

## Examples

### Settings Screen

```tsx
import { Screen, Header, Container, Section } from '@tanqory/mies-core-native/layout';
import { List, ListItem, ListItemText } from '@tanqory/mies-core-native/list';

const settings = [
  { id: 1, title: 'Notifications', subtitle: 'Manage push notifications' },
  { id: 2, title: 'Privacy', subtitle: 'Control your data' },
  { id: 3, title: 'Account', subtitle: 'Profile and security settings' },
];

export default function SettingsScreen() {
  return (
    <Screen safe>
      <Header bordered>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Settings</Text>
      </Header>
      
      <Container>
        <Section>
          <List
            data={settings}
            renderItem={({ item }) => (
              <ListItem 
                key={item.id}
                divider
                onPress={() => console.log('Navigate to:', item.title)}
              >
                <ListItemText 
                  primary={item.title}
                  secondary={item.subtitle}
                />
              </ListItem>
            )}
          />
        </Section>
      </Container>
    </Screen>
  );
}
```

### Form Screen

```tsx
import { Screen, Header, Container } from '@tanqory/mies-core-native/layout';
import { Form, FormField, Label, Input, FormActions } from '@tanqory/mies-core-native/form';
import { Button } from '@tanqory/mies-core-native/button';
import { Card, CardContent } from '@tanqory/mies-core-native/card';

export default function CreateAccountScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = () => {
    console.log('Account created:', { email, password });
  };

  return (
    <Screen safe scrollable>
      <Header bordered>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Create Account</Text>
      </Header>
      
      <Container padding="base">
        <Card padding="lg">
          <CardContent>
            <Form spacing="lg">
              <FormField>
                <Label required>Email Address</Label>
                <Input
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </FormField>
              
              <FormField>
                <Label required>Password</Label>
                <Input
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Enter your password"
                  secureTextEntry
                />
              </FormField>
              
              <FormActions direction="column" spacing="base">
                <Button 
                  variant="primary" 
                  onPress={handleSubmit}
                  style={{ width: '100%' }}
                >
                  Create Account
                </Button>
                <Button 
                  variant="outline"
                  style={{ width: '100%' }}
                >
                  Back to Login
                </Button>
              </FormActions>
            </Form>
          </CardContent>
        </Card>
      </Container>
    </Screen>
  );
}
```

### Dashboard Screen

```tsx
import { Screen, Header, Container, Section, Stack } from '@tanqory/mies-core-native/layout';
import { Card, CardHeader, CardContent } from '@tanqory/mies-core-native/card';
import { Button } from '@tanqory/mies-core-native/button';

const stats = [
  { title: 'Total Users', value: '1,234', growth: '+12%' },
  { title: 'Revenue', value: '$45,678', growth: '+8%' },
  { title: 'Orders', value: '892', growth: '+15%' },
];

export default function DashboardScreen() {
  return (
    <Screen safe scrollable>
      <Header bordered>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Dashboard</Text>
        <Button variant="primary" size="sm">
          Refresh
        </Button>
      </Header>
      
      <Container padding="base">
        <Section spacing="lg">
          <Stack direction="column" spacing="base">
            {stats.map((stat, index) => (
              <Card key={index} padding="base" bordered>
                <CardHeader>
                  <Text style={{ fontSize: 14, opacity: 0.7 }}>{stat.title}</Text>
                </CardHeader>
                <CardContent>
                  <Stack direction="row" justify="space-between" align="center">
                    <Text style={{ fontSize: 24, fontWeight: '700' }}>
                      {stat.value}
                    </Text>
                    <Text style={{ fontSize: 12, color: '#00AA00' }}>
                      {stat.growth}
                    </Text>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Section>
      </Container>
    </Screen>
  );
}
```

## Requirements

- **React Native**: 0.75.0+
- **React**: 18.0+
- **@tanqory/mies-tokens**: Latest

## Platform Support

- **iOS**: 12.0+
- **Android**: API Level 21+
- **Cross-platform consistency** with web components through shared design tokens