import { type VariantProps } from 'tailwind-variants';

import { type CommonHTMLElementProps } from '../common';
import {
  type alignStyles,
  type leadingStyles,
  type sizeStyles,
  type weightStyles,
} from './typography.styles';

export type TypographySize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'
  | 'caption';

export type TypographyWeight =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

export type TypographyLeading =
  | 'none'
  | 'tight'
  | 'snug'
  | 'normal'
  | 'relaxed'
  | 'loose';

export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

export interface TypographyLayoutOptions {
  align?: VariantProps<typeof alignStyles> | TypographyAlign;
  className?: string;
  italic?: boolean;
  leading?: VariantProps<typeof leadingStyles> | TypographyLeading;
  size?: VariantProps<typeof sizeStyles> | TypographySize;
  weight?: VariantProps<typeof weightStyles> | TypographyWeight;
}

export type TypographyComponentLayoutOptions<
  T extends HTMLElement = HTMLDivElement,
  K extends keyof HTMLElementTagNameMap = 'div',
> = CommonHTMLElementProps<T, K> & TypographyLayoutOptions;
