import type { CustomThemeConfig } from 'tailwindcss/types/config';

import type { Theme } from '../domain';
import { composePrimitives } from './composePrimitives';
import { composeTheme } from './composeTheme';

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
