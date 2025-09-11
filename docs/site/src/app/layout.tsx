import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tanqory Mies Design System',
  description: 'Cross-platform design system for Web and Mobile. Zero-JS by default, no shadows, no gradients, no border radius.',
  keywords: ['design system', 'react', 'react native', 'next.js', 'tailwind', 'components'],
  authors: [{ name: 'Tanqory' }],
  creator: 'Tanqory',
  publisher: 'Tanqory',
  robots: 'index, follow',
  openGraph: {
    title: 'Tanqory Mies Design System',
    description: 'Cross-platform design system for Web and Mobile',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanqory Mies Design System',
    description: 'Cross-platform design system for Web and Mobile',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}