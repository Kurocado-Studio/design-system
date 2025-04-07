import { type MotionProps } from 'framer-motion';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

import { MotionElement } from 'src/components/motion';
import type { ChildrenType } from 'src/domain/types';
import { composeAnimationProps } from 'src/utils';

export const HtmlLabelElementStyles = tv({
  base: 'px-2 py-1.5 flex-1 min-w-0 outline outline-0 bg-white dark:bg-zinc-900 text-sm text-gray-800 dark:text-zinc-200 disabled:text-gray-200 dark:disabled:text-zinc-600',
});

export type LabelProps = MotionProps &
  React.LabelHTMLAttributes<HTMLLabelElement> & {
    children?: ChildrenType;
  };

export function Label(props: LabelProps): React.ReactNode {
  return (
    <MotionElement
      as='label'
      {...composeAnimationProps(props)}
      className={twMerge(HtmlLabelElementStyles(), props.className)}
    />
  );
}
