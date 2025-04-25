import { type CustomThemeConfig } from 'tailwindcss/types/config';

import { composeDesignSystem } from 'src/lib';
import tokens from 'src/lib/domain/tokens/tokens.json';

import { type Theme } from '../domain/types';

export const kurocadoStudioTheme: Partial<CustomThemeConfig> =
  composeDesignSystem(tokens as unknown as Theme).tailwindTheme;
