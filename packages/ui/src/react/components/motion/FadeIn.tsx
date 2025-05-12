import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { get } from 'lodash-es';
import React, { type FC } from 'react';

import { type FadePropsOptions, createFadeProps } from '../../../lib';

export type FadeInProps<T extends React.ElementType = 'div'> = Omit<
  FadePropsOptions,
  'as'
> & {
  as?: T extends React.ElementType ? T : never;
} & React.ComponentProps<T>;

export function FadeIn<T extends React.ElementType>(
  props: FadeInProps<T>,
): React.ReactNode {
  const { as, tag } = props;
  const shouldReduceMotion = useReducedMotion();

  const Component: FC =
    typeof tag === 'function' ? tag : get(motion, [as ?? 'div']);

  return (
    <AnimatePresence>
      <Component
        as={as}
        {...props}
        {...createFadeProps({
          ...props,
          shouldReduceMotion,
        })}
      />
    </AnimatePresence>
  );
}
