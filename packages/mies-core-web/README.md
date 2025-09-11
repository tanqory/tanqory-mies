# @tanqory/mies-core-web

Next.js-native React Server Components for the Tanqory Mies design system. Built for App Router with RSC-first approach and zero-JS by default.

## Installation

```bash
npm install @tanqory/mies-core-web @tanqory/mies-tailwind @tanqory/mies-tokens
# or
pnpm add @tanqory/mies-core-web @tanqory/mies-tailwind @tanqory/mies-tokens
```

## Quick Start

### 1. Setup Tailwind + Design Tokens

Configure your Next.js app with the Mies design system:

```css
/* app/globals.css */
@import '@tanqory/mies-tokens/tokens.css';
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';
import { miesPreset } from '@tanqory/mies-tailwind';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [miesPreset],
};

export default config;
```

### 2. Use Components

Import individual components or use the main export:

```tsx
// Individual imports (tree-shakable)
import { Button } from '@tanqory/mies-core-web/button';
import { Card } from '@tanqory/mies-core-web/card';

// Main export
import { Button, Card } from '@tanqory/mies-core-web';

export default function Page() {
  return (
    <Card>
      <h1 className="text-2xl font-sans">Welcome</h1>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}
```

## Components

### Button

RSC-compatible button with design system variants:

```tsx
import { Button } from '@tanqory/mies-core-web/button';

export default function MyPage() {
  return (
    <div className="space-y-16">
      <Button variant="primary">Primary Action</Button>
      <Button variant="secondary">Secondary Action</Button>
      <Button variant="outline">Outline Action</Button>
      <Button size="lg">Large Button</Button>
    </div>
  );
}
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline'`
- `size`: `'sm' | 'base' | 'lg'`
- All standard `button` HTML attributes

### Card

Flexible container component with header, content, and footer sections:

```tsx
import { Card, CardHeader, CardContent, CardFooter } from '@tanqory/mies-core-web/card';
import { Button } from '@tanqory/mies-core-web/button';

export default function ProductCard() {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-sans">Product Title</h2>
      </CardHeader>
      
      <CardContent>
        <p className="text-base">Product description and details.</p>
      </CardContent>
      
      <CardFooter>
        <Button variant="primary">Buy Now</Button>
      </CardFooter>
    </Card>
  );
}
```

**Props:**
- `padding`: `'sm' | 'base' | 'lg'`
- `bordered`: `boolean` (default: `true`)

### Form Components

Server-action compatible form components:

```tsx
import { 
  Form, 
  FormField, 
  Label, 
  Input, 
  Textarea, 
  Select, 
  FormActions 
} from '@tanqory/mies-core-web/form';
import { Button } from '@tanqory/mies-core-web/button';

async function submitForm(formData: FormData) {
  'use server';
  
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  
  // Process form submission
}

export default function ContactForm() {
  return (
    <Form action={submitForm}>
      <FormField>
        <Label required>Name</Label>
        <Input name="name" required />
      </FormField>
      
      <FormField>
        <Label>Email</Label>
        <Input name="email" type="email" />
      </FormField>
      
      <FormField>
        <Label>Message</Label>
        <Textarea name="message" rows={6} />
      </FormField>
      
      <FormActions>
        <Button type="submit" variant="primary">Send Message</Button>
        <Button type="button" variant="outline">Cancel</Button>
      </FormActions>
    </Form>
  );
}
```

### Table

Data table components with responsive design:

```tsx
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHeaderCell, 
  TableCell 
} from '@tanqory/mies-core-web/table';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

export default function UsersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell align="right">Actions</TableHeaderCell>
        </TableRow>
      </TableHeader>
      
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={user.id} index={index}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell align="right">
              <Button size="sm" variant="outline">Edit</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

### Layout Components

App Router-compatible layout components:

```tsx
import { 
  Page, 
  Header, 
  Toolbar, 
  Container, 
  Section, 
  Stack 
} from '@tanqory/mies-core-web/layout';
import { Button } from '@tanqory/mies-core-web/button';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Page>
      <Header sticky>
        <Container>
          <Toolbar>
            <h1 className="text-xl font-sans">My App</h1>
            <Stack direction="row" spacing="sm">
              <Button variant="outline" size="sm">Login</Button>
              <Button variant="primary" size="sm">Sign Up</Button>
            </Stack>
          </Toolbar>
        </Container>
      </Header>
      
      <Section>
        <Container>
          {children}
        </Container>
      </Section>
    </Page>
  );
}
```

**Layout Components:**
- `Page`: Main page wrapper with responsive padding
- `Header`: Site header with sticky option
- `Toolbar`: Horizontal layout for actions
- `Container`: Centered content wrapper with max-width
- `Section`: Vertical spacing sections
- `Stack`: Flexible layout stack (row/column)

## Server Actions Integration

All form components work seamlessly with Next.js server actions:

```tsx
// app/contact/page.tsx
import { Form, FormField, Label, Input, FormActions } from '@tanqory/mies-core-web/form';
import { Button } from '@tanqory/mies-core-web/button';
import { redirect } from 'next/navigation';

