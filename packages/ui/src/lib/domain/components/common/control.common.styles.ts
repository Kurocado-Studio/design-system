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
    'rounded-md border border-gray-300 dark:border-gray-500',
    'bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300',
    'outline-none transition-colors duration-150',
    'pt-4',
  ],
  variants: {
    size: {
      sm: 'h-8  px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-5 text-base',
    },
    disabled: {
      true: [
        'bg-gray-100 dark:bg-gray-700 ',
        'text-gray-400 border-gray-200 dark:border-gray-700',
      ],
    },
  },
  defaultVariants: { size: 'md' },
});
