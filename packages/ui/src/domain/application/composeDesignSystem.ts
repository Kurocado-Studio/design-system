import type { CustomThemeConfig } from 'tailwindcss/types/config';

import { composePrimitives } from '../primitives';
import { composeTheme } from '../theme/composeTheme';
import type { Theme } from '../types';

export type ComposedTheme = {
  tailwindTheme: Partial<CustomThemeConfig>;
  cssVariables: Record<string, unknown>;
};

export function composeDesignSystem(payload: Theme): ComposedTheme {
  const { primitivesCssVariables, primitives } = composePrimitives(payload);
  const tailwindTheme = composeTheme(payload, primitives);
  return {
    cssVariables: primitivesCssVariables,
    tailwindTheme,
  };
}