async function handleSubmit(formData: FormData) {
  'use server';
  
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
  };
  
  // Process the form data
  await saveToDatabase(data);
  
  // Redirect after successful submission
  redirect('/thank-you');
}

export default function ContactPage() {
  return (
    <Form action={handleSubmit}>
      <FormField>
        <Label required>Name</Label>
        <Input name="name" required />
      </FormField>
      
      <FormField>
        <Label required>Email</Label>
        <Input name="email" type="email" required />
      </FormField>
      
      <FormActions>
        <Button type="submit">Submit</Button>
      </FormActions>
    </Form>
  );
}
```

## Zero-JS Philosophy

All components are designed as React Server Components by default:

- **No client-side JavaScript** unless explicitly needed
- **Server-rendered** HTML with CSS-only interactions
- **Progressive enhancement** through CSS `:hover` and `:focus` states
- **Form submissions** use native browser behavior + server actions

For client-side interactivity, add `'use client'` directive:

```tsx
'use client';

import { useState } from 'react';
import { Button } from '@tanqory/mies-core-web/button';

export default function InteractiveComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <Button onClick={() => setCount(count + 1)}>
      Count: {count}
    </Button>
  );
}
```

## Design System Integration

Components automatically use design tokens through CSS variables:

- **Colors**: `brand`, `black`, `white`
- **Spacing**: `4`, `8`, `12`, `16`, `24`, `32`
- **Typography**: Inter font family, `xs`-`2xl` scale
- **Borders**: 1px width, no rounded corners
- **No shadows**: Flat design system

All styling is applied through Tailwind CSS classes that map to design tokens.

## TypeScript Support

Fully typed components with IntelliSense support:

```typescript
import type { ButtonProps } from '@tanqory/mies-core-web/button';
import type { CardProps } from '@tanqory/mies-core-web/card';

// All props are properly typed
const MyButton: React.FC<ButtonProps> = ({ variant, size, children }) => {
  return <Button variant={variant} size={size}>{children}</Button>;
};
```

## Requirements

- **Next.js**: 15.0+ (App Router)
- **React**: 18.0+
- **Tailwind CSS**: 3.0+
- **@tanqory/mies-tailwind**: Latest
- **@tanqory/mies-tokens**: Latest

## Performance

- **Tree-shakable**: Import only the components you need
- **Zero runtime CSS**: All styles compile to static CSS
- **RSC-first**: Minimal client-side JavaScript
- **CSS variables**: Consistent theming without JS overhead

## Examples

### Dashboard Layout

```tsx
import { 
  Page, 
  Header, 
  Toolbar, 
  Container, 
  Section, 
  Stack 
} from '@tanqory/mies-core-web/layout';
import { Card, CardHeader, CardContent } from '@tanqory/mies-core-web/card';
import { Button } from '@tanqory/mies-core-web/button';

export default function Dashboard() {
  return (
    <Page>
      <Header sticky>
        <Container>
          <Toolbar>
            <h1 className="text-xl font-sans">Dashboard</h1>
            <Button variant="primary">New Project</Button>
          </Toolbar>
        </Container>
      </Header>
      
      <Section>
        <Container>
          <Stack spacing="lg">
            <Card>
              <CardHeader>
                <h2 className="text-lg font-sans">Overview</h2>
              </CardHeader>
              <CardContent>
                <p>Dashboard metrics and data</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <h2 className="text-lg font-sans">Recent Activity</h2>
              </CardHeader>
              <CardContent>
                <p>Activity feed content</p>
              </CardContent>
            </Card>
          </Stack>
        </Container>
      </Section>
    </Page>
  );
}
```

### Data Management

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from '@tanqory/mies-core-web/table';
import { Button } from '@tanqory/mies-core-web/button';
import { Form, FormField, Label, Input, Select } from '@tanqory/mies-core-web/form';

async function updateUser(formData: FormData) {
  'use server';
  // Handle form submission
}

export default function UserManagement() {
  const users = await getUsers(); // Server-side data fetching
  
  return (
    <div className="space-y-32">
      <Form action={updateUser}>
        <div className="grid grid-cols-3 gap-16">
          <FormField>
            <Label>Name</Label>
            <Input name="name" />
          </FormField>
          
          <FormField>
            <Label>Role</Label>
            <Select name="role">
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </Select>
          </FormField>
          
          <FormField className="flex items-end">
            <Button type="submit">Add User</Button>
          </FormField>
        </div>
      </Form>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell align="right">Actions</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user.id} index={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell align="right">
                <div className="flex gap-8">
                  <Button size="sm" variant="outline">Edit</Button>
                  <Button size="sm" variant="outline">Delete</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
```