import { useButton } from '@react-aria/button';
import { motion } from 'framer-motion';
import { get } from 'lodash-es';
import React from 'react';
import { tv } from 'tailwind-variants';

import { type ButtonProps } from 'src/domain/types/button';
import { composeAnimationProps } from 'src/utils/composeAnimationProps';
import { focusRing } from 'src/utils/focusRing';

const buttonStyles = tv({
  extend: focusRing,
  base: 'px-5 py-2 text-sm text-center transition rounded-lg cursor-default',
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
    isDisabled: {
      true: 'bg-gray-100 dark:bg-zinc-800 text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText] border-black/5 dark:border-white/5',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export function Button(props: ButtonProps): React.ReactNode {
  const ref = React.useRef(null);

  const { buttonProps } = useButton(props, ref);

  return (
    // @ts-expect-error types between Aria and Motion
    <motion.button
      ref={ref}
      type={get(props, ['type'], 'button')}
      {...composeAnimationProps(props)}
      {...buttonProps}
      className={buttonStyles({
        variant: get(props, ['variant'], 'primary'),
        className: props['className'],
      })}
    >
      {props.children}
    </motion.button>
  );
}

Button.displayName = 'Button';
