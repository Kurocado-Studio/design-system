import type { VueElementConstructor } from '@vue/runtime-dom';
import type { MotionProps, motion } from 'motion-v';

import type { FadePropsOptions, MotionLayoutOptions } from '../../../lib';

export type FadeInProps<T extends keyof HTMLElementTagNameMap = 'div'> = Omit<
  FadePropsOptions,
  'tag'
> & {
  tag?: T | typeof motion;
};

export type FadeInStaggerGroupProps<
  T extends keyof HTMLElementTagNameMap = 'div',
> = MotionLayoutOptions<T> & {
  tag?: T | typeof motion;
  as?: keyof HTMLElementTagNameMap;
  speed?: number;
};

export type MotionElementProps<T = {}> = MotionProps & {
  as?: keyof HTMLElementTagNameMap;
  tag?: keyof HTMLElementTagNameMap | VueElementConstructor<T>;
};
