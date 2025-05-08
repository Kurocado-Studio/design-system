import { get, set } from 'lodash-es';
import type { CustomThemeConfig } from 'tailwindcss/types/config';

import { createCssVariableEntry } from '../../utils';
import { type Theme } from '../types';

export function getTailwindBorderRadius(theme: Theme): {
  borderRadius: Required<CustomThemeConfig['borderRadius']>;
  borderRadiusCssVariableMap: Record<string, string>;
} {
  const primitives = get(theme, ['primitives', 'dimension', 'radius'], {});

  const borderRadius: Record<string, unknown> = {};
  const borderRadiusCssVariableMap: Record<string, string> = {};

  for (const [borderRadiusPrimitiveName, borderRadiusValue] of Object.entries(
    primitives as Record<string, unknown>,
  )) {
    if (typeof borderRadiusValue === 'undefined') continue;
    if (borderRadiusValue === null) continue;

    const variableValue = get(borderRadiusValue, ['$value']);

    if (typeof variableValue === 'string') {
      const { cssVariableReference, cssVariableName, cssVariableValue } =
        createCssVariableEntry(
          'border-radius',
          borderRadiusPrimitiveName,
          variableValue,
        );

      set(borderRadius, [borderRadiusPrimitiveName], cssVariableReference);
      set(borderRadiusCssVariableMap, [cssVariableName], cssVariableValue);
    } else {
      for (const [borderRadiusKeyName, borderRadiusKeyValue] of Object.entries(
        borderRadiusValue,
      )) {
        if (borderRadiusKeyName === '$value') {
          const { cssVariableReference, cssVariableName, cssVariableValue } =
            createCssVariableEntry(
              'radius',
              borderRadiusPrimitiveName,
              borderRadiusKeyValue,
            );

          set(borderRadius, [borderRadiusKeyName], cssVariableReference);
          set(borderRadiusCssVariableMap, [cssVariableName], cssVariableValue);
        }
      }
    }
  }

  return {
    borderRadius,
    borderRadiusCssVariableMap,
  };
}
