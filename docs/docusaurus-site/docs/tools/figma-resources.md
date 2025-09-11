# Figma Resources

**Design-to-code workflow with systematic precision.**

The Tanqory Mies Figma ecosystem provides design files, component libraries, plugins, and automated design token synchronization to ensure perfect alignment between design intent and code implementation.

## Purpose

Design-developer handoffs break down when tools don't speak the same language. Figma Resources bridge this gap by providing design files that mirror code implementation exactly, automated token sync, and plugins that enforce Mies constraints directly in the design process.

## Installation

### Figma Plugin Installation

1. Open Figma Desktop or Web
2. Go to Plugins → Browse all plugins
3. Search for "Tanqory Mies"
4. Install the official Mies plugin
5. Pin to Quick Actions for easy access

### Component Library Access

```bash
# Clone design system repository
git clone https://github.com/tanqory/mies-figma-library.git

# Or download library files directly
curl -o mies-components.fig https://files.mies.tanqory.com/figma/mies-components-v3.fig
```

### Design Token Sync

```bash
npm install --save-dev @tanqory/mies-figma-sync
```

Add to `package.json` scripts:

```json
{
  "scripts": {
    "sync:figma": "mies-figma-sync --token $FIGMA_TOKEN --file-key $FIGMA_FILE_KEY",
    "tokens:export": "mies-figma-sync export --format json,css,js"
  }
}
```

## Setup

### Plugin Configuration

Configure the Mies plugin for your project:

1. Open Figma plugin: `Plugins → Tanqory Mies → Settings`
2. Connect to design token source:
   ```json
   {
     "tokenSource": "local", // or "remote"
     "tokenPath": "./design-tokens/tokens.json",
     "componentLibrary": "@tanqory/mies-react"
   }
   ```
3. Enable real-time validation
4. Set up automated export preferences

### Team Library Setup

1. **Import Component Library**:
   - File → Import → Select `mies-components.fig`
   - Publish as Team Library
   - Enable for all team projects

2. **Configure Design Tokens**:
   - Install Figma Tokens plugin
   - Import Mies token JSON
   - Set up automatic sync with code repository

## Usage Guidelines

- **Use official components** — All Figma components mirror code components exactly for seamless handoff
- **Validate constraints automatically** — Plugin catches violations of Mies design principles in real-time
- **Sync tokens bidirectionally** — Design changes update code tokens and vice versa through automated workflow
- **Export code-ready assets** — All exports include proper naming and specifications for developer implementation

## Examples

### Component Usage

```figma
// Using Mies components in Figma
Button/Primary/Large
├── Text: "Add to Cart"
├── State: Default
├── Icon: None
└── Properties:
    ├── Variant: Primary
    ├── Size: Large  
    ├── Disabled: False
    └── Full Width: True

// This maps directly to code:
<Button variant="primary" size="lg" fullWidth>
  Add to Cart
</Button>
```

### Design Token Validation

```javascript
// Plugin validates token usage in real-time
const invalidDesign = {
  fill: '#FF5733',        // ❌ Not a Mies color
  cornerRadius: '8px',    // ❌ Violates sharp edge principle  
  effect: 'drop-shadow'   // ❌ No shadows allowed
};

const validDesign = {
  fill: '#E1FF00',       // ✅ Mies lime
  cornerRadius: '0px',   // ✅ Sharp edges
  effect: 'none'         // ✅ Flat surfaces
};
```

### Automated Export

```bash
# Export design specifications
mies-figma-sync export --format spec

# Generates developer handoff:
components/
├── Button/
│   ├── Button.spec.json
│   ├── assets/
│   │   ├── button-primary-lg.svg
│   │   └── button-states.png
│   └── tokens.json
```

### Token Synchronization

```javascript
// Bidirectional token sync
// Design changes update code automatically

// Figma → Code
const figmaTokens = {
  "color": {
    "brand": {
      "primary": "#E1FF00",
      "secondary": "#000000"
    }
  }
};

// Automatically generates:
// tokens/color.json
// tokens/color.css
// tokens/color.js
```

## Configuration Options

### Plugin Settings

```json
{
  "validation": {
    "enableRealTime": true,
    "rules": {
      "colorTokensOnly": true,
      "noRoundedCorners": true,
      "noShadows": true,
      "spacingScale": [4, 8, 12, 16, 24, 32]
    }
  },
  "export": {
    "format": "svg",
    "naming": "kebab-case",
    "includeSpecs": true,
    "optimizeAssets": true
  },
  "sync": {
    "autoSync": true,
    "interval": "30s",
    "conflictResolution": "manual"
  }
}
```

### Token Mapping

```javascript
// figma-tokens.config.js
module.exports = {
  source: {
    figma: {
      fileKey: process.env.FIGMA_FILE_KEY,
      token: process.env.FIGMA_TOKEN
    }
  },
  output: {
    formats: ['json', 'css', 'js', 'scss'],
    destination: './design-tokens/build/'
  },
  transforms: [
    'attribute/cti',
    'name/cti/kebab',
    'size/px',
    'color/hex'
  ],
  platforms: {
    web: {
      transforms: ['size/rem'],
      files: [{
        destination: 'tokens.css',
        format: 'css/variables'
      }]
    },
    mobile: {
      transforms: ['size/dp'],
      files: [{
        destination: 'tokens.json',
        format: 'json/flat'
      }]
    }
  }
}
```

### Team Workflow

```yaml
# .github/workflows/figma-sync.yml
name: Sync Figma Tokens
on:
  schedule:
    - cron: '0 9 * * *' # Daily at 9 AM
  workflow_dispatch:

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Sync Figma Tokens
        run: |
          npm install
          npm run sync:figma
        env:
          FIGMA_TOKEN: ${{ secrets.FIGMA_TOKEN }}
          FIGMA_FILE_KEY: ${{ secrets.FIGMA_FILE_KEY }}
      
      - name: Create PR
        uses: peter-evans/create-pull-request@v4
        with:
          title: 'chore: sync design tokens from Figma'
          body: 'Automated token sync from Figma design files'
          branch: 'figma-token-sync'
```

## Troubleshooting

### Plugin Not Loading

**Issue**: Mies plugin doesn't appear or fails to load

**Solutions**:
1. Update Figma Desktop app to latest version
2. Check internet connectivity (plugin requires online access)
3. Clear Figma cache: Help → Troubleshooting → Clear Cache and Restart
4. Reinstall plugin from Figma Plugin Directory

### Token Sync Failures

**Issue**: Design tokens don't sync between Figma and code

**Solutions**:
1. Verify Figma API token has read access to file
2. Check file key in configuration matches Figma URL
3. Ensure token format in Figma matches expected schema
4. Review network connectivity and firewall settings

### Component Library Mismatch

**Issue**: Figma components don't match code implementation

**Solutions**:
1. Update component library to latest version
2. Check version compatibility between Figma library and code package
3. Clear component overrides and reset to library defaults
4. Verify team library is properly enabled and up to date

### Export Quality Issues

**Issue**: Exported assets have incorrect sizing or format

**Solutions**:
1. Check export settings in plugin configuration
2. Verify frame naming follows convention: `component/variant/state`
3. Ensure artboards use absolute positioning (not constraints)
4. Use SVG format for icons and vector graphics
5. Set proper DPI settings for raster exports (2x for retina)