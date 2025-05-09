import React from 'react';
import { twMerge } from 'tailwind-merge';

import {
  type InputProps,
  composeAnimationProps,
  cursorStyles,
  inputStyles,
} from '../../../lib';
import { MotionElement } from '../motion';

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
