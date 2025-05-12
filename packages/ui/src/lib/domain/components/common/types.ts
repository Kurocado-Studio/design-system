import { type MotionProps } from '../../types/motion.library';

export type CommonHTMLElementProps<
  T extends HTMLElement | { (payload: unknown): HTMLElement | null },
  K extends keyof HTMLElementTagNameMap = 'div',
> = {
  tag?: K extends keyof HTMLElementTagNameMap ? K : T;
  loading?: boolean;
  disabled?: boolean;
  invalid?: boolean;
} & Omit<MotionProps, 'children'>;

export type ReactCommonHTMLElementProps<
  T extends HTMLElement | { (payload: unknown): HTMLElement | null },
  K extends keyof HTMLElementTagNameMap = 'div',
> = CommonHTMLElementProps<T, K> & {
  className?: string;
};

export type VueCommonHTMLElementProps<
  T extends HTMLElement | { (payload: unknown): HTMLElement | null },
  K extends keyof HTMLElementTagNameMap = 'div',
> = CommonHTMLElementProps<T, K> & {
  class?: string;
};

export type CommonHTMLElementTag<T extends keyof HTMLElementTagNameMap> = Omit<
  Partial<HTMLElementTagNameMap[T]>,
  'children' | 'style'
>;
