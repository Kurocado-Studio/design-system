import { set } from 'lodash-es';

import { flattenTokens } from 'src/domain/tokens/flattenTokens';

import { type Theme } from '../types';
import { composeCardComponent } from './card';

export function composeTheme(
  tokens: Record<string, unknown>,
  theme: Theme,
): Record<string, unknown> {
  const tailwindTheme = theme;

  const flatTokens = flattenTokens(tokens['theme/theme']);

  for (const _ of flatTokens) {
    const tailwindCardComponent = composeCardComponent(
      flatTokens,
      tailwindTheme,
    );
    set(tailwindTheme, ['extend'], tailwindCardComponent['extend']);
  }
  return tailwindTheme;
}
