export interface ThemeProviderProps {
  setTheme: (theme: Record<string, unknown>) => void;
  setThemeVariable: (variableName: string, variableValue: string) => void;
  toggleLightDarkTheme: () => void;
}
