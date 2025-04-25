import '@kurocado-studio/ui/typography.css';
import { ThemeProvider } from '@kurocado-studio/ui/vue';
import type { Preview } from '@storybook/vue3';

import designTokens from '../../../packages/ui/src/lib/domain/tokens/tokens.json';
import '../tailwind.css';

const LIGHT_THEME = 'Light setup';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (storyFn, context) => {
    const selectedTheme = context.globals.theme === LIGHT_THEME;

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

export default preview;
