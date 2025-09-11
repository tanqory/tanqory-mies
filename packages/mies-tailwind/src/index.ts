import type { Config } from 'tailwindcss';

export const miesPreset: Config = {
  theme: {
    colors: {
      brand: 'var(--mies-color-brand)',
      black: 'var(--mies-color-black)',
      white: 'var(--mies-color-white)',
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      sans: 'var(--mies-font-family)',
    },
    fontSize: {
      xs: ['var(--mies-font-size-xs)', { lineHeight: 'var(--mies-line-height-xs)' }],
      sm: ['var(--mies-font-size-sm)', { lineHeight: 'var(--mies-line-height-sm)' }],
      base: ['var(--mies-font-size-base)', { lineHeight: 'var(--mies-line-height-base)' }],
      lg: ['var(--mies-font-size-lg)', { lineHeight: 'var(--mies-line-height-lg)' }],
      xl: ['var(--mies-font-size-xl)', { lineHeight: 'var(--mies-line-height-xl)' }],
      '2xl': ['var(--mies-font-size-2xl)', { lineHeight: 'var(--mies-line-height-2xl)' }],
    },
    spacing: {
      0: '0',
      4: 'var(--mies-spacing-4)',
      8: 'var(--mies-spacing-8)',
      12: 'var(--mies-spacing-12)',
      16: 'var(--mies-spacing-16)',
      24: 'var(--mies-spacing-24)',
      32: 'var(--mies-spacing-32)',
    },
    borderRadius: {
      none: '0',
      DEFAULT: '0',
    },
    borderWidth: {
      0: '0',
      1: 'var(--mies-border-width)',
      DEFAULT: 'var(--mies-border-width)',
    },
    boxShadow: {
      none: 'none',
      DEFAULT: 'none',
    },
    zIndex: {
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
      base: 'var(--mies-z-index-base)',
      nav: 'var(--mies-z-index-nav)',
      overlay: 'var(--mies-z-index-overlay)',
    },
  },
  corePlugins: {
    backgroundImage: false,
    gradientColorStops: false,
    borderRadius: false,
    boxShadow: false,
  },
  plugins: [
    ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) => {
      addUtilities({
        '.border-1': {
          borderWidth: 'var(--mies-border-width)',
        },
        '.text-brand': {
          color: 'var(--mies-color-brand)',
        },
        '.bg-brand': {
          backgroundColor: 'var(--mies-color-brand)',
        },
        '.border-brand': {
          borderColor: 'var(--mies-color-brand)',
        },
      });
    },
  ],
};

export default miesPreset;