import { type MotionProps, motion } from 'framer-motion';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

import { composeAnimationProps } from '../../utils/composeAnimationProps';

const HtmlLabelElementStyles = tv({
  base: 'px-2 py-1.5 flex-1 min-w-0 outline outline-0 bg-white dark:bg-zinc-900 text-sm text-gray-800 dark:text-zinc-200 disabled:text-gray-200 dark:disabled:text-zinc-600',
});

export interface LabelProps
  extends React.PropsWithChildren<
    MotionProps & React.LabelHTMLAttributes<HTMLLabelElement>
  > {}

export function Label(props: LabelProps): React.ReactNode {
  return (
    <motion.label
      {...composeAnimationProps({ ...props })}
      className={twMerge(HtmlLabelElementStyles(), props.className)}
    />
  );
}
