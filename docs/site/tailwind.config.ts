import type { Config } from 'tailwindcss';
import { miesPreset } from '@tanqory/mies-tailwind';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [miesPreset],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // Override prose styles to match design system
            maxWidth: 'none',
            color: 'var(--mies-color-black)',
            fontFamily: 'var(--mies-font-family)',
            h1: {
              color: 'var(--mies-color-black)',
              fontFamily: 'var(--mies-font-family)',
              fontWeight: '700',
              borderBottom: 'var(--mies-border-width) solid var(--mies-color-black)',
              paddingBottom: 'var(--mies-spacing-16)',
            },
            h2: {
              color: 'var(--mies-color-black)',
              fontFamily: 'var(--mies-font-family)',
              fontWeight: '600',
              borderBottom: 'var(--mies-border-width) solid var(--mies-color-black)',
              paddingBottom: 'var(--mies-spacing-8)',
            },
            h3: {
              color: 'var(--mies-color-black)',
              fontFamily: 'var(--mies-font-family)',
              fontWeight: '600',
            },
            code: {
              backgroundColor: 'transparent',
              border: 'var(--mies-border-width) solid var(--mies-color-black)',
              padding: 'var(--mies-spacing-4) var(--mies-spacing-8)',
              borderRadius: '0',
              fontSize: 'var(--mies-font-size-sm)',
              fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
            },
            pre: {
              backgroundColor: 'var(--mies-color-white)',
              border: 'var(--mies-border-width) solid var(--mies-color-black)',
              borderRadius: '0',
              padding: 'var(--mies-spacing-16)',
            },
            blockquote: {
              borderLeft: 'var(--mies-spacing-4) solid var(--mies-color-brand)',
              paddingLeft: 'var(--mies-spacing-16)',
              fontStyle: 'normal',
              color: 'var(--mies-color-black)',
              backgroundColor: 'var(--mies-color-white)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;