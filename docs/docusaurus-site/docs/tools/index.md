# Tools

**Less configuration. More productivity.**

The Tanqory Mies developer tools ecosystem accelerates development through systematic automation, intelligent enforcement, and seamless integration with your existing workflow.

## Developer Tools Ecosystem

Every tool follows Mies principles: functional, minimal, purposeful. No bloat. No complexity. Just the essentials that matter for commerce-focused development.

### Development Environment

**[VS Code Integration](/docs/tools/vscode-integration)**  
Extension for syntax highlighting, IntelliSense, component previews, and design token autocomplete.

**[Sandbox (Alpha)](/docs/tools/sandbox-alpha)**  
Interactive playground for testing components, patterns, and design tokens in isolation.

### Code Quality & Migration

**[ESLint Rules](/docs/tools/stylelint-rules)**  
Automated linting rules that enforce Mies design tokens, prevent visual drift, and catch accessibility issues.

**[Migrator CLI](/docs/tools/migrator-cli)**  
Command-line tool for migrating components between design system versions with automated refactoring.

### Documentation & Testing

**[Storybook Kit](/docs/tools/storybook-kit)**  
Pre-configured Storybook setup with Mies components, design tokens, and automated visual regression testing.

**[CLI Utilities](/docs/tools/cli-utilities)**  
Command-line helpers for scaffolding, validation, bundle analysis, and development workflow optimization.

### Design Workflow

**[Figma Resources](/docs/tools/figma-resources)**  
Design files, component libraries, plugins, and automated design token sync for designer-developer collaboration.

## Getting Started

Install the complete development toolkit:

```bash
# Core development tools
npm install -D @tanqory/mies-cli @tanqory/mies-vscode

# Code quality enforcement  
npm install -D eslint-plugin-tanqory-mies @tanqory/mies-stylelint

# Documentation and testing
npm install -D @tanqory/mies-storybook @tanqory/mies-sandbox
```

## Workflow Integration

### 1. Setup Development Environment
- Install VS Code extension for IntelliSense and previews
- Configure ESLint rules for automated design system enforcement
- Set up Storybook for component development and testing

### 2. Component Development
- Use Sandbox for rapid prototyping and experimentation  
- Leverage CLI utilities for scaffolding and validation
- Preview changes in Storybook with automated visual regression detection

### 3. Design System Migration
- Run Migrator CLI for version upgrades and refactoring
- Validate changes with automated linting and testing
- Sync design tokens with Figma resources for design consistency

### 4. Quality Assurance
- Automated accessibility testing through ESLint rules
- Bundle size analysis with CLI utilities
- Visual regression testing in Storybook kit

## Philosophy

Tools should eliminate decisions, not create them. Each tool in the Mies ecosystem focuses on a specific aspect of the development workflow, following our core principle: **systematic constraints liberate creativity**.

By automating the routine and enforcing the essential, developers spend more time solving business problems and less time debating implementation details.

## Tool Selection Criteria

Every tool in the Mies ecosystem must:

- **Serve a single purpose** — No Swiss Army knife solutions
- **Enforce design system consistency** — Prevent visual drift automatically  
- **Integrate seamlessly** — Work with existing workflows without friction
- **Provide immediate value** — Measurable productivity improvement from day one
- **Maintain performance** — Fast execution, minimal overhead, zero bloat

---

*"The tools we use shape the work we create." — Choose tools that embody the principles you want to enforce.*