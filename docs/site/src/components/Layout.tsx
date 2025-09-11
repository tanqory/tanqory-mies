"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Header, Container } from '@tanqory/mies-core-web/layout';
import { SearchIcon } from '@tanqory/mies-icons/web';
import { navigation } from '@/data/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  const isActivePath = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header sticky>
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-sans text-black">
              Tanqory Mies
            </Link>
            
            <nav className="hidden lg:flex items-center gap-24">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-sans transition-colors ${
                    isActivePath(item.href)
                      ? 'text-brand font-medium'
                      : 'text-black hover:text-brand'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-16">
              <SearchIcon size={20} className="text-black hover:text-brand cursor-pointer" />
              <Link
                href="https://github.com/tanqory/mies"
                target="_blank"
                className="text-base font-sans text-black hover:text-brand"
              >
                GitHub
              </Link>
            </div>
          </div>
        </Container>
      </Header>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-1 border-black">
          <div className="sticky top-20 p-24 h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="space-y-8">
              {navigation.map((section) => (
                <div key={section.href} className="space-y-4">
                  <Link
                    href={section.href}
                    className={`block text-base font-sans font-medium ${
                      isActivePath(section.href)
                        ? 'text-brand'
                        : 'text-black hover:text-brand'
                    }`}
                  >
                    {section.title}
                  </Link>
                  
                  {section.items && (
                    <div className="ml-16 space-y-2">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block text-sm font-sans py-4 px-8 transition-colors ${
                            isActivePath(item.href)
                              ? 'nav-active'
                              : 'text-black hover:text-brand hover:bg-white'
                          }`}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <Container>
            <div className="py-32 max-w-4xl">
              {children}
            </div>
          </Container>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-1 border-black">
        <Container>
          <div className="py-32 text-center">
            <p className="text-base font-sans text-black mb-8">
              Tanqory Mies Design System
            </p>
            <p className="text-sm font-sans text-black opacity-70">
              "Less is more" - Ludwig Mies van der Rohe
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}