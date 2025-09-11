# Tanqory Mies - Web Demo Application

Demo Next.js 15 application showcasing the Tanqory Mies design system for web applications.

## Features

- **Next.js 15** with App Router
- **React Server Components** (Zero-JS by default)
- **Tanqory Mies Design System** integration
- **Server Actions** for form handling
- **No shadows, gradients, or border radius** (design constraints)
- **Cross-platform design tokens**

## Pages

### 🏠 Home (`/`)
- Hero section with design system overview
- Component showcase (Buttons, Cards)
- Feature highlights with icons
- Call-to-action sections

### 📦 Products (`/products`)
- Server-side data fetching with mock API
- Responsive data table with sorting
- Product inventory management UI
- Statistics dashboard cards

### ✏️ New Product (`/new`)
- Comprehensive form with server actions
- Form validation and error handling
- Multi-section layout (Basic Info, Pricing, Additional Details)
- Server-side form processing with console logging

## Design System Usage

### Components Used
- **Layout**: `Page`, `Header`, `Container`, `Section`, `Stack`
- **Forms**: `Form`, `FormField`, `Label`, `Input`, `Textarea`, `Select`, `FormActions`
- **Data**: `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableCell`
- **UI**: `Button`, `Card`, `CardHeader`, `CardContent`
- **Icons**: `CartIcon`, `BoxIcon`, `TruckIcon`, `CreditCardIcon`, `ChartIcon`, `UserIcon`, `TagIcon`, `SearchIcon`

### Design Constraints
- **Colors**: Brand (`#E1FF00`), Black (`#000000`), White (`#FFFFFF`)
- **Typography**: Inter font family, `xs`-`2xl` scale
- **Spacing**: `4`, `8`, `12`, `16`, `24`, `32` pixel scale
- **No shadows**: Flat design system
- **No border radius**: Sharp geometric edges
- **No gradients**: Solid color backgrounds only

## Getting Started

### Prerequisites
- Node.js 20+
- pnpm 8+

### Development

```bash
# From the monorepo root
pnpm install

# Start the development server
cd examples/web-app
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## Key Technical Features

### 🔧 Server Actions
The `/new` page demonstrates Next.js server actions:

```tsx
async function createProduct(formData: FormData) {
  'use server';
  
  const productData = {
    name: formData.get('name') as string,
    // ... other fields
  };
  
  console.log('Creating product:', productData);
  redirect('/products');
}
```

### 📊 Server-Side Data Fetching
The `/products` page shows RSC data fetching:

```tsx
async function getProducts() {
  // Simulates API call
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockData;
}

export default async function ProductsPage() {
  const products = await getProducts();
  // ... render components
}
```

### 🎨 Design Token Integration
All styling uses the Mies design system:

```tsx
// Tailwind classes map to design tokens
<Button className="bg-brand text-black border-1 border-black">
  Click me
</Button>

// CSS variables from @tanqory/mies-tokens
// --mies-color-brand: #E1FF00
// --mies-color-black: #000000
// --mies-border-width: 1px
```

### 🖼️ Icon Usage
Cross-platform icons from `@tanqory/mies-icons`:

```tsx
import { CartIcon, BoxIcon } from '@tanqory/mies-icons/web';

<CartIcon size={24} className="text-brand" />
<BoxIcon size={16} className="text-black" />
```

## Performance Optimizations

- **Zero-JS by default**: All components are RSC-compatible
- **Tree-shaking**: Individual component imports
- **Static generation**: Pages are statically generated where possible
- **Optimized fonts**: Inter font with `next/font`
- **Minimal CSS**: Design tokens compile to efficient CSS

## File Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind + design tokens
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page
│   ├── products/
│   │   └── page.tsx        # Products table demo
│   └── new/
│       └── page.tsx        # Form demo with server actions
├── components/             # (Future custom components)
└── lib/                   # (Future utilities)
```

## Environment Requirements

- **Next.js**: 15.0+
- **React**: 18.0+
- **Node.js**: 20.0+
- **TypeScript**: 5.0+

## Deployment

This application can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Docker** containers
- Any **Node.js** hosting platform

## Learn More

- [Tanqory Mies Design System Documentation](../../README.md)
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [React Server Components](https://react.dev/reference/react/use-server)
- [Tailwind CSS](https://tailwindcss.com/docs)