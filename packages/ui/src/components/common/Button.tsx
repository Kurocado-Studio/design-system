import { type AriaButtonOptions, useButton } from '@react-aria/button';
import { type HTMLMotionProps, type MotionProps, motion } from 'framer-motion';
import { get } from 'lodash-es';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

import type { CommonProps } from 'src/types';
import { cursors } from 'src/utils/cursors';
import { focusRing } from 'src/utils/focusRing';

const buttonStyles = tv({
  extend: focusRing,
  base: 'px-5 py-2 text-sm text-center transition rounded-lg',
  variants: {
    variant: {
      primary: 'bg-blue-600 hover:bg-blue-700 pressed:bg-blue-800 text-white',
      secondary:
        'bg-gray-100 hover:bg-gray-200 pressed:bg-gray-300 text-gray-800 dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:pressed:bg-zinc-400 dark:text-zinc-100',
      destructive: 'bg-red-700 hover:bg-red-800 pressed:bg-red-900 text-white',
      success:
        'bg-green-700 hover:bg-green-800 pressed:bg-green-900 text-white',
      icon: 'border-0 p-1 flex items-center justify-center text-gray-600 hover:bg-black/[5%] pressed:bg-black/10 dark:text-zinc-400 dark:hover:bg-white/10 dark:pressed:bg-white/20 disabled:bg-transparent',
    },
    disabled: {
      true: 'bg-gray-200 hover:bg-gray-200 dark:bg-zinc-800 text-gray-500 dark:text-zinc-600 forced-colors:text-[GrayText]',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export type ButtonProps = MotionProps &
  AriaButtonOptions<'button'> &
  CommonProps;

export function Button(props: ButtonProps): React.ReactNode {
  const ref = React.useRef(null);

  const { buttonProps } = useButton(props, ref);
  return (
    <motion.button
      ref={ref}
      type={get(props, ['type'], 'button')}
      {...props}
      {...(buttonProps as HTMLMotionProps<'button'>)}
      className={twMerge(buttonStyles(props), cursors(props))}
    >
      {props.children}
    </motion.button>
  );
}

Button.displayName = 'Button';
