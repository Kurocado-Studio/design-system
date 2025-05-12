import { type MotionProps, motion } from 'framer-motion';
import React, { type ReactNode } from 'react';

import { type HTMLIntrinsicElements } from '../../../lib';

export interface MotionElementProps<T extends HTMLElement> extends MotionProps {
  tag?: HTMLIntrinsicElements;
  ref?: React.Ref<T | null>;
}

export function MotionElement<T extends HTMLElement>({
  tag,
  ref,
  ...props
}: MotionElementProps<T> &
  Record<string | number | symbol, unknown>): ReactNode {
  const element = tag || 'div';

  // @ts-ignore type-mismatch between JSX HTML elements and motion HTML elements
  const Component = motion[element];

  return <Component ref={ref} {...props} />;
}
