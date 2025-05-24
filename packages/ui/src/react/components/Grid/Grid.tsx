import React from 'react';
import { twMerge } from 'tailwind-merge';

import { type GridComponentProps, modelGridLayout } from '../../../lib';
import { MotionElement } from '../motion';

export type GridProps = React.PropsWithChildren<
  GridComponentProps & { className?: string }
>;

export function Grid(props: GridProps): React.ReactNode {
  const { className, children, ...rest } = props;

  return (
    <MotionElement
      as={rest.as}
      className={twMerge(modelGridLayout(props), className)}
      {...rest}
    >
      {children}
    </MotionElement>
  );
}
