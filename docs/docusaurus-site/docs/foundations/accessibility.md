# Accessibility

Making global commerce better for everyone means caring deeply about **inclusive, high-quality products**.  
A quality product should always deliver an excellent user experience (UX) for every person.

This includes:

- Beautiful and functional design  
- Clear, consistent copy  
- Principles of universal design and inclusivity  
- Usability for all people, regardless of ability

It's essential that **Tanqory products—and partner apps built on Tanqory—are usable and valuable to everyone.**

## Why Accessibility Matters
Everyone includes merchants, their customers, developers, designers, employees, and the broader tech community—including people with disabilities that affect how they move, see, hear, communicate, learn, or process information.

- In the United States, about **1 in 4 adults** has at least one disability (CDC).  
- In Canada, the estimate is **22%**, and globally it's around **1 in 7** (Statistics Canada, World Bank).

## Building Inclusive Experiences
Using **Tanqory Mies components** is a direct way to improve accessibility and maintain consistency:

- Components ship with semantic, accessible markup  
- Updates and bug fixes propagate everywhere automatically  
- Shared knowledge from designers and developers benefits all Tanqory apps

Most accessibility features come built-in, but correct integration is crucial.  
Always test real user flows to confirm there are no unexpected barriers.

## Managing Focus
Do **not** programmatically move focus without user action.

**Do**
- When a user activates a link to another section, move focus to that section  
- When an overlay (modal, popover) opens, move focus to it  
- When a form submits with an error, move focus to the error message

**Don't**
- Move focus when background content updates  
- Move focus while the user is working elsewhere

Only interrupt focus when absolutely required to let the user continue.

## Avoiding Non-Standard Interactions
Users expect controls to behave according to browser, platform, and assistive-tech defaults.  
Introducing custom interactions can create barriers.

Before building a custom control, ask if the goal can be met using native features.  
If custom interactions are required:

- Follow established accessibility guidelines and test thoroughly  
- Provide clear instructions  
- Offer a standard alternative way to complete the task

## Assistive Technology Support
Components are tested with automated and manual methods to ensure compatibility with:

- Screen readers  
- Speech recognition software  
- Low-vision and color-blindness tools  
- Alternative keyboards  
- Switch devices  
- Readability aids

## Coding Standards
Tanqory Mies components start with **semantic HTML, CSS, and JavaScript**, using **WAI-ARIA** attributes only when native HTML cannot provide required functionality.

### Alternative Text
All icons and images that convey meaning include descriptive alternative text to support screen readers and text-to-speech tools.

## Conformance
Tanqory targets **WCAG 2.1 Level A and AA** success criteria to deliver a highly usable experience for everyone.

**Key references**
- [WCAG 2.1](https://www.w3.org/TR/WCAG21/)  
- [ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/)  

## Feedback
Accessibility is an ongoing effort.  
If you find issues or have suggestions, please [create a GitHub issue](https://github.com/tanqory/tanqory-mies/issues) to help us improve.