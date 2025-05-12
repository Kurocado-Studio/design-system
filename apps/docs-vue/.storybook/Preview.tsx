import '@kurocado-studio/ui/typography.css';
import { ThemeProvider } from '@kurocado-studio/ui/vue';
import type { Preview } from '@storybook/vue3';
import { get } from 'lodash-es';

import '../tailwind.css';
import designTokens from './tokens.json';

const LIGHT_THEME = 'Light setup';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(?<temp1>background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (storyFn: () => unknown, context: Record<string, unknown>) => {
    const selectedTheme = get(context, ['globals', 'theme']) === LIGHT_THEME;

    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', !selectedTheme);
    }

    return {
      components: { ThemeProvider, Story: storyFn() },
      setup() {
        return { designTokens };
      },
      template: `
        <ThemeProvider :theme="designTokens">
          <Story />
        </ThemeProvider>
      `,
    };
  },
];

// eslint-disable-next-line import/no-default-export
export default preview;
