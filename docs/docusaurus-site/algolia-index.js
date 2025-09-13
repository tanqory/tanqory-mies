const { algoliasearch } = require('algoliasearch');

const client = algoliasearch('C5H0VAS3BI', '372b89a44c58dc947b6559d2b8d2f878');

// Fetch and index design system documentation
const processRecords = async () => {
  const designSystemDocs = [
    {
      objectID: 'getting-started-1',
      title: 'Getting Started',
      content: 'Learn how to get started with Tanqory Mies design system. Less is more, enforced by design.',
      url: '/docs/getting-started',
      type: 'documentation',
      hierarchy: { lvl0: 'Getting Started', lvl1: 'Introduction' }
    },
    {
      objectID: 'web-components-1',
      title: 'Web Components',
      content: 'Explore web components for React applications including buttons, cards, forms, and layout components.',
      url: '/docs/web-components',
      type: 'documentation',
      hierarchy: { lvl0: 'Components', lvl1: 'Web Components' }
    },
    {
      objectID: 'mobile-components-1',
      title: 'Mobile Components',
      content: 'Native mobile components for React Native applications with cross-platform support.',
      url: '/docs/mobile-components',
      type: 'documentation',
      hierarchy: { lvl0: 'Components', lvl1: 'Mobile Components' }
    },
    {
      objectID: 'design-tokens-1',
      title: 'Design Tokens',
      content: 'Design tokens for colors, typography, spacing, and other design system foundations.',
      url: '/docs/design-tokens',
      type: 'documentation',
      hierarchy: { lvl0: 'Foundation', lvl1: 'Design Tokens' }
    },
    {
      objectID: 'button-component-1',
      title: 'Button Component',
      content: 'Button component with variants, sizes, and states for consistent user interactions.',
      url: '/docs/web-components/actions/button',
      type: 'component',
      hierarchy: { lvl0: 'Components', lvl1: 'Actions', lvl2: 'Button' }
    },
    {
      objectID: 'card-component-1',
      title: 'Card Component',
      content: 'Card layout component for grouping related content with proper spacing and elevation.',
      url: '/docs/web-components/layout/card',
      type: 'component',
      hierarchy: { lvl0: 'Components', lvl1: 'Layout', lvl2: 'Card' }
    }
  ];

  return await client.saveObjects({ indexName: 'movies_index', objects: designSystemDocs });
};

processRecords()
  .then(() => console.log('Indexing complete!'))
  .catch((err) => console.error(err));