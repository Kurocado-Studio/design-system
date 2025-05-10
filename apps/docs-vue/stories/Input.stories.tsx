/* eslint import/no-default-export: 0 */
import { InputStories } from '@kurocado-studio/ui/stories';
import { Input } from '@kurocado-studio/ui/vue';

export default {
  title: 'Components/Input',
  component: Input,
  ...InputStories.inputMeta,
};
export const WithValue = InputStories.WithValue;
export const PasswordType = InputStories.passwordType;
export const Disabled = InputStories.disabled;
