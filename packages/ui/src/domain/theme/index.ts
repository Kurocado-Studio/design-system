import { type CustomThemeConfig } from 'tailwindcss/types/config';

import { fontFamily } from './fontFamily';
import { spacing } from './spacing';

export const kurocadoStudioTheme: Pick<CustomThemeConfig, 'extend'> = {
  extend: { fontFamily, spacing },
};
