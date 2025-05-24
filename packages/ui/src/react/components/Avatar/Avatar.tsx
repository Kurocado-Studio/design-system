import { type HTMLMotionProps } from 'motion/react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import {
  type AvatarProps as AvatarPropsBase,
  avatarStyles,
} from '../../../lib';
import { MotionElement } from '../motion';

export type AvatarProps = HTMLMotionProps<'img'> & AvatarPropsBase;

export function Avatar(props: AvatarProps): React.ReactNode {
  const { controlSize: _, ...rest } = props;
  return (
    <MotionElement
      as='img'
      {...rest}
      className={twMerge(avatarStyles(props), props.className)}
      src={props.src}
      alt={props.alt}
    />
  );
}
