/* eslint import/no-default-export: 0 */
import { Input } from '@kurocado-studio/ui/react';
import { InputStories } from '@kurocado-studio/ui/stories';

export default {
  title: 'Components/Input',
  component: Input,
  ...InputStories.inputMeta,
};
export const WithValue = InputStories.WithValue;
export const PasswordType = InputStories.passwordType;
export const Disabled = InputStories.disabled;
