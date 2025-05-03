export type LightDarkThemeToggleHandler = () => void;

export interface ThemeProviderProps {
  setTheme: (theme: Record<string, unknown>) => void;
  setThemeVariable: (variableName: string, variableValue: string) => void;
  toggleLightDarkTheme: LightDarkThemeToggleHandler;
}

export type ThemeVariableHandler = (options: {
  variableName: string;
  variableValue: string;
}) =>
  | {
      variableName: string;
      variableValue: string;
    }
  | undefined;

export type VariablesMapHandler = (
  htmlStyleElementRef: HTMLStyleElement | null,
  cssVariablesPayload: Record<string, unknown>,
) => HTMLStyleElement;

export interface ThemeProviderComposer {
  handleSetThemeVariable: ThemeVariableHandler;
  handleVariablesMap: VariablesMapHandler;
  handleToggleLightDarkTheme: LightDarkThemeToggleHandler;
}
