import { set } from 'lodash-es';

import { cardVariantToken } from './tokens';
import {
  resolveAliasColor,
  resolveAliasDimensions,
  resolvePrimitiveColors,
  resolvePrimitiveDimensions,
} from '../../primitives';
import { type FlatToken } from '../../tokens/flattenTokens';
import { type Theme } from '../../types';

export interface ComposeCardOptions {
  flatTokens: Array<FlatToken>;
  tailwindTheme: Theme;
  tokensPayload: Record<string, unknown>;
}

export function composeCard(options: ComposeCardOptions): Theme {
  const { flatTokens, tailwindTheme, tokensPayload } = options;
  const payload = {
    primitives: tailwindTheme,
  };

  for (const { path, leaf } of flatTokens) {
    switch (path) {
      case stripCardPrefix(cardVariantToken.bg):
      case stripCardPrefix(cardVariantToken.fg):
        const primitiveMapping = resolveAliasColor({
          tokensPayload,
          path,
          leaf,
        });

        const mappedCssVariable = resolvePrimitiveColors({
          payload,
          path: `card.${path}`,
          leaf: primitiveMapping.leaf,
        });

        set(
          tailwindTheme,
          ['extend', 'colors', mappedCssVariable.colorPath],
          mappedCssVariable.colorValue,
        );
        continue;
      case stripCardPrefix(cardVariantToken.borderRadius):
        const primitiveDimension = resolveAliasDimensions({
          tokensPayload,
          path,
          leaf,
        });

        const radius = resolvePrimitiveDimensions({
          payload,
          path: `card.${path}`,
          leaf: primitiveDimension.leaf,
        });

        set(
          tailwindTheme,
          ['extend', 'borderRadius', radius.dimensionPath],
          radius.dimensionValue,
        );
        continue;
      case stripCardPrefix(cardVariantToken.padding):
        const primitivePadding = resolveAliasDimensions({
          tokensPayload,
          path,
          leaf,
        });

        const padding = resolvePrimitiveDimensions({
          payload,
          path: `card.${path}`,
          leaf: primitivePadding.leaf,
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

function stripCardPrefix(tokenName: string): string {
  return tokenName.replace('card.', '');
}
