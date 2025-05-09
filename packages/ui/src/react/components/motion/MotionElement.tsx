import { type MotionProps, motion } from 'framer-motion';
import React, { type ReactNode } from 'react';

import { type HTMLIntrinsicElements } from '../../../lib';

export interface MotionElementProps<T extends HTMLElement> extends MotionProps {
  as?: HTMLIntrinsicElements;
  ref?: React.Ref<T | null>;
}

export function MotionElement<T extends HTMLElement>({
  as,
  ref,
  ...props
}: MotionElementProps<T> &
  Record<string | number | symbol, unknown>): ReactNode {
  const element = as || 'div';

  // @ts-ignore type-mismatch between JSX HTML elements and motion HTML elements
  const Component = motion[element];

  return <Component ref={ref} {...props} />;
}
