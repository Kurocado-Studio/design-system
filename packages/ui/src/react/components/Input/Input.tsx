import React from 'react';
import { twMerge } from 'tailwind-merge';

import {
  type InputProps as InputBaseProps,
  composeAnimationProps,
  cursorStyles,
  inputStyles,
} from '../../../lib';
import { MotionElement } from '../motion';

export type InputProps = InputBaseProps & { className?: string };

export function Input(props: InputProps): React.ReactNode {
  return (
    <MotionElement
      as='input'
      {...composeAnimationProps(props)}
      {...props}
      className={twMerge(
        inputStyles(props),
        cursorStyles(props),
        props.className,
      )}
    />
  );
}
