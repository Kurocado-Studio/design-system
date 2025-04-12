import { get } from 'lodash-es';
import type { CustomThemeConfig } from 'tailwindcss/types/config';

import { createCssVariableEntry } from '../../utils/createCssVariableEntry';
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
      const { cssVariableReference, cssVariableName, cssVariableValue } =
        createCssVariableEntry('color', colorName, variableValue);

      colors[colorName] = cssVariableReference;
      colorCssVariableMap[cssVariableName] = cssVariableValue;
    } else {
      const shades: Record<string, string> = {};

      for (const [shade, shadeDef] of Object.entries(colorValue)) {
        const shadeValue = get(shadeDef, ['value']);

        if (typeof shadeValue === 'string') {
          const { cssVariableName, cssVariableValue, cssVariableReference } =
            createCssVariableEntry(
              'color',
              `${colorName}-${shade}`,
              shadeValue,
            );

          shades[shade] = cssVariableReference;
          colorCssVariableMap[cssVariableName] = cssVariableValue;
        }
      }
      colors[colorName] = shades;
    }
  }

  return { colors, colorCssVariableMap };
}

export const { colors, colorCssVariableMap } = getTailwindColors();
