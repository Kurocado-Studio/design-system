import { motion } from 'framer-motion';
import { get } from 'lodash-es';
import React, { type ElementType, type ReactNode } from 'react';

import { createStaggerContainerProps } from '../../../lib';
import { type InferComponentProps } from '../../types';

type FadeInStaggerProps = {
  staggerSpeed?: number;
  as?: keyof HTMLElementTagNameMap;
};

export type FadeInStaggerGroupProps<T = 'div'> = InferComponentProps<T> &
  FadeInStaggerProps & {
    tag: T;
  };

export function FadeInStaggerGroup<T extends ElementType = 'div'>({
  tag,
  staggerSpeed,
  as,
  ...rest
}: FadeInStaggerGroupProps<T>): ReactNode {
  const staggerContainerProps = createStaggerContainerProps({ staggerSpeed });

  const Component: ElementType =
    typeof tag === 'function' ? tag : get(motion, [as ?? 'div']);

  return <Component as={as} {...rest} {...staggerContainerProps} />;
}
