/* eslint import/no-default-export: 0 */
import {
  FadeIn,
  FadeInStaggerGroup,
  type FadeInStaggerGroupProps,
  Grid,
  type GridProps,
  Typography,
} from '@kurocado-studio/ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Components/Fade',
  component: FadeInStaggerGroup,
  subcomponents: { FadeIn },
  argTypes: {
    faster: { control: 'boolean', description: 'Enable faster stagger' },
    tag: {
      control: 'text',
      description: 'HTML tag to render as motion container',
    },
  },
};

export default meta;
type Story = StoryObj<FadeInStaggerGroupProps<GridProps>>;

export const Grouped: Story = {
  render: (args) => (
    <FadeInStaggerGroup
      {...args}
      className='max-w-7xl'
      columns={{ sm: '1', md: '2' }}
      gap='8'
      justify='center'
      tag={Grid}
    >
      <FadeIn
        as='p'
        direction='UP'
        order={0}
        size={{ base: 'sm', md: 'lg', lg: '9xl' }}
        tag={Typography}
      >
        Item 1: UP
      </FadeIn>
      <FadeIn as='p' tag={Typography} order={1} direction='LEFT_TO_RIGHT'>
        Item 2: LEFT_TO_RIGHT
      </FadeIn>
      <FadeIn
        as='p'
        direction='LEFT_TO_RIGHT'
        order={2}
        size={{ base: 'sm', md: 'lg', lg: '4xl' }}
        tag={Typography}
      >
        Item 3: LEFT_TO_RIGHT
      </FadeIn>
    </FadeInStaggerGroup>
  ),
};

export const Standalone: StoryObj = {
  render: () => (
    <Grid>
      <FadeIn direction='DOWN' as='h3' tag={Typography}>
        Standalone DOWN
      </FadeIn>
      <FadeIn tag={Typography} as='h4' speed={48} duration={1}>
        Standalone Custom Speed
      </FadeIn>
    </Grid>
  ),
};
