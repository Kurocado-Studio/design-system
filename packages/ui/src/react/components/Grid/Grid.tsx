import React from 'react';
import { twMerge } from 'tailwind-merge';

import {
  type GridComponentProps,
  composeAnimationProps,
  modelGridLayout,
} from 'src/lib';
import { MotionElement } from 'src/react/components/motion';

export type GridProps = React.PropsWithChildren<
  GridComponentProps & { className?: string }
>;

export function Grid(props: GridProps): React.ReactNode {
  const { className, children, ...rest } = props;

  return (
    <MotionElement
      as={rest.tag}
      className={twMerge(modelGridLayout(props), className)}
      {...composeAnimationProps(rest)}
    >
      {children}
    </MotionElement>
  );
}
