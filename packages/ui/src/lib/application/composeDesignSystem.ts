import type { CustomThemeConfig } from 'tailwindcss/types/config';

import { composePrimitives } from 'src/lib/application/composePrimitives';
import { composeTheme } from 'src/lib/application/composeTheme';
import type { Theme } from 'src/lib/domain/types';

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
