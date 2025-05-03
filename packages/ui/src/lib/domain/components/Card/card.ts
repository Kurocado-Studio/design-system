import { type CommonHTMLElementProps } from '../../types/common';

export interface CardComponentToken {
  bg: string;
  fg: string;
  borderRadius: string;
  padding: string;
}

export type CardComponentProps<
  T extends HTMLElement = HTMLDivElement,
  K extends keyof HTMLElementTagNameMap = 'div',
> = CommonHTMLElementProps<T, K>;
