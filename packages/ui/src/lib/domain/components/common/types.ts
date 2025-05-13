import { type MotionProps } from '../../types/motion.library';

export type CommonHTMLElementProps<
  T extends HTMLElement,
  K extends keyof HTMLElementTagNameMap = 'div',
> = {
  as?: K extends keyof HTMLElementTagNameMap ? K : T;
  loading?: boolean;
  disabled?: boolean;
  invalid?: boolean;
} & MotionProps;
