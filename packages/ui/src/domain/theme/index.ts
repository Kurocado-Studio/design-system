import { type CustomThemeConfig } from 'tailwindcss/types/config';

import { colors } from './colors';
import { fontFamily } from './fontFamily';
import { spacing } from './spacing';

export const kurocadoStudioTheme: Partial<CustomThemeConfig> = {
  colors,
  fontFamily,
  theme: { colors, spacing, fontFamily },
};
