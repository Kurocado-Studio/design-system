/* eslint import/no-default-export: 0 */
import { Typography, type TypographyProps } from '@kurocado-studio/ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<TypographyProps> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: [
        'xs',
        'sm',
        'caption',
        'base',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      description: 'Semantic font-size alias',
    },
    weight: {
      control: 'select',
      options: [
        'thin',
        'extralight',
        'light',
        'normal',
        'medium',
        'semibold',
        'bold',
        'extrabold',
        'black',
      ],
      description: 'Font weight',
    },
    leading: {
      control: 'select',
      options: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
      description: 'Line-height (leading)',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    italic: {
      control: 'boolean',
      description: 'Toggle italic style',
    },
    as: {
      control: 'text',
      description: 'HTML as to render',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    children: {
      control: 'text',
      description: 'Text content',
    },
  },
  args: {
    size: 'base',
    weight: 'normal',
    leading: 'normal',
    align: 'left',
    italic: false,
    children: 'The quick brown fox jumps over the lazy dog',
  },
};
export default meta;

type Story = StoryObj<TypographyProps>;

export const Default: Story = {};

export const CaptionSemi: Story = {
  args: {
    size: 'caption',
    weight: 'semibold',
    leading: 'tight',
    children: 'This is a caption (semibold, tight)',
  },
};

export const Heading1: Story = {
  args: {
    size: '4xl',
    weight: 'bold',
    leading: 'snug',
    as: 'h1',
    children: 'Heading Level 1',
  },
};

export const BodyDefault: Story = {
  args: {
    size: 'base',
    weight: 'normal',
    leading: 'relaxed',
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.`,
  },
};

export const BodySmall: Story = {
  args: {
    size: 'sm',
    weight: 'normal',
    leading: 'relaxed',
    children: `Small body text, good for fine print or captions.`,
  },
};

export const Label: Story = {
  args: {
    size: 'caption',
    weight: 'bold',
    leading: 'tight',
    className: 'uppercase tracking-wide',
    children: 'Label Text',
  },
};

export const EmphasisItalic: Story = {
  args: {
    size: 'base',
    weight: 'medium',
    leading: 'normal',
    italic: true,
    children: 'This sentence is in italics for emphasis.',
  },
};

export const CenteredQuote: Story = {
  args: {
    size: 'lg',
    weight: 'light',
    leading: 'loose',
    align: 'center',
    children: `"To be, or not to be, that is the question."`,
  },
};

export const ResponsiveDemo: Story = {
  args: {
    size: { base: 'sm', md: 'lg', lg: '4xl' },
    weight: { base: 'normal', lg: 'bold' },
    leading: 'normal',
    children: `Resize the viewport: this text goes sm→lg→4xl.`,
  },
};
