import type { CommonHTMLElementProps } from '../../../lib';

export type CardProps<
  T extends HTMLElement = HTMLDivElement,
  K extends keyof HTMLElementTagNameMap = 'div',
> = CommonHTMLElementProps<T, K>;
