import { get } from 'lodash-es';
import type { CustomThemeConfig } from 'tailwindcss/types/config';

import tokens from '../tokens/tokens.json';

function getTailwindColors(): {
  colors: Required<CustomThemeConfig['colors']>;
  colorCssVariableMap: Record<string, string>;
} {
  const primitives: Record<string, unknown> = get(
    tokens,
    ['colors/colors', 'colors'],
    {},
  );
  const colors: Record<string, unknown> = {};
  const colorCssVariableMap: Record<string, string> = {};

  for (const [colorName, colorValue] of Object.entries(primitives)) {
    if (typeof colorValue === 'undefined') continue;
    if (colorValue === null) continue;

    const variableValue = get(colorValue, ['value']);

    if (typeof variableValue === 'string') {
      const cssVar = `--color-${colorName})`;
      colors[colorName] = `var(${cssVar})`;
      colorCssVariableMap[cssVar] = variableValue;
    } else {
      const shades: Record<string, string> = {};

      for (const [shade, shadeDef] of Object.entries(colorValue)) {
        if (typeof shadeDef === 'object' && 'value' in shadeDef) {
          const shadeCssVar = `--color-${colorName}-${shade}`;

          shades[shade] = `var(${shadeCssVar})`;
          colorCssVariableMap[shadeCssVar] = shadeDef.value as string;
        }
      }
      colors[colorName] = shades;
    }
  }

  return { colors, colorCssVariableMap };
}

export const { colors, colorCssVariableMap } = getTailwindColors();
