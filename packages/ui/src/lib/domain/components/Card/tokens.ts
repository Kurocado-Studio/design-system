import { type CardComponentToken } from 'src/lib/domain/components/Card/types';

export const tailwindCardComponentToken: CardComponentToken = {
  bg: 'bg-card-root-bg-default',
  borderRadius: 'rounded-card-root-radius-default',
  fg: 'text-card-root-fg-default',
  padding: 'p-card-root-padding-default',
};

export const cardVariantToken: CardComponentToken = {
  bg: 'card.root.bg.default',
  fg: 'card.root.fg.default',
  borderRadius: 'card.root.radius.default',
  padding: 'card.root.padding.default',
};
