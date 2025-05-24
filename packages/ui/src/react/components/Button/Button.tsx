import { get } from 'lodash-es';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import {
  type A11yButtonProps as ButtonPropsBase,
  buttonStyles,
  composeAnimationProps,
  createA11yButtonProps,
  cursorStyles,
} from '../../../lib';
import { MotionElement } from '../motion';

export type ButtonProps = React.PropsWithChildren<ButtonPropsBase>;

export function Button(props: ButtonProps): React.ReactNode {
  const { fullWidth: _, ...rest } = props;

  return (
    <MotionElement
      as='button'
      className={twMerge(buttonStyles(props), cursorStyles(props))}
      type={get(props, ['type'], 'button')}
      {...createA11yButtonProps(rest)}
      {...composeAnimationProps(props)}
    >
      {props.children}
    </MotionElement>
  );
}

Button.displayName = 'Button';
