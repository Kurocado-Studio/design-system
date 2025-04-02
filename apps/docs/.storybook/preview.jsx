import { themes } from '@storybook/theming';

import '../tailwind.css';
import { ModeDecorator } from './ModeDecorator.js';

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
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [(Story) => <Story />, ModeDecorator];
export const tags = ['autodocs'];
