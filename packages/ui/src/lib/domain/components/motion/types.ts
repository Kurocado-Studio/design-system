import { type CommonHTMLElementProps } from '../common';
import { type FadeInDirection } from './enums';

export type FadePropsOptions<T extends keyof HTMLElementTagNameMap = 'div'> = {
  direction?: `${FadeInDirection}`;
  speed?: number;
  order?: number;
  isStagger?: boolean;
  shouldReduceMotion?: boolean | null;
  as?: T;
  duration?: number;
  viewport?: Record<string, unknown>;
};

export type MotionLayoutOptions<T extends keyof HTMLElementTagNameMap = 'div'> =
  CommonHTMLElementProps<HTMLElementTagNameMap[T], T>;
