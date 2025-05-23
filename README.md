# Kurocado Studio Design System

|                 |                                                        |
| --------------- | ------------------------------------------------------ |
| React Storybook | <https://design-system-kurocado-studio.vercel.app>     |
| Vue Storybook   | <https://design-system-vue-kurocado-studio.vercel.app> |

## 🚧 Current Status & Direction

Kurocado Studio’s Design System is currently in an early-stage, proof-of-concept (PoC) phase. The
primary focus so far has been on building a technical foundation—ensuring multi-framework support
(React + Vue), a robust design-token pipeline via Token Studio, and automated integration with
Tailwind CSS and Storybook.

This system is evolving into a fully-fledged Design System, but currently operates as a Component
Library with centralized governance. Governance and contribution processes are in early planning and
will follow a centralized model to ensure consistency during the initial rollout.

Long-term documentation and design decisions will be managed using Supernova, to ensure a scalable
and collaborative workflow between design and development teams.

## High Level Overview

A token‑driven Design System whose look & feel can be tweaked in Figma and—via Token
Studio—propagated to React and Vue components, guaranteeing pixel‑perfect brand consistency without
hand‑off friction.

Kurocado Studio’s Design System delivers a single source of truth for typography, color, spacing,
and interaction patterns across web and mobile products. Designers iterate visually in Figma; Token
Studio syncs the updated design tokens to the codebase, and Storybook reflects the changes
instantly—so product teams ship new features faster while staying perfectly on‑brand.

```mermaid
flowchart LR
  subgraph Design Tools
    Figma[Figma]
    TokenStudio[Token Studio]
  end

  subgraph Build Process
    Tailwind[Tailwind CSS Engine]
    Bundler[Build & Publish]
  end

  subgraph Applications
    ReactSDK[React app using the Design System]
    VueSDK[Vue app using the Design System]
  end

  Figma --> TokenStudio --> Tailwind --> Bundler --> ReactSDK
  TokenStudio --> Bundler --> VueSDK
```

## Quick Demo

[![Demo Video](./demo/quick-demo-overview-cover.png)](https://youtu.be/RBpAYT4iMuU)

## New Project Setup

The quickest and easiest way to start using the Kurocado Studio Design System is with our
[Product Starter Kit](https://github.com/Kurocado-Studio/product-starter-kit). It’s a fully wired-up
boilerplate that includes everything you need to hit the ground running—design tokens, Tailwind
config, Storybook setup, and more.

## Documentation

For more information about this Design System’s objectives, features, and success criteria, see the
[Design System Overview](https://kurocado-studio.github.io/platform/design-system.html).

---

## Prerequisites

- **Node.js v20 or higher**  
  [Download Node.js](https://nodejs.org/)

- **PNPM**  
  [PNPM Installation Guide](https://pnpm.io/installation)  
  You can install PNPM globally with:
  ```bash
  npm install -g pnpm
  ```

---

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Kurocado-Studio/design-system.git
   cd design-system
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Initial setup**:
   ```bash
   pnpm run setup
   ```
   This command will install all required packages and run any setup scripts.

---

## Local Development

Depending on your monorepo structure, you might have commands for running a docs site or component
playground. Common scripts include:

- **Start development server** (e.g., Storybook):
  ```bash
  pnpm run dev
  ```
- **Build all packages**:
  ```bash
  pnpm run build
  ```
- **Run tests**:
  ```bash
  pnpm run test
  ```
- **Lint code**:
  ```bash
  pnpm run lint
  ```
