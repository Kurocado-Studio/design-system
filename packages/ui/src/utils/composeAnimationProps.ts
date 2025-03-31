import { type HTMLMotionProps } from 'framer-motion';
import type React from 'react';

import { type AnimationProps } from 'src/domain/types/animation';

export const composeAnimationProps = <T extends React.HTMLElementType>(
  props: HTMLMotionProps<T>,
): { [K in keyof Required<AnimationProps>]: AnimationProps[K] } => {
  return {
    animate: props.animate,
    initial: props.initial,
    exit: props.exit,
    whileHover: props.whileHover,
    whileTap: props.whileTap,
    whileFocus: props.whileFocus,
    variants: props.variants,
    transition: props.transition,
  };
};
