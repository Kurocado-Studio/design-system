import { tv } from 'tailwind-variants';

export const focusRing = tv({
  base: 'outline focus-visible:ring-2 focus-visible:ring-blue-400 outline-blue-400 dark:outline-blue-500 forced-colors:outline-[Highlight] outline-offset-2',
  variants: {
    isFocusVisible: {
      false: 'outline-0',
      true: 'outline-2',
    },
  },
});
