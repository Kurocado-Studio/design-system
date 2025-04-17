import { type CustomThemeConfig } from 'tailwindcss/types/config';

import { composeDesignSystem } from 'src/domain/application/composeDesignSystem';
import tokens from 'src/domain/tokens/tokens.json';

export const kurocadoStudioTheme: Partial<CustomThemeConfig> =
  composeDesignSystem(tokens).tailwindTheme;
