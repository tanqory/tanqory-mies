import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/Layout';
import { Container, Section, Stack } from '@tanqory/mies-core-web/layout';
import { Card, CardHeader, CardContent } from '@tanqory/mies-core-web/card';
import { Button } from '@tanqory/mies-core-web/button';
import { CartIcon, BoxIcon, ChartIcon, SearchIcon } from '@tanqory/mies-icons/web';

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section spacing="xl">
        <div className="text-center">
          <h1 className="text-2xl font-sans text-black mb-24">
            Tanqory Mies Design System
          </h1>
          <p className="text-lg font-sans text-black mb-16 opacity-80 max-w-3xl mx-auto">
            Cross-platform design system for Web and Mobile applications. 
            Built with constraints that enforce consistency and simplicity.
          </p>
          <p className="text-base font-sans text-black mb-32 opacity-70">
            Zero-JS by default • No shadows • No gradients • No border radius
          </p>
          
          <Stack direction="row" spacing="base" justify="center" align="center">
            <Button variant="primary" size="lg">
              <Link href="/getting-started">Get Started</Link>
            </Button>
            <Button variant="secondary" size="lg">
              <Link href="/components/web">Components</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/inspiration">Philosophy</Link>
            </Button>
          </Stack>
        </div>
      </Section>

      {/* Features Section */}
      <Section spacing="lg">
        <div className="text-center mb-32">
          <h2 className="text-xl font-sans text-black mb-16">
            Design System Features
          </h2>
          <p className="text-base font-sans text-black opacity-70">
            Built with principles that ensure consistency across platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
          <Card padding="lg">
            <CardHeader>
              <div className="flex items-center gap-12 mb-16">
                <CartIcon size={24} className="text-brand" />
                <h3 className="text-base font-sans text-black font-medium">E-commerce Ready</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-sans text-black opacity-80">
                Curated icons and components specifically designed for e-commerce applications.
              </p>
            </CardContent>
          </Card>

          <Card padding="lg">
            <CardHeader>
              <div className="flex items-center gap-12 mb-16">
                <BoxIcon size={24} className="text-brand" />
                <h3 className="text-base font-sans text-black font-medium">Zero-JS Default</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-sans text-black opacity-80">
                React Server Components by default. Add interactivity only when needed.
              </p>
            </CardContent>
          </Card>

          <Card padding="lg">
            <CardHeader>
              <div className="flex items-center gap-12 mb-16">
                <ChartIcon size={24} className="text-brand" />
                <h3 className="text-base font-sans text-black font-medium">Cross-Platform</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-sans text-black opacity-80">
                Same design tokens and component APIs work across Web and React Native.
              </p>
            </CardContent>
          </Card>

          <Card padding="lg">
            <CardHeader>
              <div className="flex items-center gap-12 mb-16">
                <SearchIcon size={24} className="text-brand" />
                <h3 className="text-base font-sans text-black font-medium">Design Tokens</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-sans text-black opacity-80">
                Consistent theming with CSS variables, TypeScript, and JSON tokens.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Quick Links */}
      <Section spacing="lg">
        <div className="text-center mb-32">
          <h2 className="text-xl font-sans text-black mb-16">
            Quick Start
          </h2>
          <p className="text-base font-sans text-black opacity-70">
            Choose your platform to get started
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <Card padding="lg">
            <CardHeader>
              <h3 className="text-lg font-sans text-black font-medium mb-8">
                Web Development
              </h3>
              <p className="text-base font-sans text-black opacity-80">
                Next.js 15 with App Router and React Server Components
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-16">
                <div className="bg-white border-1 border-black p-16">
                  <code className="text-sm font-mono text-black">
                    npm install @tanqory/mies-core-web
                  </code>
                </div>
                <Stack direction="row" spacing="base">
                  <Button variant="primary" size="sm" style={{ flex: 1 }}>
                    <Link href="/getting-started/web">Web Guide</Link>
                  </Button>
                  <Button variant="outline" size="sm" style={{ flex: 1 }}>
                    <Link href="/components/web">Components</Link>
                  </Button>
                </Stack>
              </div>
            </CardContent>
          </Card>

          <Card padding="lg">
            <CardHeader>
              <h3 className="text-lg font-sans text-black font-medium mb-8">
                Mobile Development
              </h3>
              <p className="text-base font-sans text-black opacity-80">
                React Native 0.75+ with Expo and StyleSheet
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-16">
                <div className="bg-white border-1 border-black p-16">
                  <code className="text-sm font-mono text-black">
                    npm install @tanqory/mies-core-native
                  </code>
                </div>
                <Stack direction="row" spacing="base">
                  <Button variant="primary" size="sm" style={{ flex: 1 }}>
                    <Link href="/getting-started/mobile">Mobile Guide</Link>
                  </Button>
                  <Button variant="outline" size="sm" style={{ flex: 1 }}>
                    <Link href="/components/mobile">Components</Link>
                  </Button>
                </Stack>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Design Philosophy */}
      <Section spacing="lg">
        <Card padding="lg">
          <div className="text-center">
            <h2 className="text-xl font-sans text-black mb-16">
              "Less is more"
            </h2>
            <p className="text-base font-sans text-black opacity-80 mb-24 max-w-2xl mx-auto">
              Inspired by Ludwig Mies van der Rohe's architectural philosophy, 
              the Tanqory Mies design system embraces minimalism, functionality, 
              and purposeful constraints.
            </p>
            
            <Stack direction="row" spacing="base" justify="center">
              <Button variant="outline" size="base">
                <Link href="/inspiration">Design Philosophy</Link>
              </Button>
              <Button variant="outline" size="base">
                <Link href="/foundations">Foundations</Link>
              </Button>
            </Stack>
          </div>
        </Card>
      </Section>
    </Layout>
  );
}