import { get, set } from 'lodash-es';
import type { CustomThemeConfig } from 'tailwindcss/types/config';

import { createCssVariableEntry } from '../../utils';
import type { Theme } from '../types';

export function getTailwindFontFamily(theme: Theme): {
  fontFamily: Required<CustomThemeConfig['fontSize']>;
  fontFamilyCssVariableMap: Record<string, string>;
} {
  const primitives = get(theme, ['primitives', 'fontFamily'], {}) as Record<
    string,
    unknown
  >;
  const fontFamily: Record<string, unknown> = {};
  const fontFamilyCssVariableMap: Record<string, string> = {};

  for (const [fontFamilyVariant, fontFamilyDefinition] of Object.entries(
    primitives,
  )) {
    const fontFamilyValue = get(fontFamilyDefinition, ['$value']);

    if (!fontFamilyDefinition) continue;
    if (typeof fontFamilyValue !== 'string') continue;

    const { cssVariableName, cssVariableValue, cssVariableReference } =
      createCssVariableEntry('font-family', fontFamilyVariant, fontFamilyValue);

    set(fontFamily, [fontFamilyVariant], cssVariableReference);
    set(fontFamilyCssVariableMap, [cssVariableName], cssVariableValue);
  }

  return {
    fontFamily,
    fontFamilyCssVariableMap,
  };
}
