import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { get } from 'lodash-es';
import React, { type FC } from 'react';

import { type FadePropsOptions, createFadeProps } from '../../../lib';

export type FadeInProps<T extends React.ElementType = 'div'> = Omit<
  FadePropsOptions,
  'tag'
> & {
  tag?: T extends React.ElementType ? T : never;
} & React.ComponentProps<T>;

export function FadeIn<T extends React.ElementType>(
  props: FadeInProps<T>,
): React.ReactNode {
  const { tag, ...restProps } = props;
  const shouldReduceMotion = useReducedMotion();

  const IntrinsicElement: FC<T> =
    typeof tag === 'function' ? tag : get(motion, [tag ?? 'div']);

  return (
    <AnimatePresence>
      {/*// @ts-expect-error mismatch between Motion and React.ElementType<T> */}
      <IntrinsicElement
        {...restProps}
        {...createFadeProps({
          ...restProps,
          shouldReduceMotion,
        })}
      />
    </AnimatePresence>
  );
}
