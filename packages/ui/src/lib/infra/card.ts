import { tv } from 'tailwind-variants';

import { cardVariantToken } from 'src/lib/domain/tokens/card';

const defaultCardStyles = tv({
  base: Object.values({
    bg: cardVariantToken.bg,
    fg: cardVariantToken.fg,
  }),
});

export const cardHeaderClasses = tv({
  extend: defaultCardStyles,
  base: [cardVariantToken.paddingHeader],
});

export const cardFooterClasses = tv({
  extend: defaultCardStyles,
  base: [cardVariantToken.paddingFooter],
});

export const cardComponentWrapperClasses = tv({
  extend: defaultCardStyles,
  base: [
    'dark:divide-gray-200',
    'divide-gray-100',
    'divide-y',
    'overflow-hidden',
    'shadow',
    cardVariantToken.radius,
  ],
});

export const cardBodyClasses = tv({
  extend: defaultCardStyles,
  base: [cardVariantToken.paddingBody],
});
