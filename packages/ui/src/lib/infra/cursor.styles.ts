import { tv } from 'tailwind-variants';

const baseCursorStyles = tv({
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

export const cursorStyles = <T>(payload: T): string =>
  baseCursorStyles(payload as unknown as Record<string, unknown>);
