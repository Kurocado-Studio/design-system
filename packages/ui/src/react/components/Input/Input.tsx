import React from 'react';
import { twMerge } from 'tailwind-merge';

import {
  type ReactCommonHTMLElementProps,
  composeAnimationProps,
  cursorStyles,
  inputStyles,
} from '../../../lib';
import { MotionElement } from '../motion';

export type InputProps = ReactCommonHTMLElementProps<HTMLInputElement, 'input'>;

export function Input(props: InputProps): React.ReactNode {
  return (
    <MotionElement
      tag='input'
      {...props}
      {...composeAnimationProps(props)}
      className={twMerge(
        inputStyles(props),
        cursorStyles(props),
        props.className,
      )}
    />
  );
}
