import { type CustomThemeConfig } from 'tailwindcss/types/config';

import { composeDesignSystem } from 'src/lib/index';

import { type Theme } from '../domain';
import tokens from '../domain/tokens/tokens.json';

export const kurocadoStudioTheme: Partial<CustomThemeConfig> =
  composeDesignSystem(tokens as unknown as Theme).tailwindTheme;
