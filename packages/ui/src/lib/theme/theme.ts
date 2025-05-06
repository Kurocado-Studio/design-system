import { type CustomThemeConfig } from 'tailwindcss/types/config';

import tokens from 'src/lib/domain/tokens/tokens.json';
import { composeDesignSystem } from 'src/lib/index';

import { type Theme } from '../domain';

export const kurocadoStudioTheme: Partial<CustomThemeConfig> =
  composeDesignSystem(tokens as unknown as Theme).tailwindTheme;
