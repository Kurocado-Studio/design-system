import { type HTMLAttributes } from 'vue';

import type { A11yButtonProps } from '../../../lib';

export type ButtonProps = A11yButtonProps & {
  class?: HTMLAttributes['class'];
};
