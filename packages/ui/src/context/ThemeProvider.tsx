import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import React from 'react';

// import { composeTheme } from '../domain/theme';
import { composeTheme } from '../domain/theme';
import { tokens } from '../domain/tokens/tokens';
import { type Theme } from '../domain/types';

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

  const cssVariablesMap: Record<string, unknown> = useMemo(() => {
    const { cssVariables } = composeTheme(theme || tokens);
    return cssVariables;
  }, [theme]);

  const handleVariablesMap = useCallback(() => {
    Object.entries(cssVariablesMap).forEach(
      ([cssVariableName, cssVariableValue]) => {
        if (typeof cssVariableValue === 'string') {
          root.style.setProperty(cssVariableName, cssVariableValue);
        }
      },
    );
  }, [cssVariablesMap, root.style]);

  const toggleLightDarkTheme: ThemeProviderProps['toggleLightDarkTheme'] =
    useCallback(() => {
      const selectedMode = root.classList.contains('dark');
      root.classList.toggle('dark', !selectedMode);
    }, [root.classList]);

  const setThemeVariable: ThemeProviderProps['setThemeVariable'] = useCallback(
    (variableName, variableValue) => {
      const styles = getComputedStyle(root);
      const cssVariableValue = styles.getPropertyValue(variableName);

      if (!cssVariableValue.trim().length) return;

      cssVariablesMap[variableName] = variableValue;
      handleVariablesMap();
    },
    [cssVariablesMap, handleVariablesMap, root],
  );

  const providerValue: ThemeProviderProps = useMemo(
    () => ({
      setThemeVariable,
      toggleLightDarkTheme,
    }),
    [setThemeVariable, toggleLightDarkTheme],
  );

  useEffect(() => {
    handleVariablesMap();
  }, [handleVariablesMap]);

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = (): ThemeProviderProps =>
  useContext(ThemeContext);
