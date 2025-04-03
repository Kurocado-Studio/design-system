import { withThemeByClassName } from '@storybook/addon-themes';
import { themes } from '@storybook/theming';
import React, { memo } from 'react';

import '../tailwind.css';

const preview = {
  parameters: {
    controls: {
      matchers: {},
    },
    docs: {
      theme: window.matchMedia('(prefers-color-scheme: dark)').matches
        ? themes.dark
        : themes.light,
    },
  },
  tags: ['autodocs'],
};

export const parameters = {
  darkMode: {
    current: 'light',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const isDark = !!context.globals.theme === 'dark';

    React.useEffect(() => {
      document.documentElement.classList.toggle('dark', !isDark);
    }, [isDark]);

    return <Story />;
  },
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
  }),
];

export const tags = ['autodocs'];
