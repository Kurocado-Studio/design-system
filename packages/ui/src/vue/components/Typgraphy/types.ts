import type { TypographyLayoutOptions } from '../../../lib';

export interface TypographyProps extends TypographyLayoutOptions {
  tag?: keyof HTMLElementTagNameMap;
  class?: string;
}
