import type { Theme } from '../domain';
import {
  getTailwindBorderRadius,
  getTailwindColors,
  getTailwindDimensions,
  getTailwindFontFamily,
  getTailwindFontSize,
  getTailwindFontWeight,
} from '../domain/primitives';

export function composePrimitives(payload: Theme): {
  primitives: Record<string, Record<string, unknown>>;
  primitivesCssVariables: Record<string, unknown>;
} {
  const { fontSize, fontSizeCssVariableMap } = getTailwindFontSize(payload);

  const { color, colorCssVariableMap } = getTailwindColors(payload);

  const { fontFamily, fontFamilyCssVariableMap } =
    getTailwindFontFamily(payload);

  const { fontWeight, fontWeightCssVariableMap } =
    getTailwindFontWeight(payload);

  const { dimension, dimensionCssVariableMap } = getTailwindDimensions(payload);

  const { borderRadius, borderRadiusCssVariableMap } =
    getTailwindBorderRadius(payload);

  return {
    primitives: {
      spacing: dimension,
      fontSize,
      fontFamily,
      fontWeight,
      color,
      borderRadius,
    },
    primitivesCssVariables: {
      ...borderRadiusCssVariableMap,
      ...colorCssVariableMap,
      ...dimensionCssVariableMap,
      ...fontFamilyCssVariableMap,
      ...fontSizeCssVariableMap,
      ...fontWeightCssVariableMap,
      ...fontWeightCssVariableMap,
    },
  };
}
