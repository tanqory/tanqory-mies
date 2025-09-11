# VS Code Integration

**IntelliSense for systematic design.**

The Tanqory Mies VS Code extension provides intelligent code completion, syntax highlighting, component previews, and design token autocomplete to enforce design system consistency directly in your editor.

## Purpose

Eliminate guesswork and prevent design drift by bringing the complete Mies design system into your development environment. The extension enforces constraints through smart suggestions and real-time validation.

## Installation

### From VS Code Marketplace

1. Open VS Code
2. Navigate to Extensions (`Ctrl+Shift+X` or `Cmd+Shift+X`)
3. Search for "Tanqory Mies"
4. Click Install on the official extension

### From Command Line

```bash
code --install-extension tanqory.mies-vscode
```

### Manual Installation

```bash
# Download and install the VSIX package
curl -o mies-vscode.vsix https://github.com/tanqory/mies-vscode/releases/latest/download/mies-vscode.vsix
code --install-extension mies-vscode.vsix
```

## Usage Guidelines

- **Design token autocomplete** — Type `mies.` to see all available design tokens with live previews
- **Component scaffolding** — Use command palette (`Cmd+Shift+P`) → "Mies: Generate Component" for instant setup  
- **Real-time validation** — Red underlines highlight design system violations as you type
- **Preview on hover** — Hover over component imports to see rendered previews with documentation

## Examples

### Design Token Autocomplete

```tsx
// Type "mies." to trigger intelligent suggestions
const styles = {
  color: mies.color.lime,           // ← Autocomplete with color preview
  spacing: mies.space.lg,           // ← Shows pixel value in tooltip  
  fontSize: mies.typography.body.lg  // ← Displays font specifications
}
```

### Component Import Intelligence

```tsx
// Autocomplete suggests only valid Mies components
import { Button, Card } from '@tanqory/mies-react'
//       ↑ Hover shows component preview and props documentation
```

### Snippet Generation

Type trigger → Press Tab → Get complete component structure:

```tsx
// Type "mies-button" + Tab
<Button
  variant="primary"
  size="lg" 
  onClick={handleClick}
>
  {/* cursor positioned here */}
</Button>
```

## Configuration

### Workspace Settings

Create `.vscode/settings.json` in your project root:

```json
{
  "tanqoryMies.enablePreview": true,
  "tanqoryMies.tokenSource": "auto",
  "tanqoryMies.validateOnType": true,
  "tanqoryMies.componentLibrary": "@tanqory/mies-react",
  "editor.quickSuggestions": {
    "strings": true
  }
}
```

### Extension Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `enablePreview` | `true` | Show component previews on hover |
| `tokenSource` | `"auto"` | Design token source: `auto`, `local`, or `cdn` |
| `validateOnType` | `true` | Real-time design system validation |
| `componentLibrary` | `"@tanqory/mies-react"` | Primary component library package |
| `showDeprecated` | `false` | Include deprecated tokens in autocomplete |

### Custom Token Path

For monorepos or custom token locations:

```json
{
  "tanqoryMies.tokenSource": "local",
  "tanqoryMies.tokenPath": "./packages/design-tokens/dist/tokens.json"
}
```

## Troubleshooting

### Autocomplete Not Working

**Issue**: Design tokens don't appear in autocomplete suggestions

**Solutions**:
1. Verify `@tanqory/mies-tokens` is installed in your project
2. Check workspace settings for correct `tokenPath`
3. Reload VS Code window (`Cmd+Shift+P` → "Developer: Reload Window")
4. Ensure TypeScript service is running (`Cmd+Shift+P` → "TypeScript: Restart TS Server")

### Component Previews Not Loading

**Issue**: Hover previews show loading state indefinitely

**Solutions**:
1. Check network connectivity (CDN-based previews)
2. Set `tokenSource` to `"local"` if working offline
3. Verify component library is properly installed
4. Clear extension cache: `Cmd+Shift+P` → "Tanqory Mies: Clear Cache"

### Performance Issues

**Issue**: VS Code becomes slow with extension enabled

**Solutions**:
1. Disable real-time validation: Set `validateOnType` to `false`
2. Reduce preview frequency: Set `enablePreview` to `false`
3. Use local tokens instead of CDN: Set `tokenSource` to `"local"`
4. Exclude large directories in `.vscode/settings.json`:
   ```json
   {
     "tanqoryMies.excludeGlobs": [
       "**/node_modules/**",
       "**/dist/**",
       "**/.next/**"
     ]
   }
   ```

### Token Sync Issues

**Issue**: Local tokens don't match extension suggestions

**Solutions**:
1. Update extension to latest version
2. Clear token cache: `Cmd+Shift+P` → "Tanqory Mies: Sync Tokens"
3. Verify token file format matches expected JSON schema
4. Check for conflicting extensions that modify IntelliSense