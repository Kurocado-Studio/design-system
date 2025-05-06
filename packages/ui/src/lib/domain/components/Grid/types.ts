import type { VariantProps } from 'tailwind-variants';

import {
  type columnStyles,
  type directionStyles,
  type gapStyles,
  type itemsStyles,
  type justifyStyles,
  type minHStyles,
  type minWStyles,
  type rowStyles,
} from '../../../infra/grid.styles';
import { type CommonHTMLElementProps } from '../../types';

export type ColumnStyles = VariantProps<typeof columnStyles>;
export type DirectionStyles = VariantProps<typeof directionStyles>;
export type GapStyles = VariantProps<typeof gapStyles>;
export type ItemsStyles = VariantProps<typeof itemsStyles>;
export type JustifyStyles = VariantProps<typeof justifyStyles>;
export type MinHStyles = VariantProps<typeof minHStyles>;
export type MinWStyles = VariantProps<typeof minWStyles>;
export type RowStyles = VariantProps<typeof rowStyles>;

export type GridComponentLayoutOptions = {
  columns?: ColumnStyles | string;
  direction?: DirectionStyles | string;
  gap?: GapStyles | string;
  items?: ItemsStyles | string;
  justify?: JustifyStyles | string;
  minH?: MinHStyles | string;
  minW?: MinWStyles | string;
  rows?: RowStyles | string;
};

export type GridComponentProps<
  T extends HTMLElement = HTMLDivElement,
  K extends keyof HTMLElementTagNameMap = 'div',
> = CommonHTMLElementProps<T, K> & GridComponentLayoutOptions;
