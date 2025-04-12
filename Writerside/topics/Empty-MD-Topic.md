# Color & Shadow Tokens

> **Scope**This document catalogs the current **color palette** and **shadow effects** exported from
> Token Studio, describes their naming conventions, and shows how each token is consumed in Tailwind
> and CSS‑in‑JS.

## Naming Conventions

| Layer         | Pattern                    | Example                           |
| ------------- | -------------------------- | --------------------------------- |
| **Primitive** | `colors.<hue>.<weight>`    | `colors.blue.500`                 |
| **Alias**     | `alias.color.<semantic>`   | `alias.color.primary.interaction` |
| **Shadow**    | `tw_effects.shadow.<size>` | `tw_effects.shadow.md`            |

_Weights_ follow Tailwind’s `50‑900` scale (lighter → darker). Hues that diverge from the standard
palette (e.g. `true‑gray`, `blue‑gray`) are kebab‑cased.

## Primitive Color Palette

#### White

- **Token path:** `colors.white`
- **HEX:** `#ffffff`
- **Tailwind class:** `bg-white / text-white`

#### Gray Scales

| Hue           | Available Weights                      |
| ------------- | -------------------------------------- |
| **blue‑gray** | 50 100 200 300 400 500 600 700 800 900 |
| **cool‑gray** | 50 100 200 300 400 500 600 700 800 900 |
| **gray**      | 50 100 200 300 400 500 600 700 800 900 |
| **true‑gray** | 10 50 200 300 400 500 600 700 800 900  |
| **warm‑gray** | 50 100 200 300 400 500 600 700 800 900 |

#### Brand & Accent Hues

| Hue            | Weights |
| -------------- | ------- |
| **red**        | 50‑900  |
| **orange**     | 50‑900  |
| **amber**      | 50‑900  |
| **yellow**     | 50‑900  |
| **lime**       | 50‑900  |
| **green**      | 50‑900  |
| **emerald**    | 50‑900  |
| **teal**       | 50‑900  |
| **cyan**       | 50‑900  |
| **light‑blue** | 50‑900  |
| **blue**       | 50‑900  |
| **indigo**     | 50‑900  |
| **violet**     | 50‑900  |
| **purple**     | 50‑900  |
| **fuschia**    | 50‑900  |
| **pink**       | 50‑900  |
| **rose**       | 50‑900  |

> ℹ️ All primitives are automatically exposed as CSS variables using the pattern
> `--colors-<hue>-<weight>` (e.g. `--colors-blue-500`).

## Shadow Tokens (`tw_effects.shadow`)

| Size        | Composition                                              | Equivalent Tailwind Utility |
| ----------- | -------------------------------------------------------- | --------------------------- |
| **sm**      | Single drop shadow (`x:0 y:1 blur:2 spread:0 #0000000d`) | `shadow-sm`                 |
| **base**    | 2-layer drop shadow                                      | `shadow`                    |
| **md**      | 2-layer drop shadow, larger blur                         | `shadow-md`                 |
| **default** | 2-layer, subtle offset                                   | `shadow`                    |
| **lg**      | 2-layer, long shadow                                     | `shadow-lg`                 |
| **xl**      | 2-layer, very soft                                       | `shadow-xl`                 |
| **2xl**     | Single, massive                                          | `shadow-2xl`                |
| **inner**   | Inner shadow                                             | `shadow-inner`              |

> Each shadow token is exported as a multi‑value CSS variable (`--tw-effects-shadow-md`) so it can
> be dropped into the `box-shadow` property without manual concatenation.

## Usage Examples

```tsx
// Tailwind
<button className='bg-alias-color-primary-interaction'>CTA</button>
```

## Updating Tokens

1. **Designer** updates a value in Figma → Token Studio.
2. **Sync** writes the new JSON into `design-tokens/colors.json`.
3. **Build script** regenerates `src/generated/tailwindTheme.ts` and repaints CSS variables at
   runtime.
4. **Hot‑reload** kicks in → UI reflects the change instantly.

## Future Work

- Map remaining token sets (`font-styling`, `text-dimensions-tailwind`, etc.).
- Document dark‑mode overrides once the `theme.default` & `theme.dark` sets are finalized.
- Add visual swatches in Storybook via the `@storybook/addon-docs` MDX integration.
