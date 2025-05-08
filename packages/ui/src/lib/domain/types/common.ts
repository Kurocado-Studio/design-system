import { type MotionProps } from './motion.library';

export type CommonHTMLElementProps<
  T extends HTMLElement,
  K extends keyof HTMLElementTagNameMap = 'div',
> = {
  tag?: K;
  loading?: boolean;
  disabled?: boolean;
  invalid?: boolean;
} & MotionProps &
  Partial<Omit<T, 'children'>>;
