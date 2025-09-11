import React from 'react';
import { Layout } from '@/components/Layout';
import { CodeBlock } from '@/components/CodeBlock';
import { Container, Section, Stack } from '@tanqory/mies-core-web/layout';
import { Card, CardHeader, CardContent } from '@tanqory/mies-core-web/card';
import { Button } from '@tanqory/mies-core-web/button';
import { 
  CartIcon, 
  BoxIcon, 
  TruckIcon, 
  CreditCardIcon, 
  ChartIcon, 
  UserIcon, 
  TagIcon, 
  SearchIcon 
} from '@tanqory/mies-icons/web';

export default function IconsPage() {
  const icons = [
    { name: 'CartIcon', component: CartIcon, description: 'Shopping cart for e-commerce' },
    { name: 'BoxIcon', component: BoxIcon, description: 'Product package or inventory' },
    { name: 'TruckIcon', component: TruckIcon, description: 'Shipping and delivery' },
    { name: 'CreditCardIcon', component: CreditCardIcon, description: 'Payment and checkout' },
    { name: 'ChartIcon', component: ChartIcon, description: 'Analytics and reporting' },
    { name: 'UserIcon', component: UserIcon, description: 'User profile and account' },
    { name: 'TagIcon', component: TagIcon, description: 'Price tags and categories' },
    { name: 'SearchIcon', component: SearchIcon, description: 'Search functionality' },
  ];

  return (
    <Layout>
      <div className="prose max-w-none">
        <h1>Icons</h1>
        <p className="text-lg font-sans text-black opacity-80 mb-32">
          Cross-platform icon library designed for e-commerce applications. 
          Based on Lucide icons with normalized styling and consistent design constraints.
        </p>

        {/* Icon Catalog */}
        <Section spacing="lg">
          <h2>Icon Catalog</h2>
          <p>All icons are designed with these specifications:</p>
          <ul>
            <li><strong>Size:</strong> 16×16 viewBox (scalable)</li>
            <li><strong>Stroke:</strong> currentColor with 2px width</li>
            <li><strong>Fill:</strong> none (outline style)</li>
            <li><strong>Style:</strong> Clean, minimal, e-commerce focused</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 my-32">
            {icons.map(({ name, component: IconComponent, description }) => (
              <Card key={name} padding="base" bordered>
                <div className="text-center">
                  <div className="flex items-center justify-center h-16 mb-12">
                    <IconComponent size={32} className="text-brand" />
                  </div>
                  <h3 className="text-base font-sans text-black font-medium mb-4">
                    {name}
                  </h3>
                  <p className="text-sm font-sans text-black opacity-70">
                    {description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Usage Examples */}
        <Section spacing="lg">
          <h2>Usage Examples</h2>

          <h3>Web Components (React/Next.js)</h3>
          <CodeBlock language="tsx" title="Individual imports (recommended)">
{`import { CartIcon, BoxIcon, UserIcon } from '@tanqory/mies-icons/web';

export default function Header() {
  return (
    <header className="flex items-center gap-16 p-24">
      <CartIcon size={24} className="text-brand" />
      <BoxIcon size={20} className="text-black hover:text-brand" />
      <UserIcon size={20} className="text-black" />
    </header>
  );
}`}
          </CodeBlock>

          <h3>React Native Components</h3>
          <CodeBlock language="tsx" title="React Native usage with colors">
{`import { CartIcon, BoxIcon, UserIcon } from '@tanqory/mies-icons/native';
import tokens from '@tanqory/mies-tokens/tokens.json';

export default function TabBar() {
  return (
    <View style={{ flexDirection: 'row', gap: 16, padding: 16 }}>
      <CartIcon size={24} color={tokens.colors.brand} />
      <BoxIcon size={20} color={tokens.colors.black} />
      <UserIcon size={20} color={tokens.colors.black} />
    </View>
  );
}`}
          </CodeBlock>
        </Section>

        {/* Props API */}
        <Section spacing="lg">
          <h2>Props API</h2>

          <h3>Web Components</h3>
          <CodeBlock language="tsx" title="Web icon props">
{`interface IconProps {
  size?: number;          // Icon size (default: 16)
  className?: string;     // CSS classes
  style?: React.CSSProperties;  // Inline styles
}`}
          </CodeBlock>

          <h3>React Native Components</h3>
          <CodeBlock language="tsx" title="React Native icon props">
{`interface IconProps extends SvgProps {
  size?: number;          // Icon size (default: 16)
  color?: string;         // Icon color (default: 'currentColor')
}`}
          </CodeBlock>
        </Section>

        {/* Design Integration */}
        <Section spacing="lg">
          <h2>Design System Integration</h2>
          
          <p>Icons automatically work with the design system colors:</p>

          <h3>Web with Tailwind CSS</h3>
          <CodeBlock language="tsx" title="Icons inherit currentColor">
{`// Icons inherit text color via currentColor
<div className="text-brand">
  <CartIcon size={20} />  {/* Will be brand color (#E1FF00) */}
</div>

<div className="text-black hover:text-brand">
  <SearchIcon size={18} />  {/* Changes color on hover */}
</div>`}
          </CodeBlock>

          <h3>React Native with Tokens</h3>
          <CodeBlock language="tsx" title="Pass colors explicitly">
{`import tokens from '@tanqory/mies-tokens/tokens.json';

<CartIcon size={24} color={tokens.colors.brand} />
<UserIcon size={20} color={tokens.colors.black} />

// Dynamic color based on state
<BoxIcon 
  size={22} 
  color={isActive ? tokens.colors.brand : tokens.colors.black} 
/>`}
          </CodeBlock>
        </Section>

        {/* Interactive Examples */}
        <Section spacing="lg">
          <h2>Interactive Examples</h2>
          
          <Card padding="lg">
            <CardHeader>
              <h3 className="text-lg font-sans text-black">Icon Sizes</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-16">
                <div className="flex items-center gap-16">
                  <CartIcon size={16} className="text-black" />
                  <span className="text-sm font-sans text-black">16px</span>
                </div>
                <div className="flex items-center gap-16">
                  <CartIcon size={20} className="text-black" />
                  <span className="text-sm font-sans text-black">20px</span>
                </div>
                <div className="flex items-center gap-16">
                  <CartIcon size={24} className="text-brand" />
                  <span className="text-sm font-sans text-black">24px (Brand color)</span>
                </div>
                <div className="flex items-center gap-16">
                  <CartIcon size={32} className="text-black" />
                  <span className="text-sm font-sans text-black">32px</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* Credits */}
        <Section spacing="lg">
          <h2>Credits</h2>
          <Card padding="base">
            <p className="text-base font-sans text-black mb-16">
              This icon library is based on <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-black">Lucide</a> icons, 
              which are available under the MIT License.
            </p>
            <p className="text-sm font-sans text-black opacity-70">
              <strong>Original Work:</strong> Lucide Contributors<br />
              <strong>License:</strong> MIT<br />
              <strong>Modifications:</strong> Normalized to 16×16 viewBox, curated for e-commerce, adapted for cross-platform use
            </p>
          </Card>
        </Section>

        {/* Next Steps */}
        <Section spacing="lg">
          <Card padding="lg">
            <div className="text-center">
              <h3 className="text-lg font-sans text-black mb-16">
                Ready to use icons?
              </h3>
              <Stack direction="row" spacing="base" justify="center">
                <Button variant="primary">
                  <a href="/icons/web">Web Usage Guide</a>
                </Button>
                <Button variant="outline">
                  <a href="/icons/mobile">Mobile Usage Guide</a>
                </Button>
              </Stack>
            </div>
          </Card>
        </Section>
      </div>
    </Layout>
  );
}