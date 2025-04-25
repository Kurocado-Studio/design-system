import { handleSetThemeVariable } from 'src/lib/domain/provider/handleSetThemeVariable';
import { handleToggleLightDarkTheme } from 'src/lib/domain/provider/lightDarkThemeToggle';
import { handleVariablesMap } from 'src/lib/domain/provider/variablesMap';

import { type ThemeProviderComposer } from '../domain/types/provider';

export function composeThemeProvider(): ThemeProviderComposer {
  return {
    handleSetThemeVariable,
    handleVariablesMap,
    handleToggleLightDarkTheme,
  };
}
