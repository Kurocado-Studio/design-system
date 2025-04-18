import { get } from 'lodash-es';
import type { CustomThemeConfig } from 'tailwindcss/types/config';

import { type Theme } from 'src/domain/types';
import { createCssVariableEntry } from 'src/utils/createCssVariableEntry';

export function getTailwindBorderRadius(theme: Theme): {
  borderRadius: Required<CustomThemeConfig['borderRadius']>;
  borderRadiusCssVariableMap: Record<string, string>;
} {
  const primitives = get(theme, ['border-radius/border-radius'], {});

  const borderRadius: Record<string, unknown> = {};
  const borderRadiusCssVariableMap: Record<string, string> = {};

  for (const [borderRadiusPrimitiveName, borderRadiusValue] of Object.entries(
    primitives as Record<string, unknown>,
  )) {
    if (typeof borderRadiusValue === 'undefined') continue;
    if (borderRadiusValue === null) continue;

    const variableValue = get(borderRadiusValue, ['value']);

    if (typeof variableValue === 'string') {
      const { cssVariableReference, cssVariableName, cssVariableValue } =
        createCssVariableEntry(
          'border-radius',
          borderRadiusPrimitiveName,
          variableValue,
        );

      borderRadius[borderRadiusPrimitiveName] = cssVariableReference;
      borderRadiusCssVariableMap[cssVariableName] = cssVariableValue;
    } else {
      for (const [borderRadiusKeyName, borderRadiusKeyValue] of Object.entries(
        borderRadiusValue,
      )) {
        if (borderRadiusKeyName === 'value') {
          const { cssVariableReference, cssVariableName, cssVariableValue } =
            createCssVariableEntry(
              'radius',
              borderRadiusPrimitiveName,
              borderRadiusKeyValue,
            );

          borderRadius[borderRadiusKeyName] = cssVariableReference;
          borderRadiusCssVariableMap[cssVariableName] = cssVariableValue;
        }
      }
    }
  }

  return {
    borderRadius,
    borderRadiusCssVariableMap,
  };
}
