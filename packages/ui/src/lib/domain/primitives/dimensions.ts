import { get, set } from 'lodash-es';
import type { CustomThemeConfig } from 'tailwindcss/types/config';

import { createCssVariableEntry } from '../../utils';
import { type Theme } from '../types';

export function getTailwindDimensions(theme: Theme): {
  dimension: Required<CustomThemeConfig['spacing']>;
  dimensionCssVariableMap: Record<string, string>;
} {
  const primitives = get(theme, ['primitives', 'dimension'], {}) as Record<
    string,
    unknown
  >;

  const dimension: Record<string, unknown> = {};
  const dimensionCssVariableMap: Record<string, string> = {};

  for (const [dimensionsVariant, dimensionsDefinition] of Object.entries(
    primitives,
  )) {
    const dimensionsValue = get(dimensionsDefinition, ['$value']);

    if (!dimensionsDefinition) continue;
    if (typeof dimensionsValue !== 'string') continue;

    const { cssVariableName, cssVariableValue, cssVariableReference } =
      createCssVariableEntry('dimensions', dimensionsVariant, dimensionsValue);

    set(dimension, [dimensionsVariant], cssVariableReference);

    set(dimensionCssVariableMap, [cssVariableName], cssVariableValue);
  }

  return { dimension, dimensionCssVariableMap };
}
