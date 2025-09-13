import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started',
        'getting-started/mies',
        'getting-started/component-lifecycle',
        'getting-started/building-with-mies',
        'getting-started/quick-start-code',
        'getting-started/design-principles',
        'getting-started/architecture-overview',
        'getting-started/migration-guide',
        'getting-started/contributing',
      ],
    },
    {
      type: 'category',
      label: 'Foundations',
      items: [
        'foundations/accessibility',
        'foundations/localized-currency-formatting',
        'foundations/information-architecture',
        'foundations/internationalization',
        'foundations/tanqory-experience-values',
        'foundations/performance-scalability',
        'foundations/security-privacy-basics',
        'foundations/design-tokens-theming',
      ],
    },
    {
      type: 'category',
      label: 'Design',
      link: {
        type: 'doc',
        id: 'design/index',
      },
      items: [
        'design/design-ethos',
        'design/visual-language',
        {
          type: 'category',
          label: 'Colors',
          link: {
            type: 'doc',
            id: 'design/colors',
          },
          items: [
            'design/colors/palettes',
            'design/colors/using-color',
            'design/colors/tokens',
          ],
        },
        'design/surface-layering',
        'design/iconography',
        'design/grid-spacing',
        'design/motion-feedback',
        'design/typography-system',
        'design/data-visuals',
        'design/imagery-illustration',
        'design/interaction-patterns',
        'design/audio-haptics',
        'design/performance-responsiveness',
      ],
    },
    {
      type: 'category',
      label: 'Content',
      link: {
        type: 'doc',
        id: 'content/index',
      },
      items: [
        'content/writing-basics',
        'content/style-grammar',
        'content/error-handling-text',
        'content/naming-labels',
        'content/alt-text-media-captions',
        'content/inclusive-language',
        'content/microcopy-tips',
        'content/cross-platform-localization',
      ],
    },
    {
      type: 'category',
      label: 'Patterns',
      link: {
        type: 'doc',
        id: 'patterns/index',
      },
      items: [
        'patterns/app-settings-screens',
        'patterns/card-layouts',
        'patterns/common-actions',
        'patterns/date-picker-usage',
        'patterns/adding-new-features',
        'patterns/resource-detail-view',
        'patterns/resource-list-view',
        'patterns/form-patterns',
        'patterns/navigation-flows',
      ],
    },
    {
      type: 'category',
      label: 'Web Components',
      link: {
        type: 'doc',
        id: 'web-components/index',
      },
      items: [
        {
          type: 'category',
          label: 'Actions',
          items: [
            'web-components/actions/account-link',
            'web-components/actions/button',
            'web-components/actions/button-group',
            'web-components/actions/split-button',
          ],
        },
        {
          type: 'category',
          label: 'Layout & structure',
          items: [
            'web-components/layout/bleed',
            'web-components/layout/block-stack',
            'web-components/layout/box',
            'web-components/layout/callout-card',
            'web-components/layout/card',
            'web-components/layout/divider',
            'web-components/layout/empty-state',
            'web-components/layout/form-layout',
            'web-components/layout/grid',
            'web-components/layout/inline-grid',
            'web-components/layout/inline-stack',
            'web-components/layout/layout-container',
            'web-components/layout/media-card',
            'web-components/layout/page-shell',
            'web-components/layout/sticky-header',
          ],
        },
        {
          type: 'category',
          label: 'Selection & input',
          items: [
            'web-components/input/autocomplete',
            'web-components/input/checkbox',
            'web-components/input/choice-list',
            'web-components/input/color-picker',
            'web-components/input/combo-box',
            'web-components/input/date-picker',
            'web-components/input/drop-zone',
            'web-components/input/filters',
            'web-components/input/form',
            'web-components/input/inline-error',
            'web-components/input/radio-group',
            'web-components/input/range-slider',
            'web-components/input/select',
            'web-components/input/tag',
            'web-components/input/text-field',
            'web-components/input/file-uploader',
            'web-components/input/rich-text-editor',
          ],
        },
        {
          type: 'category',
          label: 'Images & icons',
          items: [
            'web-components/media/avatar',
            'web-components/media/icon',
            'web-components/media/keyboard-key',
            'web-components/media/thumbnail',
            'web-components/media/video-thumbnail',
            'web-components/media/image-gallery',
          ],
        },
        {
          type: 'category',
          label: 'Feedback indicators',
          items: [
            'web-components/feedback/badge',
            'web-components/feedback/banner',
            'web-components/feedback/exception-list',
            'web-components/feedback/progress-bar',
            'web-components/feedback/skeleton',
            'web-components/feedback/spinner',
            'web-components/feedback/toast',
            'web-components/feedback/notification-center',
          ],
        },
        {
          type: 'category',
          label: 'Typography',
          items: [
            'web-components/typography/text',
            'web-components/typography/headings',
            'web-components/typography/code-block',
          ],
        },
        {
          type: 'category',
          label: 'Tables',
          items: [
            'web-components/tables/data-table',
            'web-components/tables/index-table',
            'web-components/tables/virtualized-table',
          ],
        },
        {
          type: 'category',
          label: 'Lists',
          items: [
            'web-components/lists/action-list',
            'web-components/lists/description-list',
            'web-components/lists/list',
            'web-components/lists/option-list',
            'web-components/lists/resource-list',
          ],
        },
        {
          type: 'category',
          label: 'Navigation',
          items: [
            'web-components/navigation/footer-help',
            'web-components/navigation/link',
            'web-components/navigation/pagination',
            'web-components/navigation/tabs',
            'web-components/navigation/sidebar',
            'web-components/navigation/top-bar',
          ],
        },
        {
          type: 'category',
          label: 'Overlays',
          items: [
            'web-components/overlays/popover',
            'web-components/overlays/tooltip',
            'web-components/overlays/modal',
            'web-components/overlays/drawer',
          ],
        },
        {
          type: 'category',
          label: 'Utilities',
          items: [
            'web-components/utilities/app-provider',
            'web-components/utilities/collapsible',
            'web-components/utilities/scrollable',
            'web-components/utilities/theme-switcher',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Mobile Components',
      link: {
        type: 'doc',
        id: 'mobile-components/index',
      },
      items: [
        {
          type: 'category',
          label: 'Actions',
          items: [
            'mobile-components/actions/button',
            'mobile-components/actions/floating-action-button',
            'mobile-components/actions/swipe-actions',
          ],
        },
        {
          type: 'category',
          label: 'Layout & structure',
          items: [
            'mobile-components/layout/safe-area-container',
            'mobile-components/layout/card',
            'mobile-components/layout/grid',
            'mobile-components/layout/stack',
            'mobile-components/layout/scroll-container',
            'mobile-components/layout/bottom-sheet',
          ],
        },
        {
          type: 'category',
          label: 'Inputs',
          items: [
            'mobile-components/inputs/text-field',
            'mobile-components/inputs/text-area',
            'mobile-components/inputs/select-picker',
            'mobile-components/inputs/checkbox',
            'mobile-components/inputs/radio-group',
            'mobile-components/inputs/toggle-switch',
            'mobile-components/inputs/slider',
            'mobile-components/inputs/date-time-picker',
            'mobile-components/inputs/file-image-picker',
            'mobile-components/inputs/signature-pad',
          ],
        },
        {
          type: 'category',
          label: 'Navigation',
          items: [
            'mobile-components/navigation/app-bar',
            'mobile-components/navigation/bottom-tabs',
            'mobile-components/navigation/drawer',
            'mobile-components/navigation/stepper',
          ],
        },
        {
          type: 'category',
          label: 'Feedback & status',
          items: [
            'mobile-components/feedback/snackbar',
            'mobile-components/feedback/toast',
            'mobile-components/feedback/banner',
            'mobile-components/feedback/progress-indicator',
            'mobile-components/feedback/activity-spinner',
            'mobile-components/feedback/pull-to-refresh',
          ],
        },
        {
          type: 'category',
          label: 'Media & display',
          items: [
            'mobile-components/media/avatar',
            'mobile-components/media/icon',
            'mobile-components/media/image',
            'mobile-components/media/video-player',
            'mobile-components/media/map-view',
          ],
        },
        {
          type: 'category',
          label: 'Lists & data',
          items: [
            'mobile-components/lists/flat-list',
            'mobile-components/lists/section-list',
            'mobile-components/lists/virtualized-list',
            'mobile-components/lists/data-table',
          ],
        },
        {
          type: 'category',
          label: 'Utilities',
          items: [
            'mobile-components/utilities/theme-switcher',
            'mobile-components/utilities/modal',
            'mobile-components/utilities/popover-tooltip',
            'mobile-components/utilities/gesture-handler-examples',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tokens',
      link: {
        type: 'doc',
        id: 'tokens/index',
      },
      items: [
        'tokens/border',
        'tokens/breakpoints',
        'tokens/color-palette',
        'tokens/font-typography',
        'tokens/height',
        'tokens/motion-easing',
        'tokens/shadow-rules',
        'tokens/spacing-scale',
        'tokens/text-styles',
        'tokens/width',
        'tokens/z-index',
        'tokens/radius',
        'tokens/opacity',
        'tokens/duration',
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      link: {
        type: 'doc',
        id: 'tools/index',
      },
      items: [
        'tools/vscode-integration',
        'tools/migrator-cli',
        'tools/stylelint-rules',
        'tools/sandbox-alpha',
        'tools/storybook-kit',
        'tools/figma-resources',
        'tools/cli-utilities',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'examples',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'eslint-plugin',
      ],
    },
  ],
};

export default sidebars;
