import { tv } from 'tailwind-variants';

import { tailwindCardComponentToken } from 'src/lib/domain/components/Card/tokens';

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
    'dark:divide-gray-200',
    'divide-gray-100',
    'divide-y',
    'overflow-hidden',
    'shadow',
    tailwindCardComponentToken.borderRadius,
  ],
});

export const cardBodyClasses = tv({
  extend: defaultCardStyles,
  base: [tailwindCardComponentToken.padding],
});
