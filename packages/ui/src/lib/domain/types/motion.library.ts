import type { MotionProps } from 'framer-motion';

export type * from 'framer-motion';
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
