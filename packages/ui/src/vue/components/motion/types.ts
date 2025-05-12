import { type motion } from 'motion-v';
import { type JSX } from 'vue/jsx-runtime';

import type { FadePropsOptions, MotionLayoutOptions } from '../../../lib';

export type FadeInProps<T extends keyof HTMLElementTagNameMap = 'div'> = Omit<
  FadePropsOptions,
  'tag'
> & {
  tag?: T | typeof motion;
} & JSX.IntrinsicElements[T];

export type FadeInStaggerGroupProps<
  T extends keyof HTMLElementTagNameMap = 'div',
> = MotionLayoutOptions<T> & {
  /** string tag name or Vue component */
  tag?: T | typeof motion;
  staggerSpeed?: number;
} & JSX.IntrinsicElements[T];
