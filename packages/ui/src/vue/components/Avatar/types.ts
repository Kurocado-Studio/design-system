import type { MotionProps } from 'motion-v';

import { type AvatarProps as AvatarPropsBase } from '../../../lib';

export type AvatarProps = MotionProps<'img'> &
  AvatarPropsBase & {
    class?: string;
  };
