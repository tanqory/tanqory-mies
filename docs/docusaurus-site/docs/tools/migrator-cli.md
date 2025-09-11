# Migrator CLI

**Automated refactoring. Zero breakage.**

The Tanqory Mies Migrator CLI safely upgrades your codebase between design system versions with intelligent code transformation, dependency updates, and automated testing validation.

## Purpose

Design systems evolve. Applications must follow. The Migrator CLI eliminates the manual work of version upgrades by automatically refactoring your code, updating imports, transforming deprecated patterns, and ensuring nothing breaks in the process.

## Installation

### Global Installation

```bash
npm install -g @tanqory/mies-migrator
# or
yarn global add @tanqory/mies-migrator
# or  
pnpm install -g @tanqory/mies-migrator
```

### Project-Specific Installation

```bash
npm install --save-dev @tanqory/mies-migrator
# or
yarn add --dev @tanqory/mies-migrator
# or
pnpm install -D @tanqory/mies-migrator
```

### Via npx (No Installation)

```bash
npx @tanqory/mies-migrator@latest migrate --from 2.0.0 --to 3.0.0
```

## Usage Guidelines

- **Run on clean git state** — Always commit changes before migration to enable easy rollback
- **Review generated changes** — Use `--dry-run` flag to preview transformations before applying  
- **Test after migration** — Migrator runs your test suite automatically to catch regressions
- **Update incrementally** — Migrate one major version at a time for safer upgrades

## Examples

### Basic Version Upgrade

```bash
# Migrate from current version to latest
mies-migrator migrate --to latest

# Migrate between specific versions
mies-migrator migrate --from 2.1.0 --to 3.0.0

# Preview changes without applying
mies-migrator migrate --to 3.0.0 --dry-run
```

### Targeted Migration

```bash
# Migrate specific files or directories
mies-migrator migrate --to 3.0.0 --include "src/components/**"

# Exclude certain patterns
mies-migrator migrate --to 3.0.0 --exclude "**/*.test.tsx"

# Focus on specific transformation types
mies-migrator migrate --to 3.0.0 --transforms "imports,props,tokens"
```

### Advanced Options

```bash
# Custom configuration file
mies-migrator migrate --config ./mies-migrator.config.js

# Skip automatic testing
mies-migrator migrate --to 3.0.0 --no-test

# Verbose output for debugging
mies-migrator migrate --to 3.0.0 --verbose

# Force migration even with failing tests
mies-migrator migrate --to 3.0.0 --force
```

## Configuration

### Project Configuration

Create `mies-migrator.config.js` in your project root:

```javascript
module.exports = {
  // Source patterns to include
  include: [
    'src/**/*.{ts,tsx,js,jsx}',
    'pages/**/*.{ts,tsx}',
    '!**/*.test.*'
  ],
  
  // Files to exclude from migration
  exclude: [
    'node_modules/**',
    'dist/**',
    '**/*.config.js'
  ],
  
  // Transformation rules to apply
  transforms: [
    'imports',      // Update import statements
    'props',        // Transform component props
    'tokens',       // Update design token references
    'deprecated',   // Replace deprecated patterns
    'accessibility' // Add accessibility improvements
  ],
  
  // Custom transformation rules
  customTransforms: [
    './transforms/legacy-button.js',
    './transforms/color-migration.js'
  ],
  
  // Testing configuration
  test: {
    command: 'npm test',
    skipOnFailure: false,
    timeout: 300000 // 5 minutes
  },
  
  // Backup options
  backup: {
    enabled: true,
    path: '.mies-backup'
  }
}
```

### Package.json Integration

Add migration scripts to your `package.json`:

```json
{
  "scripts": {
    "migrate:preview": "mies-migrator migrate --to latest --dry-run",
    "migrate:latest": "mies-migrator migrate --to latest",
    "migrate:test": "mies-migrator migrate --to latest --dry-run --verbose"
  }
}
```

### Environment Variables

```bash
# Set default migration target
export MIES_MIGRATION_TARGET=3.0.0

# Custom registry for private packages
export MIES_REGISTRY=https://npm.company.com

# Disable automatic backups
export MIES_BACKUP_DISABLED=true
```

## Troubleshooting

### Migration Fails with Parse Errors

**Issue**: Syntax errors prevent code transformation

**Solutions**:
1. Fix TypeScript/JavaScript syntax errors before migration
2. Ensure all dependencies are installed: `npm install`
3. Use `--verbose` flag to see detailed error information
4. Check file encoding (should be UTF-8)

### Tests Fail After Migration

**Issue**: Automated tests fail after applying transformations

**Solutions**:
1. Review failed test output for specific issues
2. Check if test files need migration too: add `**/*.test.*` to `include` patterns
3. Update test snapshots if using visual regression testing
4. Use `--no-test` flag to skip testing temporarily, then fix manually

### Incomplete Transformations

**Issue**: Some code patterns weren't updated

**Solutions**:
1. Check if patterns are covered by transformation rules
2. Add custom transformation rules for project-specific patterns
3. Use `--verbose` to see which files were skipped and why
4. Review the migration report for manual changes needed

### Performance Issues

**Issue**: Migration takes too long on large codebases

**Solutions**:
1. Use more specific `include` patterns to reduce file count
2. Run migration on smaller chunks using `--include` with specific directories
3. Exclude unnecessary files like generated code or vendor files
4. Use `--parallel` flag to enable multi-core processing:
   ```bash
   mies-migrator migrate --to 3.0.0 --parallel 4
   ```

### Version Conflicts

**Issue**: Cannot migrate due to dependency version conflicts

**Solutions**:
1. Update conflicting dependencies manually first
2. Use `--force-deps` to override version checks
3. Check for peer dependency requirements in migration target
4. Consider migrating dependencies separately before design system upgrade