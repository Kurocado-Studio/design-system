import { type HTMLAttributes } from 'vue';

import type { GridComponentLayoutOptions } from '../../../lib';

export interface GridProps extends GridComponentLayoutOptions {
  tag?: keyof HTMLElementTagNameMap;
  class?: HTMLAttributes['class'];
}
