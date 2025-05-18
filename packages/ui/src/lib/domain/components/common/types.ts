import { type Sizes } from '../../types';

export type CommonHTMLElementProps<
  T extends HTMLElement,
  K extends keyof HTMLElementTagNameMap = 'div',
> = {
  as?: K extends keyof HTMLElementTagNameMap ? K : T;
  loading?: boolean;
  disabled?: boolean;
  invalid?: boolean;
};

export type CommonControlStyles = {
  size?: Sizes;
  fontSize?: Sizes;
  controlSize?: Sizes;
  heightSize?: Sizes;
  widthSize?: Sizes;
  borderRadiusSize?: Sizes;
};
