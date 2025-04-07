# Kurocado Studio Design System

## Documentation

For a complete overview of this Design System’s objectives, features, and success criteria, see the
[Design System Overview](https://kurocado-studio.github.io/design-system/).

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
