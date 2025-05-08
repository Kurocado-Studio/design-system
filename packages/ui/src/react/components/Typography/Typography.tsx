import { get } from 'lodash-es';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import {
  type TypographyComponentLayoutOptions,
  composeAnimationProps,
  modelTypography,
} from 'src/lib';

import { MotionElement } from '../motion';

export type TypographyProps = React.PropsWithChildren<
  TypographyComponentLayoutOptions & { className?: string }
>;

export function Typography(props: TypographyProps): React.ReactNode {
  const { className, children, ...rest } = props;

  return (
    <MotionElement
      as={get(rest, ['tag'], 'p')}
      className={twMerge(modelTypography(props), className)}
      {...composeAnimationProps(rest)}
    >
      {children}
    </MotionElement>
  );
}
