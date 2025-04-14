import { useButton } from '@react-aria/button';
import { type HTMLMotionProps } from 'framer-motion';
import { get } from 'lodash-es';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { MotionElement } from 'src/components/motion';
import { buttonStyles } from 'src/domain/infra/button';
import { cursors } from 'src/domain/infra/cursors';
import { type ButtonProps } from 'src/domain/types/button';
import { composeAnimationProps } from 'src/utils';

export { type ButtonProps } from 'src/domain/types/button';

export function Button(props: ButtonProps): React.ReactNode {
  const ref = React.useRef(null);

  const { buttonProps } = useButton(props, ref);
  return (
    <MotionElement
      as='button'
      className={twMerge(buttonStyles(props), cursors(props))}
      ref={ref}
      type={get(props, ['type'], 'button')}
      {...(buttonProps as HTMLMotionProps<'button'>)}
      {...composeAnimationProps(props)}
    >
      {props.children}
    </MotionElement>
  );
}

Button.displayName = 'Button';
