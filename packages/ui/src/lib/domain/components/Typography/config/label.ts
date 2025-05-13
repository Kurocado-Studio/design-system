import type { TypographyComponentLayoutOptions } from '../types';

export type ComposeLabelOptions = TypographyComponentLayoutOptions<
  HTMLLabelElement,
  'label'
>;
export function composeLabel(
  props: ComposeLabelOptions,
): TypographyComponentLayoutOptions<HTMLLabelElement, 'label'> {
  return {
    ...props,
    as: 'label',
    size: 'caption',
    weight: 'bold',
    leading: 'tight',
  };
}
