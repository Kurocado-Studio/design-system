import { get } from 'lodash-es';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import React, { type FC, type PropsWithChildren } from 'react';

import { type FadePropsOptions, createFadeProps } from '../../../lib';

export type FadeInProps<T extends React.ElementType = 'div'> = Omit<
  FadePropsOptions,
  'as'
> & {
  as?: T extends React.ElementType ? T : never;
} & React.ComponentProps<T>;

export function FadeIn<T extends React.ElementType>(
  props: PropsWithChildren<FadeInProps<T>>,
): React.ReactNode {
  const { as, tag, ...rest } = props;
  const shouldReduceMotion = useReducedMotion();

  const Component: FC =
    typeof tag === 'function' ? tag : get(motion, [as], 'div');

  return (
    <AnimatePresence>
      {/*  @ts-expect-error type mismatch between React and Motion*/}
      <Component
        as={as}
        {...rest}
        {...createFadeProps({
          ...props,
          shouldReduceMotion,
        })}
      >
        {props.children}
      </Component>
    </AnimatePresence>
  );
}
