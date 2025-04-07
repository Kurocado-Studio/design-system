import type { Variants } from 'framer-motion';
import { AnimatePresence, useReducedMotion } from 'framer-motion';
import { get } from 'lodash-es';
import React, { createContext, useContext } from 'react';

import { MotionElement } from 'src/components/motion/MotionElement';
import type { HTMLIntrinsicElements, PropsWithoutRef } from 'src/domain/types';

const FadeInStaggerContext = createContext(false);

const viewport = { once: false, margin: '0px 0px -200px' };

interface FadeInStaggerProps extends PropsWithoutRef<'div'> {
  faster?: boolean;
  as?: HTMLIntrinsicElements;
}

export enum FadeInDirection {
  DEFAULT = 'DEFAULT',
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT_TO_RIGHT = 'LEFT_TO_RIGHT',
}

export type FadeInProps<T extends HTMLIntrinsicElements> =
  PropsWithoutRef<T> & {
    direction?: FadeInDirection;
    as?: T;
  };

export function FadeIn<T extends HTMLIntrinsicElements = 'div'>(
  props: FadeInProps<T>,
): React.ReactNode {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  const { direction, as, ...restProps } = props;

  const variantMap: { [K in FadeInDirection]: Variants } = {
    [FadeInDirection.DEFAULT]: {
      hidden: { opacity: 0, y: 0 },
      visible: { opacity: 1, y: 0 },
    },
    [FadeInDirection.UP]: {
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
      visible: { opacity: 1, y: 0 },
    },
    [FadeInDirection.DOWN]: {
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -24 },
      visible: { opacity: 1, y: 0 },
    },
    [FadeInDirection.LEFT_TO_RIGHT]: {
      hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -24 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <AnimatePresence>
      <MotionElement
        as={as}
        {...restProps}
        {...(!isInStaggerGroup && {
          initial: 'hidden',
          whileInView: 'visible',
          viewport,
        })}
        variants={get(variantMap, [direction ?? FadeInDirection.DEFAULT])}
        transition={{ duration: 0.5 }}
      />
    </AnimatePresence>
  );
}

export function FadeInStagger({
  faster = false,
  as,
  ...props
}: FadeInStaggerProps): React.ReactNode {
  return (
    <FadeInStaggerContext.Provider value>
      <MotionElement
        {...props}
        as={as}
        initial='hidden'
        whileInView='visible'
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
      />
    </FadeInStaggerContext.Provider>
  );
}
