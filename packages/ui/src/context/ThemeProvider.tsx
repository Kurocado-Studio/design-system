import { get } from 'lodash-es';
import { type ReactNode, createContext } from 'react';
import React from 'react';

import { colorsCssVariables } from '../domain/theme/colors';

export type Theme = Record<string, Record<string, string>>;

interface ThemeProps {
  theme?: Theme;
  children?: ReactNode;
}

interface ThemeProviderProps {
  setThemeVariable: (variableName: string, variableValue: string) => void;
  toggleLightDarkTheme: () => void;
}

const ThemeContext = createContext<ThemeProviderProps>({
  setThemeVariable: () => {},
  toggleLightDarkTheme: () => {},
});

export function ThemeProvider({ theme, children }: ThemeProps): ReactNode {
  const root = document.documentElement;

  const themeMap: Theme = {
    colors: get(theme, ['colors'], colorsCssVariables),
  };

  Object.values(themeMap).forEach((cssVariablesMap) => {
    Object.entries(cssVariablesMap).forEach(
      ([cssVariableName, cssVariableValue]) => {
        root.style.setProperty(cssVariableName, cssVariableValue);
      },
    );
  });

  return (
    <ThemeContext.Provider
      value={{
        setThemeVariable: () => {},
        toggleLightDarkTheme: () => {},
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
