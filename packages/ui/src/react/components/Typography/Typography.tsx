import { get } from 'lodash-es';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import {
  type TypographyComponentLayoutOptions,
  composeAnimationProps,
  modelTypography,
} from '../../../lib';
import { MotionElement } from '../motion';

type Typography<T extends keyof HTMLElementTagNameMap> =
  TypographyComponentLayoutOptions<HTMLElementTagNameMap[T], T> & {
    className?: string;
    as?: T;
  };

export type TypographyProps<T extends keyof HTMLElementTagNameMap = 'div'> =
  React.PropsWithChildren<Typography<T>>;

export function Typography<T extends keyof HTMLElementTagNameMap>(
  props: TypographyProps<T>,
): React.ReactNode {
  const { className, children, ...rest } = props;

  return (
    <MotionElement
      as={get(rest, ['as'], 'p')}
      className={twMerge(modelTypography(props), className)}
      {...rest}
      {...composeAnimationProps(rest)}
    >
      {children}
    </MotionElement>
  );
}
