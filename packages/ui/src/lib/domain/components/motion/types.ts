import { type CommonHTMLElementProps } from '../common';
import { type createFadeProps } from './createFadeProps';
import { type createStaggerContainerProps } from './createStaggerContainerProps';
import { type FadeInDirection } from './enums';

export type FadePropsOptions<T extends keyof HTMLElementTagNameMap = 'div'> = {
  fadeInDirection?: `${FadeInDirection}`;
  fadeInSpeed?: number;
  staggerOrder?: number;
  staggerSpeed?: number;
  isInStaggerGroup?: boolean;
  shouldReduceMotion?: boolean | null;
  as?: T;
  transitionDuration?: number;
  viewport?: Record<string, unknown>;
};

export type MotionLayoutComposer = () => {
  createStaggerContainerProps: typeof createStaggerContainerProps;
  createFadeProps: typeof createFadeProps;
};

export type MotionLayoutOptions<T extends keyof HTMLElementTagNameMap = 'div'> =
  CommonHTMLElementProps<HTMLElementTagNameMap[T], T>;
