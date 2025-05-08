import { get } from 'lodash-es';

import { type AnimationProps } from '../domain';

export const composeAnimationProps = (
  props: unknown,
): { [K in keyof Required<AnimationProps>]: AnimationProps[K] } => {
  return {
    animate: get(props, ['animate']),
    initial: get(props, ['initial']),
    exit: get(props, ['exit']),
    whileHover: get(props, ['whileHover']),
    whileTap: get(props, ['whileTap']),
    whileFocus: get(props, ['whileFocus']),
    variants: get(props, ['variants']),
    transition: get(props, ['transition']) as TransitionEvent,
  };
};
