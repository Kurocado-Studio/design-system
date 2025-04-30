import { get, set } from 'lodash-es';

import { composeCard } from 'src/lib/domain/components/Card/composeCard';
import { flattenTokens } from 'src/lib/domain/tokens/flattenTokens';
import { type Theme } from 'src/lib/domain/types';

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
