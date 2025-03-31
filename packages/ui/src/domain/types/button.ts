import type { AriaButtonOptions } from '@react-aria/button';
import type React from 'react';

import type { AnimationProps } from './animation';

/**
 * ButtonProps extends AnimationProps to include both the motion-specific properties
 * and any additional props needed by your Button component.
 */
export interface ButtonProps
  extends AnimationProps,
    AriaButtonOptions<'button'> {
  /**
   * variant: A custom property to control styling variations (e.g., 'primary', 'secondary').
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'destructive'
    | 'success'
    | 'icon'
    | undefined;
  /**
   * className: Additional class name to add
   */
  className?: string;
  /**
   * children: The content to be rendered inside the button.
   */
  children?: React.ReactNode;
  // You can add any other custom props here
}
