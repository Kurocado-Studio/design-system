import { tv } from 'tailwind-variants';

import { tailwindCardComponentToken } from './tokens';

const defaultCardStyles = tv({
  base: Object.values({
    bg: tailwindCardComponentToken.bg,
    fg: tailwindCardComponentToken.fg,
  }),
});

export const cardHeaderClasses = tv({
  extend: defaultCardStyles,
  base: [tailwindCardComponentToken.padding],
});

export const cardFooterClasses = tv({
  extend: defaultCardStyles,
  base: [tailwindCardComponentToken.padding],
});

export const cardComponentWrapperClasses = tv({
  extend: defaultCardStyles,
  base: [
    'dark:divide-gray-700',
    'divide-gray-200',
    'divide-y',
    'overflow-hidden',
    'shadow',
    tailwindCardComponentToken.borderRadius,
    tailwindCardComponentToken.border,
  ],
});

export const cardBodyClasses = tv({
  extend: defaultCardStyles,
  base: [tailwindCardComponentToken.padding],
});
