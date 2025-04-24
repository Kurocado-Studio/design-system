import '@kurocado-studio/ui/typography.css';
import type { Preview } from '@storybook/vue3';

import designTokens from '../../../packages/ui/src/lib/domain/tokens/tokens.json';
import '../tailwind.css';

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

export default preview;
