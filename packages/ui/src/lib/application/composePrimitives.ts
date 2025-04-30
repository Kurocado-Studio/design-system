import {
  getTailwindBorderRadius,
  getTailwindColors,
  getTailwindDimensions,
  getTailwindFontSize,
} from '../domain/primitives';
import type { Theme } from '../domain/types';

export function composePrimitives(payload: Theme): {
  primitives: Record<string, Record<string, unknown>>;
  primitivesCssVariables: Record<string, unknown>;
} {
  const { fontSize, fontSizeCssVariableMap } = getTailwindFontSize(payload);
  const { color, colorCssVariableMap } = getTailwindColors(payload);
  const { dimension, dimensionCssVariableMap } = getTailwindDimensions(payload);
  const { borderRadius, borderRadiusCssVariableMap } =
    getTailwindBorderRadius(payload);

  return {
    primitives: { spacing: dimension, fontSize, color, borderRadius },
    primitivesCssVariables: {
      ...colorCssVariableMap,
      ...dimensionCssVariableMap,
      ...fontSizeCssVariableMap,
      ...borderRadiusCssVariableMap,
    },
  };
}
