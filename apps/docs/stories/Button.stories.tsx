import { Button, type ButtonProps } from '@kurocado-studio/buttons';
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
    type: 'button',
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  render: Template,
  name: 'Secondary',
  argTypes: meta.argTypes,
  args: {
    children: 'Hello',
    variant: 'secondary',
    type: 'button',
  },
};

export const Success: StoryObj<ButtonProps> = {
  render: Template,
  name: 'Success',
  argTypes: meta.argTypes,
  args: {
    children: 'Hello',
    variant: 'success',
    type: 'button',
  },
};

export const Error: StoryObj<ButtonProps> = {
  render: Template,
  name: 'Error',
  argTypes: meta.argTypes,
  args: {
    children: 'Hello',
    variant: 'destructive',
    type: 'button',
  },
};

/* eslint import/no-default-export: 0 */
export default meta;
