import { get, set } from 'lodash-es';
import type { CustomThemeConfig } from 'tailwindcss/types/config';

import { createCssVariableEntry } from 'src/lib/utils/createCssVariableEntry';

import type { Theme } from '../types';

export function getTailwindFontWeight(theme: Theme): {
  fontWeight: Required<CustomThemeConfig['fontWeight']>;
  fontWeightCssVariableMap: Record<string, string>;
} {
  const primitives = get(theme, ['primitives', 'fontWeight'], {}) as Record<
    string,
    unknown
  >;
  const fontWeight: Record<string, unknown> = {};
  const fontWeightCssVariableMap: Record<string, string> = {};

  for (const [fontWeightVariant, fontWeightDefinition] of Object.entries(
    primitives,
  )) {
    const fontSizeValue = get(fontWeightDefinition, ['$value']);

    if (!fontWeightDefinition) continue;
    if (typeof fontSizeValue !== 'string') continue;

    const { cssVariableName, cssVariableValue, cssVariableReference } =
      createCssVariableEntry('font-weight', fontWeightVariant, fontSizeValue);

    set(fontWeight, [fontWeightVariant], cssVariableReference);
    set(fontWeightCssVariableMap, [cssVariableName], cssVariableValue);
  }

  return {
    fontWeight,
    fontWeightCssVariableMap,
  };
}
