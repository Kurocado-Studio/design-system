import { get, set } from 'lodash-es';

import { type Theme, composeCard } from '../domain';
import { flattenTokens } from '../domain/tokens/flattenTokens';

export function composeTheme(
  tokensPayload: Record<string, unknown>,
  themePayload: Theme,
): Record<string, unknown> {
  const tailwindTheme = themePayload;

  const CardComponent = composeCard({
    tailwindTheme,
    tokensPayload,
    flatTokens: flattenTokens(get(tokensPayload, ['component', 'card'])),
  });

  const components: Array<Theme> = [CardComponent];

  for (const { extend } of components) {
    set(tailwindTheme, ['extend'], extend);
  }

  return tailwindTheme;
}
