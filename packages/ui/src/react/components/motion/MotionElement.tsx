import { type MotionProps, motion } from 'framer-motion';
import React, { type FC, type ReactNode } from 'react';

export interface MotionElementProps<
  T extends keyof HTMLElementTagNameMap | FC = 'div',
> extends MotionProps {
  as?: T;
}

export function MotionElement<T extends keyof HTMLElementTagNameMap>({
  as,
  ...props
}: MotionElementProps<T> &
  Record<string | number | symbol, unknown>): ReactNode {
  const Component: FC<MotionElementProps<T>> = motion[as || 'div'];

  return <Component {...props} />;
}
