/* eslint import/no-default-export: 0 */
import { Button, type ButtonProps } from '@kurocado-studio/ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'destructive', 'success', 'icon'],
    },
    children: { control: 'text' },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const PrimaryFullWidth: Story = {
  args: {
    children: 'Primary Button Full Width',
    variant: 'primary',
    // @ts-ignore
    fullWidth: true,
  },
};
