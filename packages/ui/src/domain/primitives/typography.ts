import { get } from 'lodash-es';
import type { CustomThemeConfig } from 'tailwindcss/types/config';

import { createCssVariableEntry } from '../../utils/createCssVariableEntry';
import type { Theme } from '../types';

export function getTailwindFontSize(theme: Theme): {
  fontSize: Required<CustomThemeConfig['fontSize']>;
  fontSizeCssVariableMap: Record<string, string>;
} {
  const primitives = get(
    theme,
    ['typography/typography', 'font-size'],
    {},
  ) as Record<string, unknown>;

  const fontSize: Record<string, unknown> = {};
  const fontSizeCssVariableMap: Record<string, string> = {};

  for (const [fontSizeVariant, fontSizeDefinition] of Object.entries(
    primitives,
  )) {
    const fontSizeValue = get(fontSizeDefinition, ['value']);

    if (!fontSizeDefinition) continue;
    if (typeof fontSizeValue !== 'string') continue;

    const { cssVariableName, cssVariableValue, cssVariableReference } =
      createCssVariableEntry('font-size', fontSizeVariant, fontSizeValue);

    fontSize[fontSizeVariant] = cssVariableReference;

    fontSizeCssVariableMap[cssVariableName] = cssVariableValue;
  }

  return {
    fontSize,
    fontSizeCssVariableMap,
  };
}
