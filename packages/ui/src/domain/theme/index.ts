import { type CustomThemeConfig } from 'tailwindcss/types/config';

import { borderRadius } from './borderRadius';
import { colors } from './colors';
import { fontFamily } from './fontFamily';
import { fontSize } from './fontSize';
import { spacing } from './spacing';

export const kurocadoStudioTheme: Partial<CustomThemeConfig> = {
  fontFamily,
  spacing,
  colors,
  fontSize,
  borderRadius,
};
