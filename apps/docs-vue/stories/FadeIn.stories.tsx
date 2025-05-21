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

type Story = StoryObj<FadeInStaggerGroupProps>;

export const Grouped: Story = {
  render: () => ({
    components: { Grid, FadeIn, FadeInStaggerGroup, Typography },
    setup() {
      return { Typography, Grid, FadeIn, FadeInStaggerGroup };
    },
    template: `
      <FadeInStaggerGroup 
        :columns="{ sm: '1', md: '2' }"
        :tag="Grid"
        class='max-w-7xl'
        gap='8' 
        justify='center'
      >
        <FadeIn 
          :order=0
          :size="{ base: 'sm', md: 'lg', lg: '9xl' }"
          :tag="Typography"
          as='p'
          direction='UP'
        >
          Item 1: UP
        </FadeIn>
        <FadeIn 
          :order=1
          :tag="Typography"
          as='p'
          direction='LEFT_TO_RIGHT'
        >
          Item 2: LEFT_TO_RIGHT
        </FadeIn>
        <FadeIn 
          :order=2
          :size="{ base: 'sm', md: 'lg', lg: '4xl' }"
          :tag="Typography" 
          as="p"
          direction='LEFT_TO_RIGHT'
        >
          Item 3: LEFT_TO_RIGHT
        </FadeIn>
      </FadeInStaggerGroup>
    `,
  }),
};

export const Standalone: Story = {
  render: () => ({
    components: { Grid, FadeIn, FadeInStaggerGroup, Typography },
    setup() {
      return { Typography };
    },
    template: `
      <Grid>
        <FadeIn :tag="Typography" as="h3" direction="DOWN">
          Standalone DOWN
        </FadeIn>
        <FadeIn :tag="Typography" as="h4" :speed="48" :duration="1">
          Standalone Custom Speed
        </FadeIn>
      </Grid>
    `,
  }),
};
