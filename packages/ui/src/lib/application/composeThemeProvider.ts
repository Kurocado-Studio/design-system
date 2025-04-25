import { handleSetThemeVariable } from 'src/lib/domain/provider/handleSetThemeVariable';
import { handleToggleLightDarkTheme } from 'src/lib/domain/provider/lightDarkThemeToggle';
import { handleVariablesMap } from 'src/lib/domain/provider/variablesMap';

export function composeThemeProvider() {
  return {
    handleSetThemeVariable,
    handleVariablesMap,
    handleToggleLightDarkTheme,
  };
}
