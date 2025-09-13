# Component Lifecycle

Tanqory Mies components progress through defined lifecycle stages to ensure quality, consistency, and long-term stability. Each stage has clear goals and requirements, so designers and developers know what to expect and when to contribute feedback.

## Feedback and Suggestions
Have ideas or found an issue?  
Open a GitHub issue at any stage of the lifecycle to share feedback, ask questions, or suggest improvements.

## Alpha
The component is experimental and ready for early testing. Breaking changes are expected.

**Requirements**
- Clear purpose and rationale for inclusion in Tanqory Mies  
- Uses Mies design tokens only—no hard-coded values  
- Responsive and adaptive across all breakpoints  
- Meets baseline accessibility: contrast, interactive states, touch target sizes  
- Complete documentation with prop list and usage examples  
- Storybook examples provided  
- 100% test coverage  

**Expectations**
- Purpose and adoption are still being evaluated  
- APIs and visuals may change significantly or be removed entirely  
- Community feedback is highly encouraged through GitHub issues

## Beta
The component has a validated purpose and solid implementation. Ready for broader adoption, though minor breaking changes may still occur.

**Requirements**
- Successfully used multiple times in production within Tanqory apps  
- Meets all accessibility requirements for supported platforms (Web + Mobile)  
- Documentation includes comprehensive usage guidelines and common examples  
- Reviewed and tested by both design and development teams  
- Figma component available in the official Tanqory Mies library

**Expectations**
- Focus shifts to real-world testing and stability improvements  
- Migration guidance (both manual and automated) is actively developed

## Stable
The component is mature, battle-tested, and ready for full adoption with long-term support.

**Requirements**
- API is stable with no breaking changes until the next major release  
- Comprehensive usability testing and developer feedback collected  
- Complete documentation: props, variants, accessibility guidance, and usage patterns  
- Both manual and automated migration documentation provided and maintained

## Legacy
The component remains stable but is planned for replacement by a newer, improved solution.

**Requirements**
- Clear deprecation notice with recommended alternatives documented  
- Deprecation timeline announced at least one month before release  
- Migration paths—both manual and automated—documented and available for at least one month  
- No new features added, but critical bugs will be fixed

## Deprecated
The component is scheduled for removal and should no longer be used in new projects.

**Requirements**
- Runtime deprecation warnings in component code  
- Removal date announced at least one month in advance  
- Alternative components and detailed migration instructions documented  
- Migration tools and codemods available where applicable

## Next Steps

Now that you understand component lifecycle, continue with:

- [Building with Mies](/docs/getting-started/building-with-mies) - Practical implementation guide
- [Components](/docs/components) - Explore available components
- [Examples](/docs/examples) - See real-world usage patterns