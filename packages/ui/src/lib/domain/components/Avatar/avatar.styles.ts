import { tv } from 'tailwind-variants';

import { controlCommonStyles } from '../common';
import { tailwindAvatarComponentToken } from './tokens';

const baseAvatarStyles = tv({
  extend: controlCommonStyles,
  base: [
    tailwindAvatarComponentToken.bg,
    tailwindAvatarComponentToken.borderRadius,
    tailwindAvatarComponentToken.fg,
    tailwindAvatarComponentToken.border,
  ],
  defaultVariants: {
    borderRadiusSize: '2xl',
    controlSize: 'base',
  },
});

export const avatarStyles = (payload: unknown): string =>
  baseAvatarStyles(payload as Record<string, unknown>);
