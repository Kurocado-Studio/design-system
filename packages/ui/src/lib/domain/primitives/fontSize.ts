import { get, set } from 'lodash-es';
import type { CustomThemeConfig } from 'tailwindcss/types/config';

import { createCssVariableEntry } from '../../utils';
import type { Theme } from '../types';

export function getTailwindFontSize(theme: Theme): {
  fontSize: Required<CustomThemeConfig['fontSize']>;
  fontSizeCssVariableMap: Record<string, string>;
} {
  const primitives = get(theme, ['primitives', 'fontSize'], {}) as Record<
    string,
    unknown
  >;
  const fontSize: Record<string, unknown> = {};
  const fontSizeCssVariableMap: Record<string, string> = {};

  for (const [fontSizeVariant, fontSizeDefinition] of Object.entries(
    primitives,
  )) {
    const fontSizeValue = get(fontSizeDefinition, ['$value']);

    if (!fontSizeDefinition) continue;
    if (typeof fontSizeValue !== 'string') continue;

    const { cssVariableName, cssVariableValue, cssVariableReference } =
      createCssVariableEntry('font-size', fontSizeVariant, fontSizeValue);

    set(fontSize, [fontSizeVariant], cssVariableReference);
    set(fontSizeCssVariableMap, [cssVariableName], cssVariableValue);
  }

  return {
    fontSize,
    fontSizeCssVariableMap,
  };
}
