import { type CardComponentToken } from 'src/lib/domain/types';

export const tailwindCardComponentToken: CardComponentToken = {
  bg: 'bg-card-root-bg-default dark:bg-gray-900',
  borderRadius: 'rounded-card-root-radius-default',
  fg: 'text-card-root-fg-default dark:text-gray-100',
  border: 'border-2 border-gray-200 dark:border-gray-800',
  divider: 'text-card-root-fg-default dark:text-zinc-200',
  padding: 'p-card-root-padding-default',
};

export const cardVariantToken: CardComponentToken = {
  bg: 'card.root.bg.default',
  fg: 'card.root.fg.default',
  divider: 'card.root.divider.default',
  borderRadius: 'card.root.radius.default',
  border: 'card.root.border.default',
  padding: 'card.root.padding.default',
};
