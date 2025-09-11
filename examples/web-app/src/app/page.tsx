import { Container, Section, Stack } from '@tanqory/mies-core-web/layout';
import { Card, CardHeader, CardContent } from '@tanqory/mies-core-web/card';
import { Button } from '@tanqory/mies-core-web/button';
import { CartIcon, BoxIcon, ChartIcon } from '@tanqory/mies-icons/web';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl font-sans text-black mb-24">
              Tanqory Mies Design System
            </h1>
            <p className="text-lg font-sans text-black mb-32 opacity-80">
              Cross-platform design system for Web and Mobile. Zero-JS by default, 
              no shadows, no gradients, no border radius. Built for Next.js App Router 
              and React Server Components.
            </p>
            
            <Stack direction="row" spacing="base" justify="center" align="center">
              <Button variant="primary" size="lg">
                <Link href="/products">View Products</Link>
              </Button>
              <Button variant="secondary" size="lg">
                <Link href="/new">Create New</Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Stack>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-32">
            <h2 className="text-xl font-sans text-black mb-16">
              Design System Features
            </h2>
            <p className="text-base font-sans text-black opacity-70">
              Built with constraints that ensure consistency across platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            <Card padding="lg">
              <CardHeader>
                <div className="flex items-center gap-12 mb-16">
                  <CartIcon size={24} className="text-brand" />
                  <h3 className="text-lg font-sans text-black">E-commerce Ready</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base font-sans text-black opacity-80">
                  Curated icons and components specifically designed for e-commerce applications. 
                  Shopping carts, products, payments, and analytics.
                </p>
              </CardContent>
            </Card>

            <Card padding="lg">
              <CardHeader>
                <div className="flex items-center gap-12 mb-16">
                  <BoxIcon size={24} className="text-brand" />
                  <h3 className="text-lg font-sans text-black">Zero-JS Default</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base font-sans text-black opacity-80">
                  All components work as React Server Components by default. 
                  Add interactivity only when needed with progressive enhancement.
                </p>
              </CardContent>
            </Card>

            <Card padding="lg">
              <CardHeader>
                <div className="flex items-center gap-12 mb-16">
                  <ChartIcon size={24} className="text-brand" />
                  <h3 className="text-lg font-sans text-black">Cross-Platform</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base font-sans text-black opacity-80">
                  Same design tokens and component APIs work across Web and React Native. 
                  Consistent experience everywhere.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Component Showcase */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-32">
            <h2 className="text-xl font-sans text-black mb-16">
              Component Showcase
            </h2>
            <p className="text-base font-sans text-black opacity-70">
              See the design system in action
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            {/* Buttons Demo */}
            <Card padding="lg">
              <CardHeader>
                <h3 className="text-lg font-sans text-black">Button Variants</h3>
              </CardHeader>
              <CardContent>
                <Stack direction="column" spacing="base">
                  <div className="space-y-12">
                    <h4 className="text-sm font-sans text-black opacity-70">Variants</h4>
                    <Stack direction="row" spacing="base" wrap>
                      <Button variant="primary">Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                    </Stack>
                  </div>
                  
                  <div className="space-y-12">
                    <h4 className="text-sm font-sans text-black opacity-70">Sizes</h4>
                    <Stack direction="row" spacing="base" align="center" wrap>
                      <Button variant="primary" size="sm">Small</Button>
                      <Button variant="primary" size="base">Base</Button>
                      <Button variant="primary" size="lg">Large</Button>
                    </Stack>
                  </div>
                </Stack>
              </CardContent>
            </Card>

            {/* Card Demo */}
            <Card padding="lg">
              <CardHeader>
                <h3 className="text-lg font-sans text-black">Card Layouts</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-16">
                  <Card padding="base" bordered>
                    <p className="text-base font-sans text-black">
                      Nested card with base padding
                    </p>
                  </Card>
                  
                  <Card padding="sm" bordered={false}>
                    <p className="text-sm font-sans text-black opacity-70">
                      Card without border, small padding
                    </p>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="xl">
        <Container>
          <Card padding="lg">
            <div className="text-center">
              <h2 className="text-xl font-sans text-black mb-16">
                Ready to Get Started?
              </h2>
              <p className="text-base font-sans text-black opacity-80 mb-24">
                Explore the demo pages to see the full design system in action.
              </p>
              
              <Stack direction="row" spacing="base" justify="center">
                <Button variant="primary" size="lg">
                  <Link href="/products">Browse Products</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/new">Create Something</Link>
                </Button>
              </Stack>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}