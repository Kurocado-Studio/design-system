import { get, set } from 'lodash-es';
import type { CustomThemeConfig } from 'tailwindcss/types/config';

import { createCssVariableEntry } from 'src/lib/utils/createCssVariableEntry';

import type { Theme } from '../types';

export function getTailwindColors(theme: Theme): {
  color: Required<CustomThemeConfig['colors']>;
  colorCssVariableMap: Record<string, string>;
} {
  const primitives = get(theme, ['primitives', 'color'], {}) as Record<
    string,
    unknown
  >;

  const color: Record<string, unknown> = {};
  const colorCssVariableMap: Record<string, string> = {};

  for (const [colorName, colorValue] of Object.entries(primitives)) {
    if (!colorValue) continue;

    const variableValue = get(colorValue, ['$value']);

    if (typeof variableValue === 'string') {
      const { cssVariableReference, cssVariableName, cssVariableValue } =
        createCssVariableEntry('color', colorName, variableValue);

      set(color, [colorName], cssVariableReference);
      set(colorCssVariableMap, [cssVariableName], cssVariableValue);
    } else {
      const shades: Record<string, string> = {};

      for (const [shade, shadeDef] of Object.entries(colorValue)) {
        const shadeValue = get(shadeDef, ['$value']);
        if (typeof shadeValue !== 'string') continue;

        const { cssVariableName, cssVariableValue, cssVariableReference } =
          createCssVariableEntry('color', `${colorName}-${shade}`, shadeValue);

        set(shades, [shade], cssVariableReference);
        set(colorCssVariableMap, [cssVariableName], cssVariableValue);
      }
      set(color, [colorName], shades);
    }
  }

  return { color, colorCssVariableMap };
}
