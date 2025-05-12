import { type MotionProps } from '../../types/motion.library';

export type CommonHTMLElementProps<
  T extends HTMLElement | { (payload: unknown): HTMLElement | null },
  K extends keyof HTMLElementTagNameMap = 'div',
> = {
  tag?: K extends keyof HTMLElementTagNameMap ? K : never;
  loading?: boolean;
  disabled?: boolean;
  invalid?: boolean;
} & Omit<MotionProps, 'children'> &
  Partial<Omit<T, 'children' | 'style'>>;
