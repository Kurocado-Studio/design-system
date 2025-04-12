import { get } from 'lodash-es';
import type { CustomThemeConfig } from 'tailwindcss/types/config';

import { createCssVariableEntry } from '../../utils/createCssVariableEntry';
import tokens from '../tokens/tokens.json';

function getTailwindBorderRadius(): {
  borderRadius: Required<CustomThemeConfig['borderRadius']>;
  borderRadiusCssVariableMap: Record<string, string>;
} {
  const primitives: Record<string, unknown> = get(
    tokens,
    ['border-radius/border-radius'],
    {},
  );
  const borderRadius: Record<string, unknown> = {};
  const borderRadiusCssVariableMap: Record<string, string> = {};

  for (const [borderRadiusPrimitiveName, borderRadiusValue] of Object.entries(
    primitives,
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
              'border-radius',
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

export const { borderRadius, borderRadiusCssVariableMap } =
  getTailwindBorderRadius();
