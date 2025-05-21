/* eslint import/no-default-export: 0 */
import {
  FadeIn,
  FadeInStaggerGroup,
  type FadeInStaggerGroupProps,
  Grid,
  Typography,
} from '@kurocado-studio/ui/vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<FadeInStaggerGroupProps> = {
  title: 'Components/Fade',
  component: FadeInStaggerGroup,
  subcomponents: { FadeIn },
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: 'text',
      description: 'HTML tag to render as motion container',
    },
  },
};
export default meta;

export const Standalone: StoryObj<FadeInStaggerGroupProps> = {
  render: () => ({
    components: { Grid, FadeIn, Typography },
    setup() {
      return { Typography };
    },
    template: `
      <Grid>
        <FadeIn :tag="Typography" as="h3" fadeInDirection="DOWN">
          Standalone DOWN
        </FadeIn>
        <FadeIn :tag="Typography" as="h4" :fadeInSpeed="48" :transitionDuration="1">
          Standalone Custom Speed
        </FadeIn>
      </Grid>
    `,
  }),
};
