import type { VueElementConstructor } from '@vue/runtime-dom';
import type { MotionProps, motion } from 'motion-v';
import { HTMLAttributes } from 'vue';

import type { FadePropsOptions, MotionLayoutOptions } from '../../../lib';

export type FadeInProps<T extends keyof HTMLElementTagNameMap = 'div'> = Omit<
  FadePropsOptions,
  'tag'
> & {
  tag?: T | typeof motion;
} & /* @vue-ignore */ HTMLAttributes;

export type FadeInStaggerGroupProps<
  T extends keyof HTMLElementTagNameMap = 'div',
> = MotionLayoutOptions<T> & {
  tag?: T | typeof motion;
  staggerSpeed?: number;
} & /* @vue-ignore */ HTMLAttributes;

export type MotionElementProps<T = {}> = MotionProps & {
  as?: keyof HTMLElementTagNameMap;
  tag?: keyof HTMLElementTagNameMap | VueElementConstructor<T>;
};
