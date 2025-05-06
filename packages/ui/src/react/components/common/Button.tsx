import { useButton } from '@react-aria/button';
import { type HTMLMotionProps } from 'framer-motion';
import { get } from 'lodash-es';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { composeAnimationProps } from 'src/lib';
import { buttonStyles } from 'src/lib/domain/components/Button/button.styles';
import { cursorStyles } from 'src/lib/domain/components/common/cursor.styles';
import { type ButtonProps as ButtonPropsBase } from 'src/lib/domain/types/button';
import { MotionElement } from 'src/react/components/motion';

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
