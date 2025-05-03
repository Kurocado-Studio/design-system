import { type HTMLMotionProps } from 'framer-motion';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import {
  type InputProps,
  composeAnimationProps,
  cursorStyles,
  inputStyles,
} from 'src/lib';
import { MotionElement } from 'src/react/components/motion';

export function Input(props: InputProps): React.ReactNode {
  return (
    <MotionElement
      as='input'
      {...composeAnimationProps(props)}
      {...(props as HTMLMotionProps<'input'>)}
      className={twMerge(
        inputStyles(props),
        cursorStyles(props),
        props.className,
      )}
    />
  );
}
