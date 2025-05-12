/* eslint import/no-default-export: 0 */
import {
  FadeIn,
  type FadeInProps,
  FadeInStaggerGroup,
  Grid,
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
type Story = StoryObj<typeof FadeInStaggerGroup>;

export const Grouped: Story = {
  render: (args: FadeInProps) => (
    <FadeInStaggerGroup
      {...args}
      tag={Grid}
      columns={{ sm: '1', md: '2' }}
      gap='8'
      justify='center'
      class='max-w-7xl'
    >
      <FadeIn
        tag={Typography}
        as='p'
        staggerOrder={0}
        fadeInDirection='UP'
        size={{ base: 'sm', md: 'lg', lg: '9xl' }}
      >
        Item 1: UP
      </FadeIn>
      <FadeIn
        as='p'
        tag={Typography}
        staggerOrder={1}
        fadeInDirection='LEFT_TO_RIGHT'
      >
        Item 2: LEFT_TO_RIGHT
      </FadeIn>
      <FadeIn
        tag={Typography}
        as='p'
        staggerOrder={2}
        fadeInDirection='RIGHT_TO_LEFT'
        size={{ base: 'sm', md: 'lg', lg: '4xl' }}
      />
    </FadeInStaggerGroup>
  ),
  args: {
    tag: 'section',
  },
};

export const Standalone: StoryObj = {
  render: () => (
    <Grid>
      <FadeIn fadeInDirection='DOWN' tag={Typography}>
        Standalone DOWN
      </FadeIn>
      <FadeIn tag={Typography} fadeInSpeed={48} transitionDuration={1}>
        Standalone Custom Speed
      </FadeIn>
    </Grid>
  ),
};
