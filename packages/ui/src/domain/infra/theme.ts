import { type CustomThemeConfig } from 'tailwindcss/types/config';

import { composeDesignSystem } from 'src/domain/application/composeDesignSystem';
import tokens from 'src/domain/tokens/tokens.json';

import { type Theme } from '../types';

export const kurocadoStudioTheme: Partial<CustomThemeConfig> =
  composeDesignSystem(tokens as unknown as Theme).tailwindTheme;
