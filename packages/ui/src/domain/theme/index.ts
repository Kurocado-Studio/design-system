import { type CustomThemeConfig } from 'tailwindcss/types/config';

import { tokens } from '../tokens/tokens';
import { type Theme } from '../types';
import { getTailwindBorderRadius } from './borderRadius';
import { getTailwindColors } from './colors';
import { getTailwindDimensions } from './dimensions';
// import { fontFamily } from './fontFamily';
import { getTailwindFontSize } from './typography';

export type ComposedTheme = {
  tailwindTheme: Partial<CustomThemeConfig>;
  cssVariables: Record<string, unknown>;
};

export const composeTheme = (payload?: Theme): ComposedTheme => {
  const theme = payload || tokens;
  const { fontSize, fontSizeCssVariableMap } = getTailwindFontSize(theme);
  const { colors, colorCssVariableMap } = getTailwindColors(theme);
  const { dimensions, dimensionsCssVariableMap } = getTailwindDimensions(theme);
  const { borderRadius, borderRadiusCssVariableMap } =
    getTailwindBorderRadius(theme);

  return {
    tailwindTheme: { spacing: dimensions, fontSize, colors, borderRadius },
    cssVariables: {
      ...colorCssVariableMap,
      ...dimensionsCssVariableMap,
      ...fontSizeCssVariableMap,
      ...borderRadiusCssVariableMap,
    },
  };
};

export const kurocadoStudioTheme: Partial<CustomThemeConfig> =
  composeTheme().tailwindTheme;
