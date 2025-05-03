import type { ArgTypes, InputProps, Meta, StoryObj } from 'src/lib';

import { composeMeta } from './composeMeta';

export interface InputStoriesGroup {
  inputMeta: Meta<InputProps>;
  disabled: StoryObj<InputProps>;
  passwordType: StoryObj<InputProps>;
  withValue: StoryObj<InputProps>;
}

export const inputArgTypes: ArgTypes<InputProps> = {
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

export const inputBaseArgs: InputProps = {
  value: '',
  placeholder: 'Enter something...',
  disabled: false,
  type: 'text',
  className: '',
};

export const disabled: StoryObj<InputProps> = {
  name: 'Disabled',
  args: {
    ...inputBaseArgs,
    disabled: true,
    value: 'Disabled text',
  },
};

export const passwordType: StoryObj<InputProps> = {
  name: 'Password Type',
  args: {
    ...inputBaseArgs,
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const withValue: StoryObj<InputProps> = {
  name: 'With Value',
  args: {
    ...inputBaseArgs,
    value: 'Jane Doe',
  },
};

export const composeInputMeta = (component: unknown): Meta<InputProps> =>
  composeMeta(component, {
    title: 'Components/Input',
    argTypes: inputArgTypes,
    args: inputBaseArgs,
    tags: ['autodocs'],
  });

export const InputStories: InputStoriesGroup = {
  inputMeta: {
    title: 'Components/Input',
    argTypes: inputArgTypes,
    args: inputBaseArgs,
  },
  disabled,
  passwordType,
  withValue,
};
