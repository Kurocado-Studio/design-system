import { set } from 'lodash-es';

import { flattenTokens } from 'src/domain/tokens/flattenTokens';

import { type Theme } from '../types';
import { composeCardComponent } from './card';

export function composeTheme(
  tokensPayload: Record<string, unknown>,
  themePayload: Theme,
): Record<string, unknown> {
  const tokens = flattenTokens(tokensPayload['theme/theme']);
  const theme = themePayload;

  const components: Array<Theme> = [composeCardComponent(tokens, theme)];

  for (const { extend } of components) {
    set(theme, ['extend'], extend);
  }

  return theme;
}
