import { get } from 'lodash-es';
import type { CustomThemeConfig } from 'tailwindcss/types/config';

import { createCssVariableEntry } from '../../utils/createCssVariableEntry';
import { type Theme } from '../types';

export function getTailwindDimensions(theme: Theme): {
  dimensions: Required<CustomThemeConfig['spacing']>;
  dimensionsCssVariableMap: Record<string, string>;
} {
  const primitives = get(theme, ['dimensions/dimensions'], {}) as Record<
    string,
    unknown
  >;

  const dimensions: Record<string, unknown> = {};
  const dimensionsCssVariableMap: Record<string, string> = {};

  for (const [dimensionsVariant, dimensionsDefinition] of Object.entries(
    primitives,
  )) {
    const dimensionsValue = get(dimensionsDefinition, ['value']);

    if (!dimensionsDefinition) continue;
    if (typeof dimensionsValue !== 'string') continue;

    const { cssVariableName, cssVariableValue, cssVariableReference } =
      createCssVariableEntry('dimensions', dimensionsVariant, dimensionsValue);

    dimensions[dimensionsVariant] = cssVariableReference;

    dimensionsCssVariableMap[cssVariableName] = cssVariableValue;
  }

  return {
    dimensions,
    dimensionsCssVariableMap,
  };
}
