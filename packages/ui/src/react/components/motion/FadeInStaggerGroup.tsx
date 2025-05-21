import { get } from 'lodash-es';
import { motion } from 'motion/react';
import React, { type ElementType, type ReactNode } from 'react';

import { createStaggerContainerProps } from '../../../lib';
import { type InferComponentProps } from '../../types';

export type FadeInStaggerGroupProps<T = 'div'> = InferComponentProps<T> & {
  speed?: number;
  as?: keyof HTMLElementTagNameMap;
  tag: T;
};

export function FadeInStaggerGroup<T extends ElementType = 'div'>({
  tag,
  speed,
  as,
  ...rest
}: FadeInStaggerGroupProps<T>): ReactNode {
  const staggerContainerProps = createStaggerContainerProps({
    staggerSpeed: speed,
  });

  const Component: ElementType =
    typeof tag === 'function' ? tag : get(motion, [as ?? 'div']);

  return <Component as={as} {...rest} {...staggerContainerProps} />;
}
