import type {
  ComposeLabelOptions,
  TypographyLayoutOptions,
} from '../../../lib';

export type TypographyProps = TypographyLayoutOptions & {
  as?: keyof HTMLElementTagNameMap;
  class?: string;
};

export type LabelProps = ComposeLabelOptions & {
  class?: string;
};
