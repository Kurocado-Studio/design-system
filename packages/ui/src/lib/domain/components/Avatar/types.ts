import { type CommonControlStyles } from '../common';

export type AvatarComponentToken = {
  bg: string;
  border: string;
  borderRadius: string;
  fg: string;
};

export interface AvatarProps
  extends CommonControlStyles,
    Partial<HTMLImageElement> {}
