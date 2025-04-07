import { type MotionProps, motion } from 'framer-motion';
import React from 'react';

import { type HTMLIntrinsicElements } from 'src/domain/types';

export interface MotionElementProps<T extends HTMLElement> extends MotionProps {
  as?: HTMLIntrinsicElements;
  ref?: React.Ref<T | null>;
}

export function MotionElement<T extends HTMLElement>({
  as,
  ref,
  ...props
}: MotionElementProps<T> &
  Record<string | number | symbol, unknown>): React.ReactNode {
  const element = as || 'div';

  // @ts-expect-error type-mismatch between JSX HTML elements and Motion HTML elements
  const Component = motion[element];

  return <Component ref={ref} {...props} />;
}
