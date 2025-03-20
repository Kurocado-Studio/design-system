# Kurocado Studio Design System

A comprehensive, scalable design system built to unify user interfaces and enhance development
efficiency across Kurocado Studio applications.

## Overview

The Kurocado Studio Design System provides reusable UI components, design tokens, and guidelines to
maintain visual consistency and streamline the design-to-development workflow. Designed with
TypeScript and React, this system integrates seamlessly with your frontend projects, incorporating
dynamic theming via Tailwind CSS, accessibility (a11y) through React Aria, and engaging animations
and transitions powered by Framer Motion.

## Features

- **Reusable Components:** Ready-to-use React components built with accessibility and responsiveness
  in mind.
- **Design Tokens:** Centralized variables for colors, typography, spacing, and more, ensuring
  consistent design language across projects.
- **Dynamic Theming:** Customizable themes powered by Tailwind CSS for effortless styling.
- **Accessibility First:** Components designed and tested for accessibility, leveraging React Aria
  to meet WCAG standards.
- **Animations and Transitions:** Smooth, modern animations using Framer Motion to enhance user
  experience.
- **Integration Friendly:** Easy to incorporate into projects, compatible with popular frameworks
  and tools like Remix.
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Changesets](https://github.com/changesets/changesets) for managing versioning and changelogs
- [GitHub Actions](https://github.com/changesets/action) for fully automated package publishing

## Using this example

Run the following command:

```sh
npx create-turbo@latest -e design-system
```

### Useful Commands

- `pnpm build` - Build all packages, including the Storybook site
- `pnpm dev` - Run all packages locally and preview with Storybook
- `pnpm lint` - Lint all packages
- `pnpm changeset` - Generate a changeset
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

## Turborepo

[Turborepo](https://turbo.build/repo) is a high-performance build system for JavaScript and
TypeScript codebases. It was designed after the workflows used by massive software engineering
organizations to ship code at scale. Turborepo abstracts the complex configuration needed for
monorepos and provides fast, incremental builds with zero-configuration remote caching.

Using Turborepo simplifies managing your design system monorepo, as you can have a single lint,
build, test, and release process for all packages.
[Learn more](https://vercel.com/blog/monorepos-are-changing-how-teams-build-software) about how
monorepos improve your development workflow.
