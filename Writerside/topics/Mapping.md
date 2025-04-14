# Mapping Design Tokens to Tailwind via CSS Variables

## 1. Background and Motivation

- **Design Token Source:**  
  Our design team produces tokens in Figma/Token Studio. For example, tokens such as
  `primary-button-bg_hover`, `primary-button-bg`, `primary-button-text`, and more are exported as
  JSON payloads. These tokens include values for color, spacing, typography, and dimensions.

- **Consistent Language:**  
  We aim to use the same naming as the design team to reduce miscommunication. By preserving names
  like `primary-button-bg_hover` as CSS variable names, we create a common vocabulary.

- **Dynamic Theming:**  
  Using CSS variables allows our app to refresh styles dynamically. Changes in design tokens (e.g.,
  a new shade for hover states) automatically propagate when the tokens update.

- **Tailwind Integration:**  
  We plan to use Tailwind CSS for our utility-first styling. The key is to integrate our CSS
  variables into Tailwind’s setup so that developers can use classes like `bg-primary-button-bg` or
  `hover:bg-primary-button-bg_hover` directly.

- **Tooling:**  
  We are leveraging [Styledictionary v4](https://v4.styledictionary.com/info/dtcg/) as part of our
  token build process to generate the appropriate output from the token JSON.

## 2. Objectives

- **Preserve Design Language:**  
  Keep the token names as defined by the design team when mapping to CSS variables (e.g.,
  `primary-button-bg_hover` remains unchanged).

- **Generate CSS Variables:**  
  Create a build step (using a TypeScript-based utility) that recursively processes the token JSON
  and produces a CSS file (e.g., `design-tokens.css`).

- **Integrate with Tailwind:**  
  Extend the Tailwind setup (in `tailwind.config.js`) to reference these CSS variables, so tokens
  are used in spacing, colors, borderRadius, etc.

- **Maintain Flexibility:**  
  Allow for computed expressions within tokens (e.g., `"{dimension.xs} * {dimension.scale}"`), even
  if initial implementation just passes these as raw strings.

## 3. Proposed Approach

### Token JSON Structure

The design tokens JSON might resemble:

```json
{
  "dimension": {
    "scale": { "$type": "dimension", "$value": "2" },
    "xs": { "$type": "dimension", "$value": "4" },
    "sm": { "$type": "dimension", "$value": "{dimension.xs} * {dimension.scale}" },
    "md": { "$type": "dimension", "$value": "{dimension.sm} * {dimension.scale}" },
    "lg": { "$type": "dimension", "$value": "{dimension.md} * {dimension.scale}" },
    "xl": { "$type": "dimension", "$value": "{dimension.lg} * {dimension.scale}" }
  },
  "colors": {
    "primary-button-bg": { "$type": "color", "$value": "#7f56d9" },
    "primary-button-bg_hover": { "$type": "color", "$value": "#f6ad55" },
    "primary-button-text": { "$type": "color", "$value": "#ffffff" }
  }
  // ... other tokens ...
}
```

### CSS Variable Generation

The idea is to create a TypeScript utility that:

- Traverses the entire token JSON recursively.
- Uses the token’s key names to generate CSS variables.  
  For example, a token with the key `primary-button-bg_hover` is mapped to a CSS variable named
  `--primary-button-bg_hover`.

**Pseudocode Example:**

```ts
function generateCSSVariables(obj: any, prefix = ''): string {
  let css = '';
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'object' && !value.$type) {
      // Nested token groups: e.g., "dimension", "colors"
      css += generateCSSVariables(value, prefix ? `${prefix}-${key}` : key);
    } else if (value?.$value) {
      const varName = prefix ? `--${prefix}-${key}` : `--${key}`;
      css += `${varName}: ${value.$value};\n`;
    }
  }
  return css;
}
```

The generated CSS might look like:

```css
:root {
  --dimension-scale: 2;
  --dimension-xs: 4;
  --dimension-sm: {dimension.xs} * {dimension.scale};
  --dimension-md: {dimension.sm} * {dimension.scale};
  --dimension-lg: {dimension.md} * {dimension.scale};
  --dimension-xl: {dimension.lg} * {dimension.scale};
  --colors-primary-button-bg: #7f56d9;
  --colors-primary-button-bg_hover: #f6ad55;
  --colors-primary-button-text: #ffffff;
  /* ... additional tokens ... */
}
```

### Tailwind Theme Extension

The generated `design-tokens.css` file is imported globally. In our `tailwind.config.js`, we extend
the setup by referencing these variables:

```js
module.exports = {
  setup: {
    extend: {
      spacing: {
        xl: 'var(--spacing-xl)', // Map the token "xl" from spacing.
        // ... map other spacing tokens ...
      },
      colors: {
        'primary-button-bg': 'var(--colors-primary-button-bg)',
        'primary-button-bg_hover': 'var(--colors-primary-button-bg_hover)',
        'primary-button-text': 'var(--colors-primary-button-text)',
        // ... additional mappings ...
      },
      borderRadius: {
        sm: 'var(--borderRadius-sm)',
        lg: 'var(--borderRadius-lg)',
        xl: 'var(--borderRadius-xl)',
      },
    },
  },
  plugins: [],
};
```

### Component Usage Example

A React button component then uses Tailwind classes referencing these setup extensions:

```tsx
import React from 'react';

const PrimaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => (
  <button
    className='bg-primary-button-bg hover:bg-primary-button-bg_hover text-primary-button-text px-4 py-2 rounded'
    {...props}
  >
    {children}
  </button>
);

export default PrimaryButton;
```

Now when the design team updates tokens like `"primary-button-bg_hover"` in Figma, we regenerate our
CSS file, and Tailwind automatically uses the new values without modifying component class names.

## 4. Challenges & Next Steps

- **Expression Evaluation:**  
  Tokens with expressions (e.g., `"{dimension.xs} * {dimension.scale}"`) currently aren’t computed.
  Future work could integrate a lightweight evaluator.

- **Build Integration:**  
  Integrate the token processing script into our build pipeline (possibly using Styledictionary v4)
  to automatically generate the CSS file on token changes.

- **UI Customization:**  
  With tokens available as CSS variables, a UI could later be developed for dynamically updating the
  design system.
