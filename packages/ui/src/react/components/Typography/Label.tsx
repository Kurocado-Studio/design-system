import React from 'react';

import { Typography, type TypographyProps } from './Typography';

export type LabelProps = React.PropsWithChildren<
  Partial<HTMLLabelElement> & { className?: string }
>;

export function Label(props: LabelProps): React.ReactNode {
  return (
    <Typography
      as='label'
      size='caption'
      weight='bold'
      leading='tight'
      className={props.className}
      {...(props as TypographyProps)}
    >
      {props.children}
    </Typography>
  );
}
