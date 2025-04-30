import { get, set } from 'lodash-es';

import {
  resolvePrimitiveColors,
  resolvePrimitiveDimensions,
} from 'src/lib/domain/primitives';
import { type FlatToken } from 'src/lib/domain/tokens/flattenTokens';

import { type Theme } from '../types';

export function composeCard(tokens: Array<FlatToken>, theme: Theme): Theme {
  const tailwindTheme = theme;

  for (const { path, leaf } of tokens) {
    switch (path) {
      case 'card.default.bg':
      case 'card.default.fg':
        const mainColors = resolvePrimitiveColors({
          tailwindTheme: theme,
          path,
          leaf,
        });

        set(
          tailwindTheme,
          ['extend', 'colors', mainColors.colorPath],
          mainColors.colorValue,
        );
        continue;
      case 'card.default.radius':
        const radius = resolvePrimitiveDimensions({
          tailwindTheme: get(theme, ['spacing'], {}),
          fallback: get(leaf, ['value']),
          path,
          leaf,
        });

        set(
          tailwindTheme,
          ['extend', 'borderRadius', radius.dimensionPath],
          radius.dimensionValue,
        );
        continue;
      case 'card.default.padding':
      case 'card.default.paddingHeader':
      case 'card.default.paddingBody':
      case 'card.default.paddingFooter':
        const padding = resolvePrimitiveDimensions({
          tailwindTheme: get(theme, ['spacing'], {}),
          fallback: get(leaf, ['value']),
          path,
          leaf,
        });

        set(
          tailwindTheme,
          ['extend', 'spacing', padding.dimensionPath],
          padding.dimensionValue,
        );
        continue;
      default:
        break;
    }
  }

  return tailwindTheme;
}
