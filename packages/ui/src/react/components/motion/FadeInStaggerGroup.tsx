import { motion } from 'framer-motion';
import { get } from 'lodash-es';
import React, { type FC, type PropsWithChildren, type ReactNode } from 'react';

import {
  type MotionLayoutOptions,
  createStaggerContainerProps,
} from '../../../lib';

export type FadeInStaggerGroupProps<T extends React.ElementType = 'div'> =
  MotionLayoutOptions<T extends keyof HTMLElementTagNameMap ? T : never> & {
    staggerSpeed?: number;
    tag?: T;
  } & React.ComponentProps<T>;

export function FadeInStaggerGroup<T extends React.ElementType>({
  staggerSpeed,
  tag,
  ...rest
}: PropsWithChildren<FadeInStaggerGroupProps<T>>): ReactNode {
  const staggerContainerProps = createStaggerContainerProps({ staggerSpeed });
  const { as, ...restProps } = rest;

  const Component: FC =
    typeof tag === 'function' ? tag : get(motion, [as ?? 'div']);

  // @ts-expect-error mismatch between Motion and React.ElementType<T>
  return <Component as={as} {...restProps} {...staggerContainerProps} />;
}
