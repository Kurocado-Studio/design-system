import type { AnimationProps, CommonHTMLElementProps } from '../../types';

export type MotionComponentLayoutOptions<
  T extends HTMLElement = HTMLDivElement,
  K extends keyof HTMLElementTagNameMap = 'div',
> = CommonHTMLElementProps<T, K> & AnimationProps;
