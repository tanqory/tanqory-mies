import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Container } from '@tanqory/mies-core-web/layout';
import { Button } from '@tanqory/mies-core-web/button';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tanqory Mies - Web Demo',
  description: 'Demo application showcasing the Tanqory Mies design system for web',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header sticky>
          <Container>
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-sans text-black">
                Tanqory Mies
              </Link>
              
              <nav className="flex items-center gap-24">
                <Link href="/" className="text-base font-sans text-black hover:text-brand">
                  Home
                </Link>
                <Link href="/products" className="text-base font-sans text-black hover:text-brand">
                  Products
                </Link>
                <Link href="/new" className="text-base font-sans text-black hover:text-brand">
                  Create
                </Link>
                <Button variant="primary" size="sm">
                  <Link href="/new">Get Started</Link>
                </Button>
              </nav>
            </div>
          </Container>
        </Header>

        <main className="min-h-screen bg-white">
          {children}
        </main>

        <footer className="bg-white border-t border-1 border-black">
          <Container>
            <div className="py-32 text-center">
              <p className="text-base font-sans text-black">
                Built with Tanqory Mies Design System
              </p>
              <p className="text-sm font-sans text-black opacity-70 mt-8">
                Zero-JS by default • No shadows • No gradients • No border radius
              </p>
            </div>
          </Container>
        </footer>
      </body>
    </html>
  );
}