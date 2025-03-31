import { Button, type ButtonProps } from '@kurocado-studio/ui';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

function Template(args: ButtonProps): React.ReactElement {
  return <Button {...args} />;
}

const meta: Meta<ButtonProps> = {
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'destructive', 'success', 'icon'],
      },
      description: 'The button variant',
    },
    className: {
      control: 'text',
      description: 'Optional Tailwind CSS class for styling',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessibility label for the button',
    },
  },
  tags: ['autodocs'],
};

export const Default: StoryObj<ButtonProps> = {
  render: Template,
  name: 'Default',
  args: {
    children: 'Hello',
  },
  tags: ['autodocs'],
};

export const Secondary: StoryObj<ButtonProps> = {
  render: Template,
  name: 'Secondary',
  args: {
    children: 'Hello',
    variant: 'secondary',
  },
};

export const Success: StoryObj<ButtonProps> = {
  render: Template,
  name: 'Success',
  args: {
    children: 'Hello',
    variant: 'success',
  },
};

export const Error: StoryObj<ButtonProps> = {
  render: Template,
  name: 'Error',
  args: {
    children: 'Hello',
    variant: 'destructive',
  },
};

export const FadeIn: StoryObj<ButtonProps> = {
  render: Template,
  name: 'WIth Motion Props',
  args: {
    children: 'Hello',
    type: 'button',
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  },
};

/* eslint import/no-default-export: 0 */
export default meta;
