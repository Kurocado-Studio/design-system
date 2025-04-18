import React, {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';

import { composeDesignSystem } from '../domain/application/composeDesignSystem';
import type { Theme } from '../domain/types';

interface ThemeProps {
  theme: Theme;
  children?: React.ReactNode;
}

interface ThemeProviderProps {
  setTheme: (theme: Record<string, unknown>) => void;
  setThemeVariable: (variableName: string, variableValue: string) => void;
  toggleLightDarkTheme: () => void;
}

const ThemeContext = createContext<ThemeProviderProps>({
  setThemeVariable: () => {},
  toggleLightDarkTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ theme, children }: ThemeProps): ReactNode {
  const styleElRef = useRef<HTMLStyleElement | null>(null);
  const root = document.documentElement;

  const cssVariablesMap: Record<string, unknown> = useMemo(() => {
    const { cssVariables } = composeDesignSystem(theme);
    return cssVariables;
  }, [theme]);

  const handleVariablesMap = useCallback(
    (cssVariablesPayload: Record<string, unknown>) => {
      if (!styleElRef.current) {
        styleElRef.current = document.createElement('style');
        document.head.appendChild(styleElRef.current);
      }

      styleElRef.current.textContent = `:root {
        ${Object.entries(cssVariablesPayload)
          .map(([variableName, variableValue]) =>
            typeof variableValue === 'string'
              ? `${variableName}: ${variableValue};`
              : '',
          )
          .join('\n')}
      }`;
    },
    [],
  );

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
      handleVariablesMap(cssVariablesMap);
    },
    [cssVariablesMap, handleVariablesMap, root],
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
