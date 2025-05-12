import type { AnimationProps, MotionProps } from '../../types';
import { type CommonHTMLElementProps } from '../common';
import { type FadeInDirection } from './enums';

export type FadePropsOptions<T extends keyof HTMLElementTagNameMap = 'div'> = {
  fadeInDirection?: `${FadeInDirection}`;
  fadeInSpeed?: number;
  staggerOrder?: number;
  isInStaggerGroup?: boolean;
  shouldReduceMotion?: boolean | null;
  as?: T;
  transitionDuration?: number;
  viewport?: MotionProps['viewport'];
} & MotionLayoutOptions<T>;

export type MotionLayoutOptions<T extends keyof HTMLElementTagNameMap = 'div'> =
  CommonHTMLElementProps<HTMLElementTagNameMap[T], T> & AnimationProps;
