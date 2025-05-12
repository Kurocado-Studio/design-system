import { motion } from 'framer-motion';
import { get } from 'lodash-es';
import React, { type FC, type PropsWithChildren, type ReactNode } from 'react';

import {
  type MotionLayoutOptions,
  createStaggerContainerProps,
} from '../../../lib';

export type FadeInGroupProps<T extends React.ElementType = 'div'> =
  MotionLayoutOptions<T extends keyof HTMLElementTagNameMap ? T : never> & {
    staggerSpeed?: number;
  } & React.ComponentProps<T>;

export function FadeInGroup<T extends React.ElementType>({
  tag,
  staggerSpeed,
  ...rest
}: PropsWithChildren<FadeInGroupProps<T>>): ReactNode {
  const staggerContainerProps = createStaggerContainerProps({ staggerSpeed });
  const IntrinsicElement: FC<T> =
    typeof tag === 'function' ? tag : get(motion, [tag ?? 'div']);

  // @ts-expect-error mismatch between Motion and React.ElementType<T>
  return <IntrinsicElement tag={tag} {...rest} {...staggerContainerProps} />;
}
