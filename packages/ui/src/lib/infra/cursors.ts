import { tv } from 'tailwind-variants';

export const cursors = tv({
  base: 'cursor-pointer',
  variants: {
    loading: {
      true: 'cursor-progress',
    },
    disabled: {
      true: 'cursor-not-allowed',
    },
  },
});
