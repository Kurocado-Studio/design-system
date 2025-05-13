/* eslint-disable import/order */
/**
 * TODO: fix mismatch between ESLint sort order still
 */
import React from 'react';

import { type ComposeLabelOptions, composeLabel } from '../../../lib';
import { Typography } from './Typography';

export type LabelProps = React.PropsWithChildren<
  ComposeLabelOptions & { className?: string }
>;

export function Label(props: LabelProps): React.ReactNode {
  return (
    <Typography {...composeLabel(props)} className={props.className}>
      {props.children}
    </Typography>
  );
}
