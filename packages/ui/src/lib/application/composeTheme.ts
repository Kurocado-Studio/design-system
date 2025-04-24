import { set } from 'lodash-es';

import { flattenTokens } from 'src/lib/domain/tokens/flattenTokens';

import { composeCard } from '../domain/theme/composeCard';
import { type Theme } from '../domain/types';

export function composeTheme(
  tokensPayload: Record<string, unknown>,
  themePayload: Theme,
): Record<string, unknown> {
  const tokens = flattenTokens(tokensPayload['theme/theme']);
  const theme = themePayload;

  const components: Array<Theme> = [composeCard(tokens, theme)];

  for (const { extend } of components) {
    set(theme, ['extend'], extend);
  }

  return theme;
}
