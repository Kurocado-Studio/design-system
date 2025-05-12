import { type ReactCommonHTMLElementProps } from '../common';

export interface CardComponentToken {
  bg: string;
  fg: string;
  divider: string;
  borderRadius: string;
  border: string;
  padding: string;
}

export type CardComponentProps<
  T extends HTMLElement = HTMLDivElement,
  K extends keyof HTMLElementTagNameMap = 'div',
> = ReactCommonHTMLElementProps<T, K>;
