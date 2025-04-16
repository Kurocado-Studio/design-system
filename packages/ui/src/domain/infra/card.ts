import { tv } from 'tailwind-variants';

import { type CardVariantToken } from '../types/card';

export const cardVariantToken: CardVariantToken = {
  bg: 'bg-theme.card.default.bg',
  fg: 'text-theme.card.default.fg',
  radius: 'text-theme.card.default.radius',
  padding: 'p-theme.card.default.padding',
  paddingBody: 'p-theme.card.default.paddingBody',
  paddingHeader: 'p-theme.card.default.paddingHeader',
  paddingFooter: 'p-theme.card.default.paddingFooter',
};

export const defaultCardStyles = tv({
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

export const cardClasses = tv({
  extend: defaultCardStyles,
  base: [
    'dark:divide-gray-700',
    'divide-gray-200',
    'divide-y',
    'overflow-hidden',
    'shadow',
    cardVariantToken.radius,
    cardVariantToken.padding,
  ],
});

export const cardBodyClasses = tv({
  extend: defaultCardStyles,
  base: [cardVariantToken.paddingBody],
});

export const cardStyles = {
  component: cardClasses,
  body: cardBodyClasses,
  footer: cardFooterClasses,
  header: cardHeaderClasses,
};
