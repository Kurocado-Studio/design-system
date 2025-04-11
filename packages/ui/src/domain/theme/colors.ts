import type { CustomThemeConfig } from 'tailwindcss/types/config';

import tokens from '../tokens/tokens.json';

function getTailwindColors(): { colors: Record<string, unknown> } {
  const primitives = tokens['primitives/colors'].colors;
  const colors: Record<string, unknown> = {};

  for (const [colorName, colorValue] of Object.entries(primitives)) {
    // Flat color like "white"
    if ('value' in colorValue) {
      colors[colorName] = colorValue.value;
    } else {
      // Nested color like "green", "blue-gray", etc.
      const shades: Record<string, string> = {};
      for (const [shade, shadeDef] of Object.entries(colorValue)) {
        if (typeof shadeDef === 'object' && 'value' in shadeDef) {
          shades[shade] = shadeDef.value;
        }
      }
      colors[colorName] = shades;
    }
  }

  return { colors };
}

export const colors: Required<CustomThemeConfig['colors']> =
  getTailwindColors().colors;
