import { type AvatarComponentToken } from './types';

export const tailwindAvatarComponentToken: AvatarComponentToken = {
  bg: 'bg-card-root-bg-default dark:bg-gray-900',
  borderRadius: 'rounded-card-root-radius-default',
  fg: 'text-card-root-fg-default dark:text-gray-100',
  border: 'border-2 border-gray-200 dark:border-gray-800',
};

export const avatarVariantToken: AvatarComponentToken = {
  bg: 'avatar.root.bg.default',
  fg: 'avatar.root.fg.default',
  borderRadius: 'avatar.root.radius.default',
  border: 'avatar.root.border.default',
};
