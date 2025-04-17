import { tv } from 'tailwind-variants';

import { type CardVariantToken } from '../types/card';

export const cardVariantToken: CardVariantToken = {
  bg: 'bg-card-default-bg',
  fg: 'text-card-default-fg',
  radius: 'text-card-default-radius',
  padding: 'p-card-default-padding',
  paddingBody: 'p-card-default-paddingBody',
  paddingHeader: 'p-card-default-paddingHeader',
  paddingFooter: 'p-card-default-paddingFooter',
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
