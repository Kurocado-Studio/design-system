import { tv } from 'tailwind-variants';

import { focusRingStyles } from '../common';

const baseInputStyles = tv({
  extend: focusRingStyles,
  base: [
    'w-full flex items-center flex-1 min-w-0 h-12 overflow-hidden',
    'px-4 my-2',
    'bg-white dark:bg-gray-900 forced-colors:bg-[Field]',
    'border-2 rounded-2xl',
    'text-md text-gray-800 dark:text-gray-300 outline outline-0',
    'rounded-Card-root-radius-default',
    'placeholder-gray-500',
  ],
  variants: {
    isFocusWithin: {
      false:
        'border-gray-300 dark:border-gray-500 forced-colors:border-[ButtonBorder]',
      true: 'border-gray-600 dark:border-gray-300 forced-colors:border-[Highlight]',
    },
    invalid: {
      true: 'border-red-600 dark:border-red-600 forced-colors:border-[Mark]',
    },
    disabled: {
      true: [
        'disabled:text-gray-200 dark:disabled:text-gray-500',
        'dark:bg-gray-700',
        'border-gray-200 dark:border-gray-700 forced-colors:border-[GrayText]',
      ],
    },
  },
});

export const inputStyles = <T>(props: T): string =>
  baseInputStyles(props as unknown as Record<string, unknown>);
