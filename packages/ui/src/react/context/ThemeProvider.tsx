import React, {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';

import {
  type Theme,
  type ThemeProviderProps,
  composeDesignSystem,
  composeThemeProvider,
} from '../../lib';

interface ThemeProps {
  theme: Theme;
  children?: React.ReactNode;
}

const ThemeContext = createContext<ThemeProviderProps>({
  setThemeVariable: () => {},
  toggleLightDarkTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ theme, children }: ThemeProps): ReactNode {
  const themeProvider = useMemo(() => composeThemeProvider(), []);
  const styleElRef = useRef<HTMLStyleElement | null>(null);

  const cssVariablesMap: Record<string, unknown> = useMemo(() => {
    const { cssVariables } = composeDesignSystem(theme);
    return cssVariables;
  }, [theme]);

  const handleVariablesMap = useCallback(
    (cssVariablesPayload: Record<string, unknown>) => {
      styleElRef.current = themeProvider.handleVariablesMap(
        styleElRef.current,
        cssVariablesPayload,
      );
    },
    [themeProvider],
  );

  const toggleLightDarkTheme: ThemeProviderProps['toggleLightDarkTheme'] =
    useCallback(() => {
      themeProvider.handleToggleLightDarkTheme();
    }, [themeProvider]);

  const setThemeVariable: ThemeProviderProps['setThemeVariable'] = useCallback(
    (variableName, variableValue) => {
      const payload = themeProvider.handleSetThemeVariable({
        variableName,
        variableValue,
      });

      if (payload) {
        cssVariablesMap[payload.variableName] = payload.variableValue;
        handleVariablesMap(cssVariablesMap);
      }
    },
    [cssVariablesMap, handleVariablesMap, themeProvider],
  );

  const providerValue: ThemeProviderProps = useMemo(
    () => ({
      setTheme: handleVariablesMap,
      setThemeVariable,
      toggleLightDarkTheme,
    }),
    [setThemeVariable, handleVariablesMap, toggleLightDarkTheme],
  );

  useEffect(() => {
    handleVariablesMap(cssVariablesMap);
    return () => {
      styleElRef.current?.remove();
      styleElRef.current = null;
    };
  }, [handleVariablesMap, cssVariablesMap]);

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = (): ThemeProviderProps =>
  useContext(ThemeContext);
