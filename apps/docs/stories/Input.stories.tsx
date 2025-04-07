import { Input, type InputProps } from '@kurocado-studio/ui';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

function Template(args: InputProps): React.ReactNode {
  return <Input {...args} />;
}

const meta: Meta<InputProps> = {
  component: Template,
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Is the Input disabled?',
    },
    loading: {
      control: 'boolean',
      description: 'Is the Input loading?',
    },
    className: {
      control: 'text',
      description: 'Optional Tailwind CSS class for styling',
    },
  },
  tags: ['autodocs'],
};

export const Default: StoryObj<InputProps> = {
  render: Template,
  args: {},
  tags: ['autodocs'],
};

export const Placeholder: StoryObj<InputProps> = {
  render: Template,
  name: 'With Placeholder',
  args: {
    placeholder: 'Placeholder',
  },
};

export const Value: StoryObj<InputProps> = {
  render: Template,
  name: 'With Value',
  args: {
    value: 'Assigned value',
  },
};

export const DefaultValue: StoryObj<InputProps> = {
  render: Template,
  name: 'With Default Value',
  args: {
    defaultValue: 'Default value',
  },
};

export const FadeIn: StoryObj<InputProps> = {
  render: Template,
  name: 'WIth Motion Props',
  args: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  },
};

export const Disabled: StoryObj<InputProps> = {
  render: Template,
  name: 'Disabled',
  args: {
    disabled: true,
    value: 'Disabled',
  },
};

export const Loading: StoryObj<InputProps> = {
  render: Template,
  name: 'Loading',
  args: {
    loading: true,
  },
};

/* eslint import/no-default-export: 0 */
export default meta;
