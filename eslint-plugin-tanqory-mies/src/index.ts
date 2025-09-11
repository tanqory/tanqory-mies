import { ESLint, Rule } from 'eslint';

// Rule to prevent rounded corners
const noRoundedRule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow rounded corner classes (violates Mies design constraints)',
      category: 'Design System',
      recommended: true,
    },
    messages: {
      noRounded: 'Rounded corners are not allowed in the Mies design system. Use sharp edges with border-radius: 0.',
    },
    schema: [],
  },
  create(context) {
    const forbiddenPatterns = [
      /\brounded(-\w+)?\b/,
      /\bborder-radius\s*:/,
    ];

    return {
      Literal(node) {
        if (typeof node.value === 'string') {
          for (const pattern of forbiddenPatterns) {
            if (pattern.test(node.value)) {
              context.report({
                node,
                messageId: 'noRounded',
              });
            }
          }
        }
      },
      TemplateElement(node) {
        if (node.value.raw) {
          for (const pattern of forbiddenPatterns) {
            if (pattern.test(node.value.raw)) {
              context.report({
                node,
                messageId: 'noRounded',
              });
            }
          }
        }
      },
    };
  },
};

// Rule to prevent shadows
const noShadowRule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow shadow classes (violates Mies design constraints)',
      category: 'Design System',
      recommended: true,
    },
    messages: {
      noShadow: 'Shadows are not allowed in the Mies design system. Use flat design without depth effects.',
    },
    schema: [],
  },
  create(context) {
    const forbiddenPatterns = [
      /\bshadow(-\w+)?\b/,
      /\bbox-shadow\s*:/,
      /\bdrop-shadow\s*:/,
      /\belevation\s*:/,
    ];

    return {
      Literal(node) {
        if (typeof node.value === 'string') {
          for (const pattern of forbiddenPatterns) {
            if (pattern.test(node.value)) {
              context.report({
                node,
                messageId: 'noShadow',
              });
            }
          }
        }
      },
      TemplateElement(node) {
        if (node.value.raw) {
          for (const pattern of forbiddenPatterns) {
            if (pattern.test(node.value.raw)) {
              context.report({
                node,
                messageId: 'noShadow',
              });
            }
          }
        }
      },
    };
  },
};

