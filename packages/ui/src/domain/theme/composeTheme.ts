import { get, set } from 'lodash-es';

import { flattenTokens } from 'src/domain/tokens/flattenTokens';
import { resolvePrimitiveColors } from 'src/domain/tokens/resolvePrimitiveColors';
import { resolvePrimitiveDimensions } from 'src/domain/tokens/resolvePrimitiveDimentions';

export function composeTheme(
  tokens: Record<string, unknown>,
  theme: Record<string, Record<string, unknown>>,
): Record<string, unknown> {
  const tailwindTheme = theme;

  const flatTokens = flattenTokens(tokens['theme/theme']);

  for (const { path, leaf } of flatTokens) {
    switch (leaf.type) {
      case 'color':
        const { colorPath, colorValue } = resolvePrimitiveColors({
          tailwindTheme,
          path,
          leaf,
        });

        set(tailwindTheme, ['extend', 'colors', colorPath], colorValue);

        break;
      case 'dimension':
        const { dimensionPath, dimensionValue } = resolvePrimitiveDimensions({
          tailwindTheme: get(tailwindTheme, ['spacing'], {}),
          fallback: get(leaf, ['value']),
          path,
          leaf,
        });

        set(
          tailwindTheme,
          ['extend', 'borderRadius', dimensionPath],
          dimensionValue,
        );

        break;
      case 'text':
        break;
      case undefined:
        continue;
      default:
        break;
    }
  }

  return tailwindTheme;
}
