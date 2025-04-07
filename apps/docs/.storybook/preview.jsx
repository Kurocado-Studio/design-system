import { themes } from '@storybook/theming';
import React, { memo, useEffect } from 'react';

import '../tailwind.css';

const LIGHT_THEME = 'Light theme';
const DARK_THEME = 'Dark theme';

const preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [LIGHT_THEME, DARK_THEME],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
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
    const selectedTheme = context.globals.theme === LIGHT_THEME;

    useEffect(() => {
      document.documentElement.classList.toggle('dark', !selectedTheme);
    }, [selectedTheme]);

    return <Story />;
  },
];

export const tags = ['autodocs'];

export default preview;
