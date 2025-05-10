/* eslint import/no-default-export: 0 */
import { Button, type ButtonProps } from '@kurocado-studio/ui/vue';
import { type Meta, type StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'destructive', 'success', 'icon'],
    },
    ghost: { control: { type: 'boolean' } },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

const renderButton =
  (text: string): Story['render'] =>
  (args: unknown) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">${text}</Button>`,
  });

export const Primary: Story = {
  args: {
    variant: 'primary',
    ghost: false,
  },
  render: renderButton('Primary Button'),
};

export const PrimaryFullWidth: Story = {
  args: {
    variant: 'primary',
    ghost: false,
    fullWidth: true,
  },
  render: renderButton('Primary Button Full Width'),
};
