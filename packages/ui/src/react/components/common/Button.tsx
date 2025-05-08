import { useButton } from '@react-aria/button';
import { type HTMLMotionProps } from 'framer-motion';
import { get } from 'lodash-es';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import {
  type ButtonProps as ButtonPropsBase,
  buttonStyles,
  composeAnimationProps,
  cursorStyles,
} from '../../../lib';
import { MotionElement } from '../motion';

export type ButtonProps = React.PropsWithChildren<ButtonPropsBase>;

export function Button(props: ButtonProps): React.ReactNode {
  const ref = React.useRef(null);

  const { buttonProps } = useButton(props, ref);
  return (
    <MotionElement
      as='button'
      className={twMerge(buttonStyles(props), cursorStyles<ButtonProps>(props))}
      ref={ref}
      type={get(props, ['type'], 'button')}
      {...(buttonProps as unknown as HTMLMotionProps<'button'>)}
      {...composeAnimationProps(props)}
    >
      {props.children}
    </MotionElement>
  );
}

Button.displayName = 'Button';
