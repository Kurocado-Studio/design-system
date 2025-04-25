import { useButton } from '@react-aria/button';
import { type HTMLMotionProps } from 'framer-motion';
import { get } from 'lodash-es';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { composeAnimationProps } from 'src/lib';
import { type ButtonProps } from 'src/lib/domain/types/button';
import { buttonStyles } from 'src/lib/infra/button';
import { cursors } from 'src/lib/infra/cursors';
import { MotionElement } from 'src/react/components/motion';

export { type ButtonProps } from 'src/lib/domain/types/button';

export function Button(props: ButtonProps): React.ReactNode {
  const ref = React.useRef(null);

  const { buttonProps } = useButton(props, ref);
  return (
    <MotionElement
      as='button'
      className={twMerge(buttonStyles(props), cursors(props))}
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
