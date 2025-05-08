/* eslint import/no-default-export: 0 */
import { Input } from '@kurocado-studio/ui/vue';

export default {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
};

export const Default = {
  component: Input,
  args: {
    value: 'Jane Doe',
  },
};

export const Disabled = {
  component: Input,
  name: 'Disabled',
  args: {
    placeholder: 'Disabled Input',
    disabled: true,
  },
  tags: ['autodocs'],
};

export const WithFramerMotionProps = {
  name: 'With Motion',
  args: {
    placeholder: 'Animated fade-in',
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 },
  },
  tags: ['autodocs'],
};
