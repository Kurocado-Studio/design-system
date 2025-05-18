/* eslint import/order:0 */
/**
 *
 * TODO: fix mismatch between ESLint sort order still
 */
import { get } from 'lodash-es';

import { type Framework, type MotionIntrinsicProps } from '../../types';
import { DEFAULT_STAGGER_SPEED, DEFAULT_VIEWPORT } from './constants';

export function createStaggerContainerProps<
  T extends string,
  K extends Framework,
>(options: { staggerSpeed?: number }): Partial<MotionIntrinsicProps<T, K>> {
  const staggerSpeed = get(options, ['staggerSpeed'], DEFAULT_STAGGER_SPEED);

  return {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: DEFAULT_VIEWPORT,
    variants: {
      hidden: {},
      visible: { transition: { staggerChildren: staggerSpeed } },
    },
  } as MotionIntrinsicProps<T, K>;
}
