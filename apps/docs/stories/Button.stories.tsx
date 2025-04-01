import { Button, type ButtonProps } from '@kurocado-studio/ui';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

function Template(args: ButtonProps): React.ReactElement {
  return <Button {...args} />;
}

const meta: Meta<ButtonProps> = {
  component: Button,
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Is the button disabled?',
    },
    loading: {
      control: 'boolean',
      description: 'Is the button loading?',
    },
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
    children: 'Default',
  },
  tags: ['autodocs'],
};

export const Secondary: StoryObj<ButtonProps> = {
  render: Template,
  name: 'Secondary',
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Success: StoryObj<ButtonProps> = {
  render: Template,
  name: 'Success',
  args: {
    children: 'Success',
    variant: 'success',
  },
};

export const Error: StoryObj<ButtonProps> = {
  render: Template,
  name: 'Error',
  args: {
    children: 'Error',
    variant: 'destructive',
  },
};

export const FadeIn: StoryObj<ButtonProps> = {
  render: Template,
  name: 'WIth Motion Props',
  args: {
    children: 'Motion',
    type: 'button',
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  render: Template,
  name: 'Disabled',
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const Loading: StoryObj<ButtonProps> = {
  render: Template,
  name: 'Loading',
  args: {
    children: 'Loading',
    loading: true,
  },
};

/* eslint import/no-default-export: 0 */
export default meta;
