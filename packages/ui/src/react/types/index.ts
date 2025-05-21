import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type PropsWithChildren,
} from 'react';
import type React from 'react';

export type ReactPolymorphicProps<
  T extends ElementType,
  K = {},
> = PropsWithChildren<K> &
  ComponentPropsWithoutRef<T> & {
    tag?: T;
  };

export type InferComponentProps<T> = T extends keyof React.JSX.IntrinsicElements
  ? React.JSX.IntrinsicElements[T]
  : T extends Record<string, unknown>
    ? T
    : T extends React.JSXElementConstructor<infer P>
      ? P
      : never;
