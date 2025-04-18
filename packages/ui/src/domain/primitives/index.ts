import { type Theme } from '../types';
import { getTailwindBorderRadius } from './borderRadius';
import { getTailwindColors } from './colors';
import { getTailwindDimensions } from './dimensions';
import { getTailwindFontSize } from './typography';

export function composePrimitives(payload: Theme): {
  primitives: Record<string, Record<string, unknown>>;
  primitivesCssVariables: Record<string, unknown>;
} {
  const { fontSize, fontSizeCssVariableMap } = getTailwindFontSize(payload);
  const { colors, colorCssVariableMap } = getTailwindColors(payload);
  const { dimensions, dimensionsCssVariableMap } =
    getTailwindDimensions(payload);
  const { borderRadius, borderRadiusCssVariableMap } =
    getTailwindBorderRadius(payload);

  return {
    primitives: { spacing: dimensions, fontSize, colors, borderRadius },
    primitivesCssVariables: {
      ...colorCssVariableMap,
      ...dimensionsCssVariableMap,
      ...fontSizeCssVariableMap,
      ...borderRadiusCssVariableMap,
    },
  };
}
