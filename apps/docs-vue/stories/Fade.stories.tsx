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
        <FadeIn fadeInDirection="DOWN">
          <Typography as="h3">
            Standalone DOWN
          </Typography>
        </FadeIn>
        <FadeIn :fadeInSpeed="48" :transitionDuration="1">
          <Typography as="h4">
            Standalone Custom Speed
          </Typography>
        </FadeIn>
      </Grid>
    `,
  }),
};
