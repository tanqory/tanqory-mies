export interface NavItem {
  title: string;
  href: string;
  description?: string;
  items?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    href: '/getting-started',
    description: 'Learn how to install and set up the Tanqory Mies design system',
    items: [
      {
        title: 'Introduction',
        href: '/getting-started',
        description: 'Overview of the design system',
      },
      {
        title: 'Installation Web',
        href: '/getting-started/web',
        description: 'Set up for Next.js and React',
      },
      {
        title: 'Installation Mobile',
        href: '/getting-started/mobile',
        description: 'Set up for React Native',
      },
    ],
  },
  {
    title: 'Foundations',
    href: '/foundations',
    description: 'Core design principles and visual elements',
    items: [
      {
        title: 'Colors',
        href: '/foundations/colors',
        description: 'Brand colors and usage guidelines',
      },
      {
        title: 'Typography',
        href: '/foundations/typography',
        description: 'Font families, sizes, and hierarchy',
      },
      {
        title: 'Spacing',
        href: '/foundations/spacing',
        description: 'Consistent spacing scale',
      },
      {
        title: 'Layout',
        href: '/foundations/layout',
        description: 'Grid systems and layout principles',
      },
    ],
  },
  {
    title: 'Tokens',
    href: '/tokens',
    description: 'Design tokens for cross-platform consistency',
    items: [
      {
        title: 'Overview',
        href: '/tokens',
        description: 'Understanding design tokens',
      },
      {
        title: 'CSS Variables',
        href: '/tokens/css',
        description: 'Using tokens in CSS and web',
      },
      {
        title: 'TypeScript',
        href: '/tokens/typescript',
        description: 'Typed tokens for TypeScript',
      },
      {
        title: 'JSON',
        href: '/tokens/json',
        description: 'Tokens for React Native',
      },
    ],
  },
  {
    title: 'Components Web',
    href: '/components/web',
    description: 'React Server Components for Next.js',
    items: [
      {
        title: 'Overview',
        href: '/components/web',
        description: 'Web components overview',
      },
      {
        title: 'Button',
        href: '/components/web/button',
        description: 'Interactive button component',
      },
      {
        title: 'Card',
        href: '/components/web/card',
        description: 'Container and content cards',
      },
      {
        title: 'Form',
        href: '/components/web/form',
        description: 'Form controls and inputs',
      },
      {
        title: 'Table',
        href: '/components/web/table',
        description: 'Data tables and lists',
      },
      {
        title: 'Layout',
        href: '/components/web/layout',
        description: 'Page structure and containers',
      },
    ],
  },
  {
    title: 'Components Mobile',
    href: '/components/mobile',
    description: 'React Native components for mobile apps',
    items: [
      {
        title: 'Overview',
        href: '/components/mobile',
        description: 'Mobile components overview',
      },
      {
        title: 'Button',
        href: '/components/mobile/button',
        description: 'Touchable button component',
      },
      {
        title: 'Card',
        href: '/components/mobile/card',
        description: 'Mobile container cards',
      },
      {
        title: 'Form',
        href: '/components/mobile/form',
        description: 'Native form components',
      },
      {
        title: 'List',
        href: '/components/mobile/list',
        description: 'Scrollable lists and items',
      },
      {
        title: 'Layout',
        href: '/components/mobile/layout',
        description: 'Screen structure and containers',
      },
    ],
  },
  {
    title: 'Icons',
    href: '/icons',
    description: 'Cross-platform icon library',
    items: [
      {
        title: 'Catalog',
        href: '/icons',
        description: 'Browse all available icons',
      },
      {
        title: 'Usage Web',
        href: '/icons/web',
        description: 'Using icons in React/Next.js',
      },
      {
        title: 'Usage Mobile',
        href: '/icons/mobile',
        description: 'Using icons in React Native',
      },
    ],
  },
  {
    title: 'Inspiration',
    href: '/inspiration',
    description: 'Design philosophy and principles',
    items: [
      {
        title: 'Mies van der Rohe',
        href: '/inspiration',
        description: 'Less is more philosophy',
      },
      {
        title: 'Design Principles',
        href: '/inspiration/principles',
        description: 'Core design values',
      },
    ],
  },
];