import { type HTMLMotionProps, type MotionProps } from 'framer-motion';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

import { cursors } from 'src/utils/cursors';
import { focusRing } from 'src/utils/focusRing';

import { type CommonProps } from '../../types';
import { composeAnimationProps } from '../../utils/composeAnimationProps';
import { MotionElement } from '../motion/MotionElement';

const InputStyles = tv({
  extend: focusRing,
  base: 'full-width px-4 py-1.5 flex-1 min-w-0 outline outline-0 bg-white dark:bg-zinc-900 text-md text-gray-800 dark:text-gray-300 ',
  variants: {
    isFocusWithin: {
      false:
        'border-gray-300 dark:border-zinc-500 forced-colors:border-[ButtonBorder]',
      true: 'border-gray-600 dark:border-zinc-300 forced-colors:border-[Highlight]',
    },
    isInvalid: {
      true: 'border-red-600 dark:border-red-600 forced-colors:border-[Mark]',
    },
    disabled: {
      true: 'disabled:text-gray-200 dark:disabled:text-gray-500 dark:bg-zinc-700 border-gray-200 dark:border-zinc-700 forced-colors:border-[GrayText]',
    },
  },
});

export type InputProps = MotionProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  CommonProps;

export function Input(props: InputProps): React.ReactNode {
  return (
    <MotionElement
      as='input'
      {...composeAnimationProps(props)}
      {...(props as HTMLMotionProps<'input'>)}
      className={twMerge(
        InputStyles(props),
        cursors(props),
        props.className,
        'w-full flex items-center h-12 bg-white dark:bg-zinc-900 forced-colors:bg-[Field] border-2 rounded-lg overflow-hidden',
      )}
    />
  );
}
