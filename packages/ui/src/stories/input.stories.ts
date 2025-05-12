import type { ArgTypes, InputProps, Meta, StoryObj } from '../lib';

export interface InputStoriesGroup {
  inputMeta: Meta<InputProps>;
  disabled: StoryObj<InputProps>;
  passwordType: StoryObj<InputProps>;
  WithMotionProps: StoryObj<InputProps>;
  WithValue: StoryObj<InputProps>;
}

const inputArgTypes: ArgTypes<InputProps> = {
  value: {
    control: 'text',
    description: 'Current value of the input',
    table: { category: 'Props' },
  },
  placeholder: {
    control: 'text',
    description: 'Placeholder text when input is empty',
    table: { category: 'Props' },
  },
  disabled: {
    control: 'boolean',
    description: 'Disables the input field',
    table: { category: 'Props' },
  },
  type: {
    control: { type: 'select' },
    options: ['text', 'password', 'email', 'number'],
    description: 'HTML input type',
    table: { category: 'Props' },
  },
  className: {
    control: 'text',
    description: 'Custom Tailwind CSS classes',
    table: { category: 'Styling' },
  },
};

const inputBaseArgs: InputProps = {
  value: '',
  placeholder: 'Enter something...',
  disabled: false,
  type: 'text',
  className: '',
};

const disabled: StoryObj<InputProps> = {
  name: 'Disabled',
  args: {
    ...inputBaseArgs,
    disabled: true,
    value: 'Disabled text',
  },
};

const passwordType: StoryObj<InputProps> = {
  name: 'Password Type',
  args: {
    ...inputBaseArgs,
    type: 'password',
    placeholder: 'Enter password',
  },
};

const WithValue = {
  name: 'With Value',
  args: {
    ...inputBaseArgs,
    value: 'Jane Doe',
  },
};

export const WithMotionProps = {
  name: 'With Motion Props',
  props: {
    placeholder: 'Animated fade-in',
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 },
  },
  tags: ['autodocs'],
};

export const InputStories: InputStoriesGroup = {
  inputMeta: {
    title: 'Components/Input',
    argTypes: inputArgTypes,
    args: inputBaseArgs,
  },
  WithMotionProps,
  disabled,
  passwordType,
  WithValue,
};
