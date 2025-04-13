import { get } from 'lodash-es';
import type { CustomThemeConfig } from 'tailwindcss/types/config';

import tokens from 'src/domain/tokens/tokens.json';
import { createCssVariableEntry } from 'src/utils/createCssVariableEntry';

function getTailwindFontSize(): {
  fontSize: Required<CustomThemeConfig['fontSize']>;
  fontSizeCssVariableMap: Record<string, string>;
} {
  const primitives: Record<string, unknown> = get(
    tokens,
    ['typography/typography', 'font-size'],
    {},
  );

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

export const { fontSize, fontSizeCssVariableMap } = getTailwindFontSize();
