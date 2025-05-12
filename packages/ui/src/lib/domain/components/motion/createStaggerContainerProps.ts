/* eslint-disable import/order */
import { get } from 'lodash-es';

import { type MotionProps } from '../../types';
import { DEFAULT_STAGGER_SPEED, DEFAULT_VIEWPORT } from './constants';

export function createStaggerContainerProps(options: {
  staggerSpeed?: number;
}): Partial<MotionProps> {
  const staggerSpeed = get(options, ['staggerSpeed'], DEFAULT_STAGGER_SPEED);

  return {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: DEFAULT_VIEWPORT,
    variants: {
      hidden: {},
      visible: { transition: { staggerChildren: staggerSpeed } },
    },
  };
}
