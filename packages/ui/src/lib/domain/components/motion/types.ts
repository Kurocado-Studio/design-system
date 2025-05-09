import type { AnimationProps } from '../../types';
import { type CommonHTMLElementProps } from '../common';

export type MotionComponentLayoutOptions<
  T extends HTMLElement = HTMLDivElement,
  K extends keyof HTMLElementTagNameMap = 'div',
> = CommonHTMLElementProps<T, K> & AnimationProps;
