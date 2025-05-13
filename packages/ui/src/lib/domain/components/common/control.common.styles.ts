import { tv } from 'tailwind-variants';

import { tailwindCardComponentToken } from '../Card';
import { focusRingStyles } from './focusRing.styles';

/**
 * Tailwind’s default scale:
 * • h-8 / h-10 / h-12  →  32 / 40 / 48 px tall  (meets 32-px tap-target)
 * • px-3 / px-4 / px-5 →  12 / 16 / 20 px horizontal padding
 * • text-sm / text-base keep copy legible while matching Tailwind buttons
 */
export const controlCommonStyles = tv({
  extend: focusRingStyles,
  base: [
    tailwindCardComponentToken.borderRadius,
    'rounded-full',
    'inline-flex items-center gap-2',
    'font-medium leading-5 text-sm',
    'border border-gray-300 dark:border-gray-500',
    'bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300',
    'outline-none transition-colors duration-150',
  ],
  variants: {
    size: {
      base: '',
      sm: 'h-8  px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-5 text-base',
      xl: '',
      '2xl': '',
    },
    fontSize: {
      base: 'text-base',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    },
    controlSize: {
      base: 'size-16',
      sm: 'size-12',
      md: 'size-24',
      lg: 'size-36',
      xl: 'size-48',
      '2xl': 'size-60',
    },
    heightSize: {
      base: 'h-16',
      sm: 'h-12',
      md: 'h-24',
      lg: 'h-36',
      xl: 'h-48',
      '2xl': 'h-60',
    },
    widthSize: {
      base: 'w-',
      sm: 'w-',
      md: 'w-',
      lg: 'w-',
      xl: 'w-',
      '2xl': 'w-',
    },
    borderRadiusSize: {
      base: 'rounded-sm',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
    },
    disabled: {
      true: [
        'bg-gray-100 dark:bg-gray-700 ',
        'text-gray-400 border-gray-200 dark:border-gray-700',
      ],
    },
  },
});
