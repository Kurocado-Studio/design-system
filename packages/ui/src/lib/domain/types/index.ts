import { type MotionProps, type motion } from 'framer-motion';
import type React from 'react';

/**
 * AnimationProps details the animation‐related properties that Framer Motion supports.
 * Many of these are already part of HTMLMotionProps, but here we list them with documentation.
 */
export interface AnimationProps {
  /**
   * animate: Defines the final visual state of your component.
   * This can be an object describing CSS properties, or a string referencing a named variant.
   */
  animate?: MotionProps['animate'];
  /**
   * initial: Specifies the starting state before any animations begin.
   */
  initial?: MotionProps['initial'];
  /**
   * exit: Defines the state for the component when it leaves the React tree.
   */
  exit?: MotionProps['exit'];
  /**
   * whileHover: The state applied when the pointer hovers over the component.
   */
  whileHover?: MotionProps['whileHover'];
  /**
   * whileTap: The state applied when the component is pressed or clicked.
   */
  whileTap?: MotionProps['whileTap'];
  /**
   * whileFocus: The state applied when the component gains focus.
   */
  whileFocus?: MotionProps['whileFocus'];
  /**
   * variants: A mapping of named animation states, allowing you to reuse animation definitions.
   */
  variants?: MotionProps['variants'];
  /**
   * transition: Configures how the animation transitions occur, e.g., delay, duration, and easing.
   */
  transition?: MotionProps['transition'];
}

export type CommonProps = {
  className?: string;
  disabled?: boolean;
  loading?: boolean;
};

export type Theme = Record<string, Record<string, unknown>>;

export type HTMLIntrinsicElements = keyof React.JSX.IntrinsicElements;

export type PropsWithoutRef<T extends HTMLIntrinsicElements> =
  T extends keyof typeof motion
    ? Omit<React.ComponentPropsWithoutRef<(typeof motion)[T]>, 'ref'>
    : never;
