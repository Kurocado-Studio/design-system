import {
  type AvatarProps as AvatarPropsBase,
  type CommonControlStyles,
} from '../../../lib';

export type AvatarProps = AvatarPropsBase & {
  class?: string;
} & CommonControlStyles;
