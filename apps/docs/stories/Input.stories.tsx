/* eslint import/no-default-export: 0 */
import { Input } from '@kurocado-studio/ui/react';
import { InputStories } from '@kurocado-studio/ui/stories';

const { inputMeta, withValue, passwordType, disabled } = InputStories;

export default {
  title: 'Layout/Card',
  component: Input,
  ...inputMeta,
};

export { withValue, passwordType, disabled };
