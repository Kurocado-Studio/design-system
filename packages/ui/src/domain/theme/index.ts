import { type CustomThemeConfig } from 'tailwindcss/types/config';

import { getTailwindBorderRadius } from 'src/domain/primitives/borderRadius';
import { getTailwindColors } from 'src/domain/primitives/colors';
import { getTailwindDimensions } from 'src/domain/primitives/dimensions';
import { getTailwindFontSize } from 'src/domain/primitives/typography';
import tokens from 'src/domain/tokens/tokens.json';
import { type Theme } from 'src/domain/types';

import { composeTheme } from './composeTheme';

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

  const tailwindTheme = composeTheme(payload, {
    spacing: dimensions,
    fontSize,
    colors,
    borderRadius,
  });

  return {
    tailwindTheme,
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
