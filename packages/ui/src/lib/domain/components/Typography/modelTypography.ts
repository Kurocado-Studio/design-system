import { get } from 'lodash-es';
import { twMerge } from 'tailwind-merge';

import { type TypographyLayoutOptions } from './types';
import {
  alignStyles,
  italicStyles,
  leadingStyles,
  sizeStyles,
  weightStyles,
} from './typography.styles';

export function modelTypography(payload: TypographyLayoutOptions): string {
  const { italic, className } = payload;

  const alignment = {
    base: get(payload, ['align', 'base'], get(payload, ['align'])),
    sm: get(payload, ['align', 'sm']),
    md: get(payload, ['align', 'md']),
    lg: get(payload, ['align', 'lg']),
    xl: get(payload, ['align', 'xl']),
    '2xl': get(payload, ['align', '2xl']),
  };

  const size = {
    base: get(payload, ['size', 'base'], get(payload, ['size'])),
    sm: get(payload, ['size', 'sm']),
    md: get(payload, ['size', 'md']),
    lg: get(payload, ['size', 'lg']),
    xl: get(payload, ['size', 'xl']),
    '2xl': get(payload, ['size', '2xl']),
  };

  const weight = {
    base: get(payload, ['weight', 'base'], get(payload, ['weight'])),
    sm: get(payload, ['weight', 'sm']),
    md: get(payload, ['weight', 'md']),
    lg: get(payload, ['weight', 'lg']),
    xl: get(payload, ['weight', 'xl']),
    '2xl': get(payload, ['weight', '2xl']),
  };

  const leading = {
    base: get(payload, ['leading', 'base'], get(payload, ['leading'])),
    sm: get(payload, ['leading', 'sm']),
    md: get(payload, ['leading', 'md']),
    lg: get(payload, ['leading', 'lg']),
    xl: get(payload, ['leading', 'xl']),
    '2xl': get(payload, ['leading', '2xl']),
  };
  return twMerge(
    className,
    'text-gray-800 dark:text-gray-200',
    alignStyles(alignment),
    italicStyles({ italic }),
    sizeStyles(size),
    weightStyles(weight),
    leadingStyles(leading),
  );
}