// Rule to prevent gradients
const noGradientRule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow gradient classes (violates Mies design constraints)',
      category: 'Design System',
      recommended: true,
    },
    messages: {
      noGradient: 'Gradients are not allowed in the Mies design system. Use solid colors only.',
    },
    schema: [],
  },
  create(context) {
    const forbiddenPatterns = [
      /\bbg-gradient(-\w+)?\b/,
      /\bfrom-\w+\b/,
      /\bvia-\w+\b/,
      /\bto-\w+\b/,
      /\blinear-gradient\s*\(/,
      /\bradial-gradient\s*\(/,
      /\bconic-gradient\s*\(/,
    ];

    return {
      Literal(node) {
        if (typeof node.value === 'string') {
          for (const pattern of forbiddenPatterns) {
            if (pattern.test(node.value)) {
              context.report({
                node,
                messageId: 'noGradient',
              });
            }
          }
        }
      },
      TemplateElement(node) {
        if (node.value.raw) {
          for (const pattern of forbiddenPatterns) {
            if (pattern.test(node.value.raw)) {
              context.report({
                node,
                messageId: 'noGradient',
              });
            }
          }
        }
      },
    };
  },
};

// Rule to enforce design system colors
const enforceDesignTokensRule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce usage of design system colors (brand, black, white)',
      category: 'Design System',
      recommended: true,
    },
    messages: {
      useDesignTokens: 'Use design system colors: brand, black, white, transparent, or current. Custom colors like "{{color}}" are not allowed.',
    },
    schema: [],
  },
  create(context) {
    // Allow only design system colors
    const allowedColors = [
      'brand',
      'black', 
      'white',
      'transparent',
      'current',
      'currentColor',
      'inherit',
      'none',
    ];

    // Pattern to match Tailwind color classes
    const colorClassPatterns = [
      /\b(?:bg|text|border|ring|decoration|divide|outline)-([a-z]+)(?:-\d+)?\b/g,
    ];

    // Pattern to match hex colors, rgb, hsl, etc.
    const colorValuePatterns = [
      /#[0-9a-fA-F]{3,8}\b/,
      /\brgb\s*\(/,
      /\brgba\s*\(/,
      /\bhsl\s*\(/,
      /\bhsla\s*\(/,
    ];

    function checkColorUsage(value: string, node: any) {
      // Check for custom color values (hex, rgb, hsl)
      for (const pattern of colorValuePatterns) {
        if (pattern.test(value)) {
          context.report({
            node,
            messageId: 'useDesignTokens',
            data: { color: value.match(pattern)?.[0] || 'custom color' },
          });
        }
      }

      // Check for Tailwind color classes
      for (const pattern of colorClassPatterns) {
        let match;
        while ((match = pattern.exec(value)) !== null) {
          const colorName = match[1];
          if (colorName && !allowedColors.includes(colorName)) {
            context.report({
              node,
              messageId: 'useDesignTokens',
              data: { color: colorName },
            });
          }
        }
      }
    }

    return {
      Literal(node) {
        if (typeof node.value === 'string') {
          checkColorUsage(node.value, node);
        }
      },
      TemplateElement(node) {
        if (node.value.raw) {
          checkColorUsage(node.value.raw, node);
        }
      },
    };
  },
};

// Rule to enforce design system spacing
const enforceSpacingTokensRule: Rule.RuleModule = {
  meta: {
    type: 'problem', 
    docs: {
      description: 'Enforce usage of design system spacing tokens (4, 8, 12, 16, 24, 32)',
      category: 'Design System',
      recommended: true,
    },
    messages: {
      useSpacingTokens: 'Use design system spacing tokens: 0, 4, 8, 12, 16, 24, 32. Custom spacing "{{spacing}}" is not allowed.',
    },
    schema: [],
  },
  create(context) {
    const allowedSpacing = ['0', '4', '8', '12', '16', '24', '32'];
    
    // Pattern to match Tailwind spacing classes
    const spacingClassPatterns = [
      /\b(?:p|m|gap|space-[xy]?|inset|top|right|bottom|left)-(\d+)\b/g,
    ];

    function checkSpacingUsage(value: string, node: any) {
      for (const pattern of spacingClassPatterns) {
        let match;
        while ((match = pattern.exec(value)) !== null) {
          const spacingValue = match[1];
          if (spacingValue && !allowedSpacing.includes(spacingValue)) {
            context.report({
              node,
              messageId: 'useSpacingTokens',
              data: { spacing: spacingValue },
            });
          }
        }
      }
    }

    return {
      Literal(node) {
        if (typeof node.value === 'string') {
          checkSpacingUsage(node.value, node);
        }
      },
      TemplateElement(node) {
        if (node.value.raw) {
          checkSpacingUsage(node.value.raw, node);
        }
      },
    };
  },
};

export = {
  meta: {
    name: 'eslint-plugin-tanqory-mies',
    version: '0.1.0',
  },
  rules: {
    'no-rounded': noRoundedRule,
    'no-shadow': noShadowRule,
    'no-gradient': noGradientRule,
    'enforce-design-tokens': enforceDesignTokensRule,
    'enforce-spacing-tokens': enforceSpacingTokensRule,
  },
  configs: {
    recommended: {
      plugins: ['tanqory-mies'],
      rules: {
        'tanqory-mies/no-rounded': 'error',
        'tanqory-mies/no-shadow': 'error',
        'tanqory-mies/no-gradient': 'error',
        'tanqory-mies/enforce-design-tokens': 'error',
        'tanqory-mies/enforce-spacing-tokens': 'warn',
      },
    },
    strict: {
      plugins: ['tanqory-mies'],
      rules: {
        'tanqory-mies/no-rounded': 'error',
        'tanqory-mies/no-shadow': 'error',
        'tanqory-mies/no-gradient': 'error',
        'tanqory-mies/enforce-design-tokens': 'error',
        'tanqory-mies/enforce-spacing-tokens': 'error',
      },
    },
  },
};