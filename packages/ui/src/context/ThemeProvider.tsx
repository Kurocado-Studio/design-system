import { get } from 'lodash-es';
import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';
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

  const cssVariablesMap: Record<string, string> = useMemo(
    () => ({
      ...get(theme, ['colors'], colorsCssVariables),
    }),
    [theme],
  );

  const toggleLightDarkTheme: ThemeProviderProps['toggleLightDarkTheme'] =
    useCallback(() => {
      const selectedMode = root.classList.contains('dark');
      root.classList.toggle('dark', !selectedMode);
    }, [root.classList]);

  const setThemeVariable: ThemeProviderProps['setThemeVariable'] = useCallback(
    (variableName, variableValue) => {
      cssVariablesMap[variableName] = variableValue;
    },
    [cssVariablesMap],
  );

  const providerValue = useMemo(
    () => ({
      setThemeVariable,
      toggleLightDarkTheme,
    }),
    [setThemeVariable, toggleLightDarkTheme],
  );

  useEffect(() => {
    Object.entries(cssVariablesMap).forEach(
      ([cssVariableName, cssVariableValue]) => {
        root.style.setProperty(cssVariableName, cssVariableValue);
      },
    );
  }, [cssVariablesMap, root.style]);

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = (): ThemeProviderProps =>
  useContext(ThemeContext);
