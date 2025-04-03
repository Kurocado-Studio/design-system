import { motion } from 'framer-motion';
import React from 'react';

import { type HTMLIntrinsicElements } from 'src/types';

export interface MotionElementProps {
  as?: HTMLIntrinsicElements;
}

export function MotionElement({
  as,
  ...props
}: MotionElementProps &
  Record<string | number | symbol, unknown>): React.ReactNode {
  const element = as || 'div';

  // @ts-expect-error type-mismatch between JSX HTML elements and Motion HTML elements
  const Component = motion[element];

  return <Component {...props} />;
}
