import { type CustomThemeConfig } from 'tailwindcss/types/config';

import tokens from '../tokens/tokens.json';
import { type Theme } from '../types';
import { getTailwindBorderRadius } from './borderRadius';
import { getTailwindColors } from './colors';
import { getTailwindDimensions } from './dimensions';
import { getTailwindFontSize } from './typography';

export type ComposedTheme = {
  tailwindTheme: Partial<CustomThemeConfig>;
  cssVariables: Record<string, unknown>;
};

export function composeDesignSystemTheme(payload: Theme): ComposedTheme {
  const { fontSize, fontSizeCssVariableMap } = getTailwindFontSize(payload);
  const { colors, colorCssVariableMap } = getTailwindColors(payload);
  const { dimensions, dimensionsCssVariableMap } =
    getTailwindDimensions(payload);
  const { borderRadius, borderRadiusCssVariableMap } =
    getTailwindBorderRadius(payload);

  return {
    tailwindTheme: { spacing: dimensions, fontSize, colors, borderRadius },
    cssVariables: {
      ...colorCssVariableMap,
      ...dimensionsCssVariableMap,
      ...fontSizeCssVariableMap,
      ...borderRadiusCssVariableMap,
    },
  };
}

export const kurocadoStudioTheme: Partial<CustomThemeConfig> =
  composeDesignSystemTheme(tokens).tailwindTheme;
