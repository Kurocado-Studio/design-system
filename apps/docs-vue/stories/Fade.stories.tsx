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
type Story = StoryObj<FadeInStaggerGroupProps>;

export const Grouped: Story = {
  args: { tag: 'div' },
  render: (args: () => unknown) => ({
    components: { FadeInStaggerGroup, FadeIn, Grid, Typography },
    setup() {
      return { args, Grid, Typography };
    },
    template: `
      <FadeInStaggerGroup v-bind="args" :tag="Grid" :columns="{ sm: '1', md: '2' }" gap="8" justify="center" class="max-w-7xl">
        <FadeIn :tag="Typography" as="p" :staggerOrder="0" fadeInDirection="UP" :size="{ base: 'sm', md: 'lg', lg: '9xl' }">
          Item 1: UP
        </FadeIn>
        <FadeIn :tag="Typography" as="p" :staggerOrder="1" fadeInDirection="LEFT_TO_RIGHT">
          Item 2: LEFT_TO_RIGHT
        </FadeIn>
        <FadeIn :tag="Typography"  as="p" :staggerOrder="2" fadeInDirection="RIGHT_TO_LEFT" :size="{ base: 'sm', md: 'lg', lg: '4xl' }" />
      </FadeInStaggerGroup>
    `,
  }),
};

export const Standalone: StoryObj<FadeInStaggerGroupProps> = {
  render: () => ({
    components: { Grid, FadeIn, Typography },
    setup() {
      return { Typography };
    },
    template: `
      <Grid>
        <FadeIn fadeInDirection="DOWN" :tag="Typography">
          Standalone DOWN
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
