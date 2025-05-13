import type { TypographyLayoutOptions } from '../../../lib';

export type TypographyProps = TypographyLayoutOptions & {
  as?: keyof HTMLElementTagNameMap;
  class?: string;
};
