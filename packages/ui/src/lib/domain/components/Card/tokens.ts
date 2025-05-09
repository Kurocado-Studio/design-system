import { type CardComponentToken } from './types';

export const tailwindCardComponentToken: CardComponentToken = {
  bg: 'bg-Card-root-bg-default dark:bg-gray-900',
  borderRadius: 'rounded-Card-root-radius-default',
  fg: 'text-Card-root-fg-default dark:text-gray-100',
  border: 'border-2 border-gray-200 dark:border-gray-800',
  divider: 'text-Card-root-fg-default dark:text-zinc-200',
  padding: 'p-Card-root-padding-default',
};

export const cardVariantToken: CardComponentToken = {
  bg: 'Card.root.bg.default',
  fg: 'Card.root.fg.default',
  divider: 'Card.root.divider.default',
  borderRadius: 'Card.root.radius.default',
  border: 'Card.root.border.default',
  padding: 'Card.root.padding.default',
};
