# Contributing

How to contribute to the Tanqory Mies design system and make it better for everyone.

## Getting Started

### Development Setup
Set up your local environment for contributing to Mies.

**Clone Repository**
```bash
git clone https://github.com/tanqory/mies.git
cd mies
```

**Install Dependencies**
```bash
npm install
```

**Start Development**
```bash
npm run dev
```

### Project Structure
Understanding how the codebase is organized.

**Core Packages**
```
packages/
├── mies-tokens/        # Design tokens
├── mies-core-web/      # React components
├── mies-core-native/   # React Native components
├── mies-tailwind/      # Tailwind preset
├── mies-icons/         # Icon library
└── dev-tools/          # Development utilities
```

**Documentation**
```
docs/
├── components/         # Component examples
├── foundations/        # Design principles
├── patterns/          # Usage patterns
└── tokens/            # Token documentation
```

## Design Contributions

### Design Principles
All design contributions must align with Mies core principles.

**Three-Color Rule**
Only use brand (#E1FF00), black (#000000), and white (#FFFFFF).

**No Decorative Elements**
- No rounded corners
- No shadows
- No gradients
- No unnecessary visual flourishes

**Functional Focus**
Every element must serve a clear user need.

### Design Process

**1. Research Phase**
- Identify user problems through data and feedback
- Analyze existing patterns and components
- Document use cases and requirements

**2. Design Phase**
- Create designs that solve specific user problems
- Follow Mies constraints strictly
- Design for both web and mobile platforms

**3. Validation Phase**
- Test designs with real users
- Validate accessibility compliance
- Ensure cross-platform consistency

## Code Contributions

### Component Development
Guidelines for creating and improving components.

**Component Standards**
```typescript
// TypeScript-first development
interface ButtonProps {
  variant: 'primary' | 'outline';
  size?: 'sm' | 'base' | 'lg';
  children: React.ReactNode;
}

// Server component by default
export function Button({ variant, size = 'base', children }: ButtonProps) {
  return (
    <button className={`mies-button mies-button-${variant} mies-button-${size}`}>
      {children}
    </button>
  );
}
```

**Testing Requirements**
```javascript
// Unit tests required
test('Button renders with correct variant class', () => {
  render(<Button variant="primary">Click me</Button>);
  expect(screen.getByRole('button')).toHaveClass('mies-button-primary');
});

// Accessibility tests required
test('Button is keyboard accessible', () => {
  render(<Button variant="primary">Click me</Button>);
  const button = screen.getByRole('button');
  button.focus();
  expect(button).toHaveFocus();
});
```

### Code Quality Standards

**TypeScript**
- Strict TypeScript configuration
- Full type coverage for all components
- Proper interface definitions

**Performance**
- Bundle size monitoring
- Runtime performance optimization
- Accessibility performance

**Testing**
- Unit tests for all components
- Integration tests for complex interactions
- Visual regression tests

## Documentation Contributions

### Writing Guidelines
Clear, concise documentation that helps users succeed.

**Content Structure**
```markdown
# Component Name

Brief description of component purpose.

## Usage

Basic usage example with code.

## Props

Table of all available props.

## Examples

Multiple examples showing different use cases.

## Accessibility

Accessibility features and considerations.
```

**Code Examples**
- Always provide working code examples
- Show both basic and advanced usage
- Include TypeScript types
- Demonstrate accessibility features

**Writing Style**
- Direct and actionable
- Focus on user goals
- Avoid unnecessary complexity
- Use consistent terminology

## Submission Process

### Pull Request Guidelines

**Before Submitting**
- [ ] Tests pass locally
- [ ] Code follows style guidelines
- [ ] Documentation updated
- [ ] Accessibility verified
- [ ] Cross-platform tested

**PR Template**
```markdown
## Summary
Brief description of changes and why they're needed.

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] Accessibility tested
- [ ] Cross-browser tested

## Screenshots
Before/after screenshots for visual changes.

## Breaking Changes
List any breaking changes and migration steps.
```

### Review Process

**Automated Checks**
- TypeScript compilation
- Test suite execution
- Bundle size analysis
- Accessibility auditing

**Human Review**
- Design system consistency
- Code quality and patterns
- Documentation completeness
- User experience impact

**Approval Criteria**
- All automated checks pass
- Two approvals from core team
- Design review for visual changes
- Accessibility review for interactive components

## Community Guidelines

### Code of Conduct
We are committed to providing a welcoming and inclusive experience for everyone.

**Our Standards**
- Use welcoming and inclusive language
- Respect differing viewpoints and experiences
- Accept constructive criticism gracefully
- Focus on what is best for the community

**Unacceptable Behavior**
- Harassment or discriminatory language
- Public or private harassment
- Publishing others' private information
- Other conduct inappropriate in a professional setting

### Getting Help

**Discord Community**
Join our Discord for real-time discussions and help.

**GitHub Issues**
- Bug reports
- Feature requests
- Documentation improvements

**Office Hours**
Weekly community calls for contributors:
- Tuesdays 10:00 AM EST
- Fridays 3:00 PM EST

## Recognition

### Contributor Recognition
We recognize and celebrate all contributions to Mies.

**Contributor Types**
- Code contributors
- Design contributors
- Documentation contributors
- Community support contributors

**Recognition Methods**
- GitHub contributor graphs
- Release notes acknowledgments
- Community Discord highlights
- Annual contributor awards

### Becoming a Core Contributor
Long-term, consistent contributors may be invited to join the core team.

**Expectations**
- Regular, high-quality contributions
- Community leadership and mentoring
- Design system expertise
- Commitment to project values

## Release Process

### Versioning
We follow semantic versioning for all packages.

**Version Types**
- **Major**: Breaking changes requiring migration
- **Minor**: New features, backward compatible
- **Patch**: Bug fixes and improvements

**Release Cadence**
- Major releases: Quarterly
- Minor releases: Monthly
- Patch releases: As needed

### Migration Support
We provide comprehensive migration support for breaking changes.

**Migration Tools**
- Automated codemods where possible
- Step-by-step migration guides
- Community support during transitions

## Questions and Support

Have questions about contributing? We're here to help:

- **Discord**: Real-time community support
- **GitHub Issues**: Technical questions and bug reports
- **Email**: design-system@tanqory.com for sensitive matters

Thank you for helping make Tanqory Mies better for everyone!